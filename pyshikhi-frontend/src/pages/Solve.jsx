import { useState } from 'react';
import { Sparkles, Copy, Check, Play, History } from 'lucide-react';
import CodeEditor from '../components/CodeEditor';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';

const Solve = () => {
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const { currentUser } = useAuth();

  const solveProblem = async () => {
    if (!problem.trim()) {
      setError('প্রশ্ন লিখুন (Please enter a problem)');
      return;
    }

    setLoading(true);
    setError('');
    setSolution(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/solve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ problem }),
      });

      if (!response.ok) {
        throw new Error('Failed to get solution from AI');
      }

      const data = await response.json();
      setSolution(data);

      // Save to history
      const newHistoryItem = {
        problem,
        solution: data,
        timestamp: new Date().toISOString(),
      };
      setHistory((prev) => [newHistoryItem, ...prev]);

      // Save to Firestore
      if (currentUser) {
        try {
          const userRef = doc(db, 'users', currentUser.uid);
          await updateDoc(userRef, {
            'solveHistory': arrayUnion(newHistoryItem),
            'progress.lastActive': new Date().toISOString(),
          });
        } catch (err) {
          console.error('Failed to save history:', err);
        }
      }
    } catch (err) {
      console.error(err);
      setError('সমাধান পেতে ব্যর্থ হয়েছে। আবার চেষ্টা করুন। (Failed to get solution. Please try again.)');
    } finally {
      setLoading(false);
    }
  };

  const runCode = async () => {
    if (!solution?.code) return;

    setRunning(true);
    setOutput('');

    try {
      const pyodide = window.pyodide || await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
      });

      await pyodide.runPythonAsync(`
import sys
import io
sys.stdout = io.StringIO()
      `);

      await pyodide.runPythonAsync(solution.code);
      const result = await pyodide.runPythonAsync('sys.stdout.getvalue()');
      setOutput(result || '(No output)');
    } catch (err) {
      setOutput(`Error: ${err.message}`);
    } finally {
      setRunning(false);
    }
  };

  const copyCode = () => {
    if (solution?.code) {
      navigator.clipboard.writeText(solution.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const loadFromHistory = (item) => {
    setProblem(item.problem);
    setSolution(item.solution);
    setShowHistory(false);
    setOutput('');
  };

  return (
    <div className="p-4 pb-20 lg:pb-4 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          AI সমাধানকারী (AI Problem Solver)
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          যেকোনো Python সমস্যা বা error এর সমাধান পান বাংলা কমেন্ট সহ
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                আপনার সমস্যা বর্ণনা করুন (Describe Your Problem):
              </h2>
              {history.length > 0 && (
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition text-sm"
                >
                  <History className="w-4 h-4" />
                  History ({history.length})
                </button>
              )}
            </div>

            <textarea
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="উদাহরণ: Write a Python program to find the factorial of a number&#10;অথবা&#10;আমার এই কোডে error আসছে: [আপনার কোড পেস্ট করুন]"
              className="w-full h-48 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-bengali resize-none outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {error && (
              <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              onClick={solveProblem}
              disabled={loading}
              className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-lg font-medium transition disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  AI চিন্তা করছে...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  সমাধান পান (Get Solution)
                </>
              )}
            </button>
          </div>

          {/* Solution Section */}
          {solution && (
            <div className="space-y-4">
              {/* Explanation */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  ব্যাখ্যা (Explanation):
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-bengali whitespace-pre-line">
                  {solution.explanation}
                </p>
              </div>

              {/* Code */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    সমাধান কোড (Solution Code):
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={copyCode}
                      className="flex items-center gap-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition text-sm"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-500" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                    <button
                      onClick={runCode}
                      disabled={running}
                      className="flex items-center gap-1 px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition text-sm disabled:opacity-50"
                    >
                      <Play className="w-4 h-4" />
                      {running ? 'Running...' : 'Run'}
                    </button>
                  </div>
                </div>

                <CodeEditor value={solution.code} readOnly={true} />
              </div>

              {/* Output */}
              {output && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Output:
                  </h3>
                  <pre className="p-4 bg-gray-900 text-green-400 rounded-lg overflow-x-auto text-sm font-mono">
                    {output}
                  </pre>
                </div>
              )}

              {/* Sample Output */}
              {solution.sampleOutput && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    নমুনা আউটপুট (Sample Output):
                  </h3>
                  <pre className="p-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg overflow-x-auto text-sm font-mono">
                    {solution.sampleOutput}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>

        {/* History Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sticky top-20">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              সাম্প্রতিক সমাধান (Recent Solutions)
            </h3>
            
            {history.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-8">
                এখনো কোনো সমাধান নেই
              </p>
            ) : (
              <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                {history.slice(0, 10).map((item, index) => (
                  <button
                    key={index}
                    onClick={() => loadFromHistory(item)}
                    className="w-full p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-left transition"
                  >
                    <p className="text-sm text-gray-900 dark:text-white line-clamp-2 font-bengali">
                      {item.problem}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {new Date(item.timestamp).toLocaleDateString('bn-BD')}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solve;

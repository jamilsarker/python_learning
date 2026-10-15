import { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import CodeEditor from '../components/CodeEditor';
import { Play, Lightbulb, Eye, CheckCircle, XCircle, Filter } from 'lucide-react';

const Question = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [testResult, setTestResult] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [running, setRunning] = useState(false);
  const [pyodide, setPyodide] = useState(null);
  const [loadingPyodide, setLoadingPyodide] = useState(true);
  const [filter, setFilter] = useState('all');

  // Load Pyodide
  useEffect(() => {
    const loadPyodideInstance = async () => {
      try {
        const pyodideModule = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
        });
        setPyodide(pyodideModule);
        setLoadingPyodide(false);
      } catch (err) {
        console.error('Failed to load Pyodide:', err);
        setLoadingPyodide(false);
      }
    };

    if (!window.pyodide) {
      loadPyodideInstance();
    } else {
      setPyodide(window.pyodide);
      setLoadingPyodide(false);
    }
  }, []);

  useEffect(() => {
    if (selectedQuestion) {
      const question = questions.find((q) => q.id === selectedQuestion);
      setCode(question?.starterCode || '');
      setOutput('');
      setTestResult(null);
      setShowHint(false);
      setShowSolution(false);
    }
  }, [selectedQuestion]);

  const runCode = async () => {
    if (!pyodide) {
      setOutput('Error: Python environment not loaded yet');
      return;
    }

    setRunning(true);
    setOutput('');
    setTestResult(null);

    try {
      // Redirect stdout
      await pyodide.runPythonAsync(`
import sys
import io
sys.stdout = io.StringIO()
      `);

      // Run user code
      await pyodide.runPythonAsync(code);

      // Get output
      const result = await pyodide.runPythonAsync('sys.stdout.getvalue()');
      const trimmedResult = result.trim();
      setOutput(trimmedResult || '(No output)');

      // Check test cases
      const question = questions.find((q) => q.id === selectedQuestion);
      if (question && question.testCases && question.testCases.length > 0) {
        const testCase = question.testCases[0];
        const passed = trimmedResult === testCase.expected;

        setTestResult({
          passed,
          expected: testCase.expected,
          actual: trimmedResult,
        });

        if (passed) {
          // Mark question as solved
          await markQuestionSolved(question.id);
        }
      }
    } catch (err) {
      setOutput(`Error: ${err.message}`);
      setTestResult({ passed: false, error: err.message });
    } finally {
      setRunning(false);
    }
  };

  const markQuestionSolved = async (questionId) => {
    // Demo mode - just console log
    console.log('✅ Question solved:', questionId);
  };

  const filteredQuestions =
    filter === 'all'
      ? questions
      : questions.filter((q) => q.difficulty === filter);

  return (
    <div className="p-4 pb-20 lg:pb-4 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          প্রশ্ন সমাধান করুন (Solve Questions)
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          কোড লিখে সমস্যা সমাধান করুন এবং দক্ষতা বাড়ান
        </p>
      </div>

      {loadingPyodide && (
        <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-400 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300 px-4 py-3 rounded-lg mb-4">
          Python environment loading... Please wait.
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Question List */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sticky top-20">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white outline-none"
              >
                <option value="all">All Levels</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
              {filteredQuestions.map((question) => (
                <button
                  key={question.id}
                  onClick={() => setSelectedQuestion(question.id)}
                  className={`w-full p-3 rounded-lg text-left transition ${
                    selectedQuestion === question.id
                      ? 'bg-indigo-100 dark:bg-indigo-900/30 border-2 border-indigo-500'
                      : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-2 border-transparent'
                  }`}
                >
                  <h3 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                    {question.title_bn}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        question.difficulty === 'easy'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : question.difficulty === 'medium'
                          ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      }`}
                    >
                      {question.difficulty}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {question.topic}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Question Details & Code Editor */}
        <div className="lg:col-span-2">
          {selectedQuestion ? (
            <div className="space-y-4">
              {/* Question Details */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {questions.find((q) => q.id === selectedQuestion)?.title_bn}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {questions.find((q) => q.id === selectedQuestion)?.title}
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-bengali mb-4">
                  {questions.find((q) => q.id === selectedQuestion)?.description}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition"
                  >
                    <Lightbulb className="w-4 h-4" />
                    {showHint ? 'Hide Hint' : 'Show Hint'}
                  </button>
                  <button
                    onClick={() => setShowSolution(!showSolution)}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition"
                  >
                    <Eye className="w-4 h-4" />
                    {showSolution ? 'Hide Solution' : 'Show Solution'}
                  </button>
                </div>

                {showHint && (
                  <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                    <p className="text-sm text-yellow-800 dark:text-yellow-300 font-bengali">
                      <strong>Hint:</strong>{' '}
                      {questions.find((q) => q.id === selectedQuestion)?.hint}
                    </p>
                  </div>
                )}

                {showSolution && (
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Solution:
                    </h3>
                    <CodeEditor
                      value={
                        questions.find((q) => q.id === selectedQuestion)
                          ?.solution || ''
                      }
                      readOnly={true}
                      height="250px"
                    />
                  </div>
                )}
              </div>

              {/* Code Editor */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    আপনার কোড লিখুন (Write Your Code):
                  </h3>
                  <button
                    onClick={runCode}
                    disabled={running || loadingPyodide}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition disabled:opacity-50"
                  >
                    <Play className="w-4 h-4" />
                    {running ? 'Running...' : 'Run & Submit'}
                  </button>
                </div>

                <CodeEditor value={code} onChange={(value) => setCode(value)} />
              </div>

              {/* Output */}
              {output && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Output:
                  </h3>
                  <pre className="p-4 bg-gray-900 text-green-400 rounded-lg overflow-x-auto text-sm font-mono">
                    {output}
                  </pre>
                </div>
              )}

              {/* Test Result */}
              {testResult && (
                <div
                  className={`rounded-xl shadow-lg p-6 ${
                    testResult.passed
                      ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
                      : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {testResult.passed ? (
                      <>
                        <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                        <div>
                          <h3 className="text-xl font-bold text-green-800 dark:text-green-300">
                            ✅ সঠিক (Correct)
                          </h3>
                          <p className="text-sm text-green-700 dark:text-green-400">
                            Congratulations! Your solution passed all test cases.
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                        <div>
                          <h3 className="text-xl font-bold text-red-800 dark:text-red-300">
                            ❌ ভুল (Wrong)
                          </h3>
                          <p className="text-sm text-red-700 dark:text-red-400">
                            Your solution didn't pass. Try again!
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  {!testResult.passed && !testResult.error && (
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong className="text-gray-700 dark:text-gray-300">
                          Expected:
                        </strong>
                        <pre className="mt-1 p-2 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600">
                          {testResult.expected}
                        </pre>
                      </div>
                      <div>
                        <strong className="text-gray-700 dark:text-gray-300">
                          Your Output:
                        </strong>
                        <pre className="mt-1 p-2 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600">
                          {testResult.actual}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                একটি প্রশ্ন নির্বাচন করুন (Select a question to start)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;

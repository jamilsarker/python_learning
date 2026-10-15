import { useState, useEffect } from 'react';
import { exercises } from '../data/exercises';
import CodeEditor from '../components/CodeEditor';
import { Play, Copy, Check, ChevronDown, ChevronRight } from 'lucide-react';

const Exercise = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [expandedExamples, setExpandedExamples] = useState({});
  const [runningCode, setRunningCode] = useState({});
  const [outputs, setOutputs] = useState({});
  const [copiedIds, setCopiedIds] = useState({});
  const [pyodide, setPyodide] = useState(null);
  const [loadingPyodide, setLoadingPyodide] = useState(true);

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

  const toggleExample = (exampleId) => {
    setExpandedExamples((prev) => ({
      ...prev,
      [exampleId]: !prev[exampleId],
    }));
  };

  const runCode = async (code, exampleId) => {
    if (!pyodide) {
      setOutputs((prev) => ({
        ...prev,
        [exampleId]: 'Error: Python environment not loaded yet',
      }));
      return;
    }

    setRunningCode((prev) => ({ ...prev, [exampleId]: true }));
    setOutputs((prev) => ({ ...prev, [exampleId]: '' }));

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
      const output = await pyodide.runPythonAsync('sys.stdout.getvalue()');
      setOutputs((prev) => ({ ...prev, [exampleId]: output || '(No output)' }));
    } catch (err) {
      setOutputs((prev) => ({
        ...prev,
        [exampleId]: `Error: ${err.message}`,
      }));
    } finally {
      setRunningCode((prev) => ({ ...prev, [exampleId]: false }));
    }
  };

  const copyCode = (code, exampleId) => {
    navigator.clipboard.writeText(code);
    setCopiedIds((prev) => ({ ...prev, [exampleId]: true }));
    setTimeout(() => {
      setCopiedIds((prev) => ({ ...prev, [exampleId]: false }));
    }, 2000);
  };

  const markTopicComplete = async (topicId) => {
    // Demo mode - just show alert
    alert('✅ টপিক সম্পূর্ণ হয়েছে! (Topic marked as complete!)');
  };

  return (
    <div className="p-4 pb-20 lg:pb-4 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          উদাহরণ থেকে শিখুন (Learn by Examples)
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          প্রতিটি উদাহরণ চালিয়ে এবং এডিট করে শিখুন
        </p>
      </div>

      {loadingPyodide && (
        <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-400 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300 px-4 py-3 rounded-lg mb-4">
          Python environment loading... Please wait.
        </div>
      )}

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {exercises.map((topic) => (
          <button
            key={topic.id}
            onClick={() => setSelectedTopic(topic.id)}
            className={`p-4 rounded-xl border-2 transition text-left ${
              selectedTopic === topic.id
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700'
            }`}
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
              {topic.topic_bn}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {topic.topic}
            </p>
            <div className="mt-2">
              <span
                className={`text-xs px-2 py-1 rounded ${
                  topic.difficulty === 'beginner'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : topic.difficulty === 'intermediate'
                    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                }`}
              >
                {topic.difficulty}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Topic Examples */}
      {selectedTopic && (
        <div className="space-y-6">
          {exercises
            .find((t) => t.id === selectedTopic)
            ?.examples.map((example) => (
              <div
                key={example.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <button
                  onClick={() => toggleExample(example.id)}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <div className="text-left">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {example.title_bn}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {example.title}
                    </p>
                  </div>
                  {expandedExamples[example.id] ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {expandedExamples[example.id] && (
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-4 font-bengali">
                      {example.description}
                    </p>

                    <div className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Code:
                        </span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => copyCode(example.code, example.id)}
                            className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-sm transition"
                          >
                            {copiedIds[example.id] ? (
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
                            onClick={() => runCode(example.code, example.id)}
                            disabled={runningCode[example.id] || loadingPyodide}
                            className="flex items-center gap-1 px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm transition disabled:opacity-50"
                          >
                            <Play className="w-4 h-4" />
                            {runningCode[example.id] ? 'Running...' : 'Run'}
                          </button>
                        </div>
                      </div>

                      <CodeEditor
                        value={example.code}
                        readOnly={true}
                        height="200px"
                      />
                    </div>

                    {outputs[example.id] !== undefined && (
                      <div className="mt-4">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Output:
                        </span>
                        <pre className="mt-2 p-3 bg-gray-900 text-green-400 rounded-lg overflow-x-auto text-sm font-mono">
                          {outputs[example.id]}
                        </pre>
                      </div>
                    )}

                    {example.output && (
                      <div className="mt-4">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Expected Output:
                        </span>
                        <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg overflow-x-auto text-sm font-mono">
                          {example.output}
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

          <button
            onClick={() => markTopicComplete(selectedTopic)}
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition"
          >
            টপিক সম্পূর্ণ করা হয়েছে চিহ্নিত করুন (Mark Topic Complete)
          </button>
        </div>
      )}
    </div>
  );
};

export default Exercise;

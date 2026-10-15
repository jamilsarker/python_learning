import Editor from '@monaco-editor/react';
import { useTheme } from '../contexts/ThemeContext';

const CodeEditor = ({ value, onChange, readOnly = false, height = '400px' }) => {
  const { theme } = useTheme();

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
      <Editor
        height={height}
        defaultLanguage="python"
        value={value}
        onChange={onChange}
        theme={theme === 'dark' ? 'vs-dark' : 'light'}
        options={{
          readOnly,
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 4,
          wordWrap: 'on',
        }}
      />
    </div>
  );
};

export default CodeEditor;

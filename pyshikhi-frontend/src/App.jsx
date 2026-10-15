import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Exercise from './pages/Exercise';
import Question from './pages/Question';
import Solve from './pages/Solve';

// 🎯 DEMO MODE - No login required!
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Direct access to dashboard - No login needed */}
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route index element={<Navigate to="/exercise" replace />} />
                  <Route path="exercise" element={<Exercise />} />
                  <Route path="question" element={<Question />} />
                  <Route path="solve" element={<Solve />} />
                  <Route path="*" element={<Navigate to="/exercise" replace />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

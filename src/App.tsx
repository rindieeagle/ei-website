import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import ForIndividualsPage from './pages/ForIndividualsPage';
import ForTherapistsPage from './pages/ForTherapistsPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/for-individuals" element={<ForIndividualsPage />} />
        <Route path="/for-therapists" element={<ForTherapistsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;

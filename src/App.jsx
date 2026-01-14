import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import RentalManagementDetails from './pages/RentalManagementDetails';
import DataAnalysisDetails from './pages/DataAnalysisDetails';
import AIDecisionAnalysisDetails from './pages/AIDecisionAnalysisDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/designation-intelligente.html" element={<ProjectDetails />} />
          <Route path="/gestion-locations" element={<RentalManagementDetails />} />
          <Route path="/analyse-donnees" element={<DataAnalysisDetails />} />
          <Route path="/analyse-ia-decision" element={<AIDecisionAnalysisDetails />} />
          {/* Keep the old URL structure for compatibility or redirect */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

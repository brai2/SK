import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ScannerPage from './pages/ScannerPage';
import TicketsPage from './pages/TicketsPage';
import CheckinPage from './pages/CheckinPage';
import './index.css';

function AppContent() {
  const [activeView, setActiveView] = useState('tickets'); // 'tickets', 'scanner', 'analytics'
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/myticket') {
      setActiveView('tickets');
    } else if (location.pathname === '/scanner' || location.pathname === '/checckin') {
      setActiveView('scanner');
    } else {
      setActiveView('tickets');
    }
  }, [location.pathname]);

  const renderContent = () => {
    switch (activeView) {
      case 'scanner':
        return <ScannerPage onDashboardClick={() => setActiveView('tickets')} />;
      case 'tickets':
        return <TicketsPage setActiveView={setActiveView} />;
      default:
        return <TicketsPage />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={renderContent()} />
          <Route path="/myticket" element={<TicketsPage setActiveView={setActiveView} />} />
          <Route path="/scanner" element={<ScannerPage onDashboardClick={() => setActiveView('tickets')} />} />
          <Route path="/checckin" element={<ScannerPage onDashboardClick={() => setActiveView('tickets')} />} />
          <Route path="/checkin" element={<ScannerPage onDashboardClick={() => setActiveView('tickets')} />} />
          <Route path="/checkin-result" element={<CheckinPage />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ScannerPage from './pages/ScannerPage';
import TicketsPage from './pages/TicketsPage';
import './index.css';

function App() {
  const [activeView, setActiveView] = useState('tickets'); // 'tickets', 'scanner', 'analytics'

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
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
import { useState } from 'react';
import TicketListSidebar from '../components/Sidebar.jsx';
import ScannerPage from './ScannerPage.jsx';
import TicketsPage from './TicketsPage.jsx';

export default function TicketCheckInApp() {
  const [activeView, setActiveView] = useState('tickets');

  const renderContent = () => {
    switch (activeView) {
      case 'scanner':
        return <ScannerPage onDashboardClick={() => setActiveView('tickets')} />;
      case 'tickets':
        return <TicketsPage setActiveView={setActiveView} />;
      default:
        return <TicketsPage setActiveView={setActiveView} />;
    }
  };

  return (
    <div className="app-container">
      <TicketListSidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="main-content">{renderContent()}</main>
    </div>
  );
}

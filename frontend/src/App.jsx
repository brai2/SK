import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar.jsx';
import Header from './components/layout/Header.jsx';
import QRCheckIn from './pages/dashboard/QRCheckIn.jsx';
import ParticipantList from './pages/dashboard/ParticipantList.jsx';

function App() {
  return (
    <div className="layout-wrapper">
      <Sidebar />
      <div className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/qr-scan" replace />} />
          <Route path="/qr-scan" element={<QRCheckIn />} />
          <Route path="/participants" element={<ParticipantList />} />
          <Route path="/dashboard" element={<QRCheckIn />} /> {/* Mock redirect */}
          {/* Other routes can be added here */}
        </Routes>
      </div>
    </div>
  );
}

export default App;

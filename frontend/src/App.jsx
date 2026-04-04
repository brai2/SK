import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import TicketBooking from './TicketBooking.jsx';
import Announcements from './Announcements.jsx';
import PaymentStep from './PaymentStep.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thong-bao" element={<Announcements />} />
      <Route path="/dat-ve" element={<TicketBooking />} />
      <Route path="/thanh-toan" element={<PaymentStep />} />
    </Routes>
  );
}

export default App;

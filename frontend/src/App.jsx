import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import TicketBooking from './TicketBooking.jsx';
import CheckoutPayment from './CheckoutPayment.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dat-ve" element={<TicketBooking />} />
      <Route path="/thanh-toan" element={<CheckoutPayment />} />
    </Routes>
  );
}

export default App;

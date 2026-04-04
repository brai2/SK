import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import TicketBooking from './TicketBooking.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dat-ve" element={<TicketBooking />} />
    </Routes>
  );
}

export default App;

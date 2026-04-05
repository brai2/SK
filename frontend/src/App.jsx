import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import TicketBooking from './TicketBooking.jsx';
import CheckoutPayment from './CheckoutPayment.jsx';
import AdminLayout from './admin/AdminLayout.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';
import EventManagement from './admin/EventManagement.jsx';
import AdminPlaceholder from './admin/AdminPlaceholder.jsx';
import TicketManagement from './admin/TicketManagement.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dat-ve" element={<TicketBooking />} />
      <Route path="/thanh-toan" element={<CheckoutPayment />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="events" element={<EventManagement />} />
        <Route path="tickets" element={<TicketManagement />} />
        <Route path="attendees" element={<AdminPlaceholder title="Người tham dự" />} />
        <Route path="reports" element={<AdminPlaceholder title="Báo cáo" />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

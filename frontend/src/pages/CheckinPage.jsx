import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckinPage = () => {
  const navigate = useNavigate();

  const handleScanNext = () => {
    navigate('/checckin');
  };

  const handleDashboard = () => {
    navigate('/myticket');
  };

  return (
    <div className="scanner-hero">
      <div className="success-icon-square">
        <div className="checkmark-circle">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>

      <h1 className="check-title-hero">Check-in Successful</h1>
      <p className="check-subtitle-hero">Access granted to the venue</p>

      <div className="attendee-card-v2">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
          alt="Alexandra Sterling" 
          className="attendee-v2-img"
        />
        
        <div className="attendee-v2-main">
          <div className="label-tiny">ATTENDEE PROFILE</div>
          <h3>Alexandra Sterling</h3>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div className="badge-v2" style={{ background: '#f5f3ff', color: '#7c3aed' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>
              VIP Backstage Pass
            </div>
            <div className="badge-v2" style={{ background: '#f8fafc', color: '#64748b' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              Entry: 19:42
            </div>
          </div>
        </div>

        <div className="gate-v2-info">
          <div className="label-tiny">ASSIGNED GATE</div>
          <div className="gate-v2-name">Main South Gate</div>
          <div className="seat-v2-info">Section A, Row 12</div>
        </div>
      </div>

      <div className="scanner-action-btns">
        <button className="btn-scan-next" onClick={handleScanNext}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="3" /></svg>
          Scan Next
        </button>
        <button className="btn-dashboard-white" onClick={handleDashboard}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
          Dashboard
        </button>
      </div>

      <div className="simulation-controls-v2">
        <div className="label-tiny">SIMULATION CONTROLS</div>
        <button 
          style={{ background: 'white', border: '1px solid #f1f5f9', padding: '10px 24px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}
          onClick={() => alert('Viewing Failed State Simulation')}
        >
          View Failed State
        </button>
      </div>
    </div>
  );
};

export default CheckinPage;


import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ScannerPage = ({ onDashboardClick }) => {
  const navigate = useNavigate();
  const [scanPhase, setScanPhase] = useState('loading');
  const [message, setMessage] = useState('Chuẩn bị mở camera');
  const [cameraError, setCameraError] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  useEffect(() => {
    let timeoutId;
    let mounted = true;

    const startCamera = async () => {
      setMessage('Mở camera...');
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (!mounted) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setMessage('Đang quét vé...');
        setScanPhase('scanning');

        timeoutId = window.setTimeout(() => {
          if (!mounted) return;
          stopCamera();
          navigate('/checkin-result');
        }, 700);
      } catch (err) {
        if (!mounted) return;
        setCameraError(true);
        setMessage('Không thể truy cập camera, mô phỏng quét...');
        setScanPhase('scanning');

        timeoutId = window.setTimeout(() => {
          if (!mounted) return;
          stopCamera();
          navigate('/checkin-result');
        }, 700);
      }
    };

    startCamera();

    return () => {
      mounted = false;
      if (timeoutId) window.clearTimeout(timeoutId);
      stopCamera();
    };
  }, [navigate]);

  return (
    <div className="scanner-hero" style={{ position: 'relative', minHeight: '78vh' }}>
      <div className="scanner-frame">
        <div className="scanner-frame-overlay">
          <h1 className="check-title-hero">Quét camera</h1>
          <p className="check-subtitle-hero">{message}</p>
        </div>

        <video
          ref={videoRef}
          className="scanner-video"
          autoPlay
          playsInline
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }}
        />

      </div>

      <div className="scanner-action-btns" style={{ marginTop: '24px' }}>
        <button className="btn-scan-next" onClick={() => window.location.reload()}>
          Quét lại
        </button>
        <button className="btn-dashboard-white" onClick={onDashboardClick}>
          Bảng điều khiển
        </button>
      </div>

      <style>{`
        .scanner-frame {
          width: 100%;
          max-width: 900px;
          min-height: 420px;
          background: #0f172a;
          border-radius: 32px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 32px 80px rgba(15, 23, 42, 0.12);
        }
        .scanner-frame-overlay {
          position: absolute;
          top: 24px;
          left: 24px;
          z-index: 2;
          color: white;
        }
        .scanner-video {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default ScannerPage;

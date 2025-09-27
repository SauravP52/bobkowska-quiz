import React from 'react';
import { useNavigate } from 'react-router-dom';

interface WelcomePageProps {
  onStart: () => void;
}

export function WelcomePage({ onStart }: WelcomePageProps) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="card">
        <h1>Welcome Jagoda 💖</h1>
        <p style={{ fontFamily: 'Caveat, Dancing Script, cursive', fontSize: 22, color: '#b8005c', margin: '24px 0' }}>
          A feature packed app custom crafted with love and creativity.
        </p>
        <p style={{ fontFamily: 'Caveat, Dancing Script, cursive', fontSize: 22, color: '#b8005c', margin: '24px 0' }}>
          1. 2025-08-26: Added feature to make custom journal entries with images and captions, to document our memories together. Hope you like it! 📝💝
        </p>
        <p style={{ fontFamily: 'Caveat, Dancing Script, cursive', fontSize: 22, color: '#b8005c', margin: '24px 0' }}>
          2. 2025-08-27: Added feature to track uber stock 📝💝
        </p>
         <p style={{ fontFamily: 'Caveat, Dancing Script, cursive', fontSize: 22, color: '#b8005c', margin: '24px 0' }}>
          3. 2025-09-10: Introducing the Timeline feature to relive our best memories with photos and captions! 📝💝
        </p>
          <p style={{ fontFamily: 'Caveat, Dancing Script, cursive', fontSize: 22, color: '#b8005c', margin: '24px 0' }}>
          4. 2025-09-27: Introducting the fact of the day, to make you smarter everyday! 
        </p>
         <p style={{ fontFamily: 'Caveat, Dancing Script, cursive', fontSize: 22, color: '#b8005c', margin: '24px 0' }}>
         Trademark - Saurav Pradhan
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          {/* <button onClick={onStart} className="btn primary">Start Quiz</button>
          <button 
            onClick={() => navigate('/journal')} 
            className="btn"
            style={{ 
              background: '#fff0f6',
              border: '2px solid #ff69b4',
              color: '#ff69b4'
            }}
          >
            Open Journal 📝
          </button> */}
        </div>
      </div>
    </div>
  )
}

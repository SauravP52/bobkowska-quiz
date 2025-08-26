import React from 'react';

interface WelcomePageProps {
  onStart: () => void;
}

export function WelcomePage({ onStart }: WelcomePageProps) {
  return (
    <div className="container">
      <div className="card">
        <h1>Welcome to Bobkowska Quiz! 💖</h1>
        <p style={{ fontFamily: 'Caveat, Dancing Script, cursive', fontSize: 22, color: '#b8005c', margin: '24px 0' }}>
          A cute quiz app made with love 💝
        </p>
        <button onClick={onStart} className="btn primary">Start Quiz</button>
      </div>
    </div>
  )
}

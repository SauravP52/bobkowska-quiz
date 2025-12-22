import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export function BirthdayPage() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Trigger confetti on page load
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
      }));
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
      }));
    }, 250);

    // Show message after a short delay
    setTimeout(() => setShowMessage(true), 500);

    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <main className="container birthday-container">
      <div className="card birthday-card">
        <div className="birthday-header">
          <h1 className="birthday-title">26 Years Old Now</h1>
          <div className="birthday-balloons">🇵🇱🇵🇱🇵🇱</div>
        </div>
        
        {showMessage && (
          <div className="birthday-content">
              <div className="birthday-image-container">
              <img 
                src={new URL('../assets/Bday.jpg', import.meta.url).href} 
                alt="Birthday celebration" 
                className="birthday-image"
              />
            </div>
            <p className="birthday-message">
             Happy birthday Jagoda ,

I know it’s been rough and really tough for us both. But I truly enjoyed you and your company every single bit ! You made me laugh , smile and really feel special in a lot of ways . Every moment with you was special and I will cherish them forever.

You are very passionate and funny as hell . You showed me how to live. (And cry 🥲🤣)
</p>
<p className="birthday-message">
Every time I’d leave you in the airport was like a mini heartbreak. You see I am a bit of a crybaby and a kiddo.

I see you always in my dreams , and I’ll see you again tonight celebrating your 26th.
</p>
<p className="birthday-message">
I am filled with tears as I write this , because I didn’t think that you and I would end up splitting . It is my unfortunate luck , and I have to live with this life consequence.

I never meant to hurt you ever , but i did , and i wont forgive me for that . But I’ll try to be a better human .

You rocked my world ; my summer love ❤️ ( The most beautiful thing I’ve never seen )
            </p>            
            <div className="birthday-cake">
              🎂
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

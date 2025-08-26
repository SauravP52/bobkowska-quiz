import { useRef, useState } from 'react'

// Import the audio file using Vite's asset handling
const audioUrl = new URL('../assets/songs/bruno_major.mp3', import.meta.url).href

export function PinkAudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleToggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="audio-player">
      <button 
        className={`audio-btn${playing ? ' playing' : ''}`} 
        onClick={handleToggle} 
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing ? (
          <svg width="28" height="28" viewBox="0 0 28 28">
            <rect x="6" y="5" width="5" height="18" rx="2" fill="#ff69b4"/>
            <rect x="17" y="5" width="5" height="18" rx="2" fill="#ff69b4"/>
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 28 28">
            <polygon points="7,5 23,14 7,23" fill="#ff69b4"/>
          </svg>
        )}
      </button>
      <audio 
        ref={audioRef} 
        src={audioUrl}
        onEnded={() => setPlaying(false)} 
        preload="auto" 
      />
      <span className="audio-label">Play Song</span>
    </div>
  );
}

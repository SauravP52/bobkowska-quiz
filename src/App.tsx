// Small audio player for local song
function PinkAudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

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
      <button className={`audio-btn${playing ? ' playing' : ''}`} onClick={handleToggle} aria-label={playing ? 'Pause' : 'Play'}>
        {playing ? (
          <svg width="28" height="28" viewBox="0 0 28 28"><rect x="6" y="5" width="5" height="18" rx="2" fill="#ff69b4"/><rect x="17" y="5" width="5" height="18" rx="2" fill="#ff69b4"/></svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 28 28"><polygon points="7,5 23,14 7,23" fill="#ff69b4"/></svg>
        )}
      </button>
      <audio ref={audioRef} src={new URL('./assets/songs/Bruno Major - Nothing (Lyrics).mp3', import.meta.url).href} onEnded={() => setPlaying(false)} preload="auto" />
      <span className="audio-label">Play Song</span>
    </div>
  );
}
import React, { useMemo, useState } from 'react'
import confetti from 'canvas-confetti'
import { QUESTIONS } from './questions'

// Helper to get image path for a question if it exists
function getQuestionImage(id: number) {
  try {
    // Try both lower and upper case extensions for compatibility
    return new URL(`./assets/q${id}.JPEG`, import.meta.url).href
  } catch {
    try {
      return new URL(`./assets/q${id}.jpeg`, import.meta.url).href
    } catch {
      try {
        return new URL(`./assets/q${id}.jpg`, import.meta.url).href
      } catch {
        return null
      }
    }
  }
}

function ProgressBar({ value, max }: { value: number; max: number }) {
  const pct = Math.round((value / max) * 100)
  return (
    <div className="progress-bar-outer" aria-label="Progress">
      <div className="progress-bar-inner" style={{ width: `${pct}%` }}></div>
      <span className="progress-bar-label">{value + 1} / {max + 1}</span>
    </div>
  )
}

export default function App() {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [showPlayer, setShowPlayer] = useState(false)

  const total = QUESTIONS.length
  const q = QUESTIONS[index]

  const shuffledChoices = useMemo(() => {
    const seed = q.id
    const rng = mulberry32(seed)
    return q.choices
      .map((c, i) => ({ c, i, r: rng() }))
      .sort((a, b) => a.r - b.r)
  }, [q])

  function handleSubmit() {
    if (selected === null) return
    const isCorrect = shuffledChoices[selected].i === q.answer
    setShowAnswer(true)
    if (isCorrect) setScore((s) => s + 1)
  }

  function handleNext() {
    setShowAnswer(false)
    setSelected(null)
    if (index + 1 < total) setIndex((i) => i + 1)
    else setFinished(true)
  }

  function restart() {
    setIndex(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
    setShowAnswer(false)
  }

  // Send results to backend and show confetti when finished
  React.useEffect(() => {
    if (finished) {
      const pct = Math.round((score / total) * 100)
      // Send result to backend
      fetch('/api/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          score,
          total,
          percent: pct,
          timestamp: new Date().toISOString(),
        }),
      }).catch((err) => console.error('Failed to send result:', err))

      // Fire confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
      })
    }
  }, [finished, score, total])

  if (finished) {
    const pct = Math.round((score / total) * 100)
    let message = ''
    if (pct === 100) {
      message = "You cheated";
    } else if (pct >= 80) {
      message = "Almost there";
    } else if (pct >= 60) {
      message = "Not bad , could be better";
    } else if (pct >= 40) {
      message = "Try harder";
    } else if (pct >= 20) {
      message = "Aren't you forgetting something? 🤔";
    } else {
      message = "Pretty bad";
    }
    return (
      <main className="container">
        <div className="card">
          <h1>🎉 Quiz Complete!</h1>
          <p>Your score: <strong>{score}</strong> / {total} ({pct}%)</p>
          <p style={{ fontFamily: 'Caveat, Dancing Script, cursive', fontSize: 22, color: '#b8005c', margin: '18px 0' }}>{message}</p>
          <button onClick={restart} className="btn">Try Again</button>
        </div>
      </main>
    )
  }

  return (
    <main className="container">
      <div className="card">
        <PinkAudioPlayer />
  {/* ...songs removed... */}
        <header className="header">
          <h1>Bobkowska 🫐</h1>
          <div className="meta">
            <ProgressBar value={index} max={total - 1} />
          </div>
        </header>

        <section>
          <h2 className="question">{q.question}</h2>
          {getQuestionImage(q.id) && (
            <img src={getQuestionImage(q.id)} alt={`Question ${q.id}`} className="question-img" />
          )}
          <ul className="choices" role="list">
            {shuffledChoices.map((choice, i) => {
              const isCorrect = choice.i === q.answer
              const isSelected = selected === i
              const showCorrect = showAnswer && isCorrect
              const showWrong = showAnswer && isSelected && !isCorrect
              return (
                <li key={i}>
                  <button
                    className={`chip ${isSelected ? 'selected' : ''} ${showCorrect ? 'correct' : ''} ${showWrong ? 'wrong' : ''}`}
                    onClick={() => setSelected(i)}
                    disabled={showAnswer}
                    aria-pressed={isSelected}
                  >
                    {choice.c}
                  </button>
                </li>
              )
            })}
          </ul>
        </section>

        <footer className="footer">
          {!showAnswer ? (
            <button className="btn primary" onClick={handleSubmit} disabled={selected === null}>Submit</button>
          ) : (
            <button className="btn" onClick={handleNext}>{index + 1 < total ? 'Next' : 'Finish'}</button>
          )}
          <span className="score">Score: {score}</span>
        </footer>
      </div>
    </main>
  )
}

// deterministic PRNG for stable shuffle per question
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6D2B79F5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
import React, { useMemo, useState } from 'react'
import { QUESTIONS } from './questions'

function ProgressBar({ value, max }: { value: number; max: number }) {
  const pct = Math.round((value / max) * 100)
  return (
    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden" aria-label="Progress">
      <div className="h-full bg-slate-800" style={{ width: `${pct}%` }}></div>
    </div>
  )
}

export default function App() {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

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

  // Send results to backend when finished
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
    }
  }, [finished, score, total])

  if (finished) {
    const pct = Math.round((score / total) * 100)
    return (
      <main className="container">
        <div className="card">
          <h1>🎉 Quiz Complete!</h1>
          <p>Your score: <strong>{score}</strong> / {total} ({pct}%)</p>
          <button onClick={restart} className="btn">Try Again</button>
        </div>
      </main>
    )
  }

  return (
    <main className="container">
      <div className="card">
        <header className="header">
          <h1>About Bobkowska 🫐</h1>
          <div className="meta">
            <span>Question {index + 1} / {total}</span>
            <ProgressBar value={index} max={total - 1} />
          </div>
        </header>

        <section>
          <h2 className="question">{q.question}</h2>
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
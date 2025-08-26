import React, { useMemo, useState } from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import confetti from 'canvas-confetti'
import { WelcomePage } from '../components/WelcomePage'
import { QUESTIONS } from '../questions'
import { PinkAudioPlayer } from '../components/PinkAudioPlayer'

// Helper to get image path for a question if it exists
function getQuestionImage(id: number) {
  try {
    return new URL(`../assets/q${id}.JPEG`, import.meta.url).href
  } catch {
    try {
      return new URL(`../assets/q${id}.jpeg`, import.meta.url).href
    } catch {
      try {
        return new URL(`../assets/q${id}.jpg`, import.meta.url).href
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

export function QuizContent() {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const navigate = useNavigate()

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
    if (index + 1 < total) {
      setIndex((i) => i + 1)
    } else {
      setFinished(true)
      if (score > 5) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
      }
    }
  }

  function restart() {
    setIndex(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
    setShowAnswer(false)
    navigate('/')
  }

  if (finished) {
    const pct = Math.round((score / total) * 100)
    let message
    if (pct === 100) {
      message = "OMG you know me so well! 💖"
    } else if (pct >= 80) {
      message = "Almost perfect! You're getting there! 😊"
    } else if (pct >= 60) {
      message = "Not bad, but you need to pay more attention! 😘"
    } else if (pct >= 40) {
      message = "Hmm... we need to talk more! 🤔"
    } else if (pct >= 20) {
      message = "Aren't you forgetting something? 🤔"
    } else {
      message = "Pretty bad"
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
        <header className="header">
          <h1>About Bobkowska 🫐</h1>
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
                  >
                    {choice.c}
                  </button>
                </li>
              )
            })}
          </ul>
        </section>

        <footer className="footer">
          {selected !== null && !showAnswer && (
            <button onClick={handleSubmit} className="btn primary">Submit</button>
          )}
          {showAnswer && (
            <button onClick={handleNext} className="btn primary">
              {index + 1 < total ? 'Next Question' : 'Finish Quiz'}
            </button>
          )}
          {!showAnswer && <span className="score">Score: {score}</span>}
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

import React from 'react'
import { HashRouter, Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom'
import { WelcomePage } from './components/WelcomePage'
import { QuizContent } from './pages/Quiz'
import { Journal } from './components/Journal'
import { PinkAudioPlayer } from './components/PinkAudioPlayer'

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}

function AppRoutes() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <nav className="nav-container">
        <div className="nav-links">
          <Link to="/" className={`nav-link${location.pathname === '/' ? ' active' : ''}`}>Home</Link>
          <Link to="/quiz" className={`nav-link${location.pathname === '/quiz' ? ' active' : ''}`}>Quiz</Link>
          <Link to="/journal" className={`nav-link${location.pathname === '/journal' ? ' active' : ''}`}>Journal</Link>
        </div>
        <div className="nav-player">
          <PinkAudioPlayer />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<WelcomePage onStart={() => navigate('/quiz')} />} />
        <Route path="/quiz" element={<QuizContent />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </>
  )
}

export default App
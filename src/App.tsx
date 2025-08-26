import React from 'react'
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { WelcomePage } from './components/WelcomePage'
import { QuizContent } from './pages/Quiz'

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}

function AppRoutes() {
  const navigate = useNavigate()
  return (
    <Routes>
      <Route path="/" element={<WelcomePage onStart={() => navigate('/quiz')} />} />
      <Route path="/quiz" element={<QuizContent />} />
    </Routes>
  )
}

export default App
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace REPO_NAME with your GitHub repo name if deploying to Pages.
// If deploying to username.github.io root, set base: '/'.
export default defineConfig({
  plugins: [react()],
  base: '/react-quiz-ts/'
})
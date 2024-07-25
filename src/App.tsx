import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const LandingPage = lazy(() => import('./pages/LandingPage'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Suspense>
  )
}

export default App

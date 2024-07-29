import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const ConsentPage = lazy(() => import('./pages/ConsentPage'))
const LandingPage = lazy(() => import('./pages/LandingPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/consent" element={<ConsentPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
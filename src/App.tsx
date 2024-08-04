import { lazy, Suspense, useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Loading from './components/Loading'
import Navbar from './components/Navbar/Navbar'
import './App.css'

const ConsentPage = lazy(() => import('./pages/ConsentPage'))
const LandingPage = lazy(() => import('./pages/LandingPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegisterFormStep = lazy(() => import('./pages/RegisterFormStep'))

function App() {
  const location = useLocation()
  const [transition, setTransition] = useState(false)

  useEffect(() => {
    setTransition(true)
    const timer = setTimeout(() => setTransition(false), 300)
    return () => clearTimeout(timer)
  }, [location])

  return (
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <div className={`page ${transition ? 'fade' : ''}`}>
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/consent" element={<ConsentPage />} />
            <Route path="/register" element={<RegisterFormStep />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </div>
      </Suspense>
    </AuthProvider>
  )
}

export default App

import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Loading from './components/Loading'
import Navbar from './components/Navbar/Navbar'

const ConsentPage = lazy(() => import('./pages/ConsentPage'))
const LandingPage = lazy(() => import('./pages/LandingPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegisterFormStep = lazy(() => import('./pages/RegisterFormStep'))

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/consent" element={<ConsentPage />} />
          <Route path="/register" element={<RegisterFormStep />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  )
}

export default App

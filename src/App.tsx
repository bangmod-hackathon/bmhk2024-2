import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext, IAuthContext, initialContextValue } from './contexts/authContext'
import { axiosInstance } from './utils/axios'

const ConsentPage = lazy(() => import('./pages/ConsentPage'))
const LandingPage = lazy(() => import('./pages/LandingPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))

function App() {
  const [loading, setLoading] = useState(true)
  const [authContext, setAuthContext] = useState<IAuthContext>(initialContextValue)

  const handleLogin = useCallback(async (): Promise<void> => {
    try {
      const res = await axiosInstance.get('/api/auth/me')

      if (res.status === 200) {
        setAuthContext({
          ...res.data,
          isAuthenticated: true
        })
      }
    } catch (err) {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    handleLogin().then(() => setLoading(false))
  }, [handleLogin])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <AuthContext.Provider value={{ authContext, setAuthContext }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/consent" element={<ConsentPage />} />
        </Routes>
      </Suspense>
    </AuthContext.Provider>
  )
}

export default App

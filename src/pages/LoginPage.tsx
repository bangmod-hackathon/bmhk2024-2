import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import LoginForm from '../components/Login/LoginForm'
import { UseAuth } from '../contexts/AuthContext'

const LoginPage: React.FC = () => {
  const Auth = UseAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (Auth?.isAuthenticated) {
      navigate('/consent')
    }
  }, [])

  return (
    <React.Fragment>
      <LoginForm />
    </React.Fragment>
  )
}

export default LoginPage

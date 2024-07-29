import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import LoginForm from '../components/Login/LoginForm'

const LoginPage: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <LoginForm />
    </React.Fragment>
  )
}

export default LoginPage

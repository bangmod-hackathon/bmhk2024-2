import React, { useEffect } from 'react'
import ConsentForm from '../components/Consent/ConsentForm'
import { UseAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router'

const ConsentPage: React.FC = () => {
  const Auth = UseAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!Auth?.isAuthenticated) {
      return navigate('/')
    }
    if (Auth?.user.isSubmitted) {
      return navigate('/')
    }
    if (Auth?.user.consent) {
      return navigate('/register')
    }
  }, [])
  return (
    <React.Fragment>
      <ConsentForm />
    </React.Fragment>
  )
}

export default ConsentPage

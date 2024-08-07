import React, { useEffect } from 'react'
import ConsentForm from '../components/Consent/ConsentForm'
import { UseAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router'

const ConsentPage: React.FC = () => {
  const Auth = UseAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (Auth?.user.consent) {
      navigate('/register')
    }
  }, [])
  return (
    <React.Fragment>
      <ConsentForm />
    </React.Fragment>
  )
}

export default ConsentPage

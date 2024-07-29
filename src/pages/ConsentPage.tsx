import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ConsentForm from '../components/Consent/ConsentForm'

const ConsentPage: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ConsentForm />
    </React.Fragment>
  )
}

export default ConsentPage

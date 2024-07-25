import React from 'react'
import Docs from '../components/Docs'
import Hero from '../components/Hero/Hero'
import Qualifications from '../components/Qualifications'
import Rewards from '../components/Rewards'
import Scope from '../components/Scope'

const LandingPage: React.FC = () => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Hero />
      <Qualifications />
      <Docs />
      <Rewards />
      {/* <Timeline /> */}
      <Scope />
      {/* <Sponsor /> */}
      {/* <Footer /> */}
    </React.Fragment>
  )
}

export default LandingPage

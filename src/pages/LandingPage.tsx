import React from 'react'
import Docs from '../components/Docs'
import Hero from '../components/Hero/Hero'
import Qualifications from '../components/Qualifications'
import Rewards from '../components/Rewards'
import Scope from '../components/Scope'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import { Element } from 'react-scroll'

const LandingPage: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Element id="hero" name="hero">
        <Hero />
      </Element>
      <Element id="qualifications" name="qualifications">
        <Qualifications />
      </Element>
      <Element id="docs" name="docs">
        <Docs />
      </Element>
      <Element id="rewards" name="rewards">
        <Rewards />
      </Element>
      {/* <Timeline /> */}
      <Element id="scope" name="scope">
        <Scope />
      </Element>

      {/* <Sponsor /> */}
      <Element id="footer" name="footer">
        <Footer />
      </Element>
    </React.Fragment>
  )
}

export default LandingPage

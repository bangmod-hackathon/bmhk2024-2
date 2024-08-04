import React from 'react'
import { Element } from 'react-scroll'
import Docs from '../components/Docs'
import Footer from '../components/Footer'
import Hero from '../components/Hero/Hero'
import Qualifications from '../components/Qualifications'
import Rewards from '../components/Rewards'
import Scope from '../components/Scope'
import Timeline from '../components/Timeline/Timeline'

const LandingPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-[url('/LandingBackground.svg')] bg-top bg-no-repeat bg-cover scroll-smooth">
      <React.Fragment>
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
        <Element id="timeline" name="timeline">
          <Timeline />
        </Element>
        <Element id="scope" name="scope">
          <Scope />
        </Element>
        {/* <Sponsor /> */}
        <Element id="footer" name="footer">
          <Footer />
        </Element>
      </React.Fragment>
    </div>
  )
}

export default LandingPage

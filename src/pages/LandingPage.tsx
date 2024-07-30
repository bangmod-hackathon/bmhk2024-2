import React from 'react'
import Docs from '../components/Docs'
import Hero from '../components/Hero/Hero'
import Qualifications from '../components/Qualifications'
import Rewards from '../components/Rewards'
import Scope from '../components/Scope'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import Timeline from '../components/Timeline/Timeline'

const LandingPage: React.FC = () => {
  return (
    <div className=" w-full h-full bg-[url(LandingBackground.webp)] bg-top bg-no-repeat bg-cover scroll-smooth">
      <React.Fragment>
        <Navbar />
        <Hero />
        <Qualifications />
        <Docs />
        <Rewards />
        <Timeline />
        <Scope />
        {/* <Sponsor /> */}
        <Footer />
      </React.Fragment>
    </div>
  )
}

export default LandingPage

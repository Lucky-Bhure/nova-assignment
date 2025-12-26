import React from 'react'
import AboutNova from './AboutNova/AboutNova'
import OurPrinciples from './OurPrinciples/OurPrinciples'
import ExploreResearch from './ExploreResearch/ExploreResearch'
import EarlyAccess from './EarlyAccess/EarlyAccess'
import NewsletterBlock from './NewsletterBlock/NewsletterBlock'
import OurFoundations from './OurFoundations/OurFoundations'

const About = () => {
  return (
    <div className="w-full min-h-screen">
      <AboutNova />
      <OurPrinciples />
      <ExploreResearch />
      <OurFoundations />
      <EarlyAccess />
      <NewsletterBlock />
    </div>
  )
}

export default About

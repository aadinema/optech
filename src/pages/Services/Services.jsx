import React from 'react'
import ServicesHero from './ServicesHero'
import WorkTogether from '../../features/Home/WorkTogether/WorkTogether'

import ProcessSection from '../ITConsulting/ProcessSection'
import ServicesSection from '../StartupHome/ServicesSection.jsx'



const Services = () => {
  return (
    <>
    <ServicesHero />
    <ServicesSection />
    <ProcessSection />
    <WorkTogether />
    </>
  )
}

export default Services
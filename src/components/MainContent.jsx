import React from 'react'
import '../styles/components/MainContent.css'
import AboutContiner from './AboutContiner'
import ProjectsContainer from './ProjectsContainer'
import TechnologyContainer from './TechnologyContainer'

const MainContent = () => {
  return <main id='main-content'>
    <AboutContiner />
    <TechnologyContainer />
    <ProjectsContainer />
  </main>
}

export default MainContent
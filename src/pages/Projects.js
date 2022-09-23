import React from 'react'
import { Slide } from 'react-reveal'
import { StyledProjects } from '../pages/styles/Projects.styled'

const Projects = () => {
  return (
    <StyledProjects id='projects'>
        <Slide left cascade>
          <div className='projects-header'>
              <h1>Projects</h1>
              <p>Here are some of the projects I've worked on</p>
          </div>
        </Slide>
      <div className='projects-body'>
        <Slide top cascade>
          <img style={{ height: '10rem', width: '16rem', backgroundColor: 'red', margin: '1rem', borderRadius: '1rem' }}></img>
          <img style={{ height: '10rem', width: '16rem', backgroundColor: 'red', margin: '1rem', borderRadius: '1rem' }}></img>
          <img style={{ height: '10rem', width: '16rem', backgroundColor: 'red', margin: '1rem', borderRadius: '1rem' }}></img>
        </Slide>
      </div>
    </StyledProjects>
  )
}

export default Projects
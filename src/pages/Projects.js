import React from 'react'
import { Slide } from 'react-reveal'
import Pulse from 'react-reveal/Pulse';
import { StyledProjects } from '../pages/styles/Projects.styled'

import GoogleKeepClone from '../extras/images/GoogleKeepClone.png'
import ExpenseTracker from '../extras/images/ExpenseTracker.png'
import SpeedTypingGame from '../extras/images/SpeedTypingGame.png'

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
          <a target='_blank' href='https://ninatch-google-keep-clone.netlify.app/'>
            <img src={GoogleKeepClone}/>
            <Pulse>
              <p className='project-name'>Google Keep Clone</p>
            </Pulse>
          </a>
          <a target='_blank' href='https://ninatch-expense-tracker.netlify.app/'>
            <img src={ExpenseTracker}/>
            <Pulse>
              <p className='project-name'>Expense Tracker</p>
            </Pulse>
          </a>
          <a target='_blank' href='https://ninatch-speed-typing-game.netlify.app/'>
            <img src={SpeedTypingGame}/>
            <Pulse>
              <p className='project-name'>Speed-Typing Game</p>
            </Pulse>
          </a>
        </Slide>
      </div>
    </StyledProjects>
  )
}

export default Projects
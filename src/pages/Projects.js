import React from 'react'
import { Slide } from 'react-reveal'
import Pulse from 'react-reveal/Pulse';
import { StyledProjects } from '../pages/styles/Projects.styled'

import NotesApp from '../extras/images/NotesApp.png'
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
          <a target='_blank' href='https://ninatch-notes-app.netlify.app/'>
            <img src={NotesApp}/>
            <Pulse>
              <p className='project-name'>Notes App</p>
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
              <p className='project-name'>
                {`Speed-Typing Game 
                (in progress)`}
              </p>
            </Pulse>
          </a>
        </Slide>
      </div>
    </StyledProjects>
  )
}

export default Projects
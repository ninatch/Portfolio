import React from 'react'
import { Bounce } from 'react-reveal'
import { StyledSkills } from '../pages/styles/Skills.styled'

const Skills = () => {
  return (
    <StyledSkills id='skills'>
        <Bounce top>
            <h1>Skills</h1>
        </Bounce>
        <div className='programming-languages'>
            <Bounce top>
                <h2>Programming Languages/ Technologies & Frameworks</h2>
            </Bounce>
            <Bounce top cascade>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.JS</li>
                    <li>TypeScript</li>
                    <li>Github</li>
                    <li>VS Code</li>
                </ul>
            </Bounce>
        </div>
        <p></p>
        <div className='languages'>
            <Bounce top>
                <h2>Languages</h2>
            </Bounce>
            <Bounce top cascade>
                <ul>
                    <li>Georgian</li>
                    <li>English</li>
                    <li>Russian</li>
                </ul>
            </Bounce>
        </div>
    </StyledSkills>
)
}

export default Skills
import React from 'react'
import { Slide } from 'react-reveal'
import { StyledAbout } from '../pages/styles/About.styled'

import Photo from '../extras/images/Photo.PNG'
import CV from '../extras/cv/Nina-Tchanturia-CV.pdf'


const About = () => {
    
    return (
        <StyledAbout id='about'>
            <div className='introduction'>
                <Slide left cascade>
                    <div className='intro-body'>
                        <h1>ABOUT</h1> 
                        <h3>I went to a psychology school and returned a front-end developer.{"\n"}
                            Sometimes I build things with HTML, CSS, JS and ReactJS.{"\n"}
                            To download my resume, click <a href={CV} download='Nina-Tchanturia-CV.pdf' className='download'>here</a>
                        </h3>
                    </div>
                    <img src={Photo} alt='me'></img>
                </Slide>
            </div>
            
            <div className='education'>
                <h1>Education &amp; Certifications</h1>
                <Slide right cascade>
                    <div className='education-body'>
                        <h2>
                            Advanced React
                        </h2>
                        <h3>
                            Online Course / Certification at Scrimba
                        </h3>
                        <h4>
                            June, 2022
                        </h4>
                        <h2>
                            JavaScript Deep Dive
                        </h2>
                        <h3>
                            Online Course / Certification at Scrimba
                        </h3>
                        <h4>
                            May, 2022
                        </h4>
                        <h2>
                            The Front-End Developer Career Path
                        </h2>
                        <h3>
                            Online Course / Certification at Scrimba
                        </h3>
                        <h4>
                            February, 2022
                        </h4>
                        <h2>
                            Bachelor of Social Sciences in Psychology
                        </h2>
                        <h3>
                            Bachelor Degree
                        </h3>
                        <h4>
                            September 2016 - July 2020
                        </h4>
                    </div>
                </Slide>
            </div>

            <div className='work'>
                <Slide left cascade>                    
                    <div className='work-body'>
                            <h2>
                                Project Manager
                            </h2>
                            <h3>
                                LEPL State Security Service of Georgia Training Center
                            </h3>
                            <h4>
                                April 2021 - Present
                            </h4>
                            <h2>
                                Intern
                            </h2>
                            <h3>
                                Social Service Agency
                            </h3>
                            <h4>
                                May 2019 - July 2019
                            </h4>
                    </div>
                </Slide>
                <h1 className='p2'>Work Experience</h1>
            </div>
        </StyledAbout>
    )
}

export default About
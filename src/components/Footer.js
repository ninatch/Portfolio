import React from 'react'
import { Link } from 'react-scroll'
import { StyledFooter } from '../components/styles/Footer.styled'
import Facebook from '../extras/images/Facebook.png'
import Github from '../extras/images/Github.png'
import Linkedin from '../extras/images/Linkedin.png'
import Arrow from '../extras/images/Arrow.png'

const Footer = () => {
  return (
    <StyledFooter>
        <p>Nina Tchanturia &copy; 2022</p>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className='img-arrow'>
          <img src={Arrow} alt='arrow up'/>
        </Link>
        <div className='socials'>
          <a target='_blank' href='mailto:nina.tchanturia@outlook.com' rel='noreferrer'>nina.tchanturia@outlook.com</a>
          <div>
            <a target='_blank' href='https://github.com/ninatch/' rel='noreferrer'>
              <img src={Github} alt='github'/>
            </a>
            <a target='_blank' href='https://www.linkedin.com/in/nina-tchanturia-725b9a196/' rel='noreferrer'>
              <img src={Linkedin} alt='linkedin'/>
            </a>
            <a target='_blank' href='https://www.facebook.com/ninachanturia13' rel='noreferrer'>
              <img src={Facebook} alt='facebook'/>
            </a> 
          </div>
        </div>
    </StyledFooter>
  )
}

export default Footer
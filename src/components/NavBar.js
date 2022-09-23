import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { StyledNavBar } from '../components/styles/NavBar.styled'
import { StyledMenu } from './styles/micro-components/Menu.styled'

const NavBar = () => {

  const [clicked, setClicked] = useState(false)
  const [show, setShow] = useState(true)

  const controlNavBar = () => {
    if (window.scrollY > 230) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavBar)
    return () => {
      window.removeEventListener('scroll', controlNavBar)
    }
  }, [])

  const handleClick = () => {
    setClicked(prevClicked => !prevClicked)
  }

  console.log(show)

  return (
    <StyledNavBar click={clicked}>
        <StyledMenu src='https://img.icons8.com/material-rounded/24/000000/menu--v3.png' alt='menu' click={clicked} onClick={handleClick}></StyledMenu>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} >Projects</Link>
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} >Contact</Link>
    </StyledNavBar>
  )
}

export default NavBar
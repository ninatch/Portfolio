import { GlobalStyles } from './styles/Global'
import { ThemeProvider } from 'styled-components'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  const theme = {
    colors: {
      0: '#000',
      1: '#D3D3D3',
      2: '#FFF',
      3: 'red'
    }
  }

  return (
    <ThemeProvider theme={ theme }>
        <GlobalStyles />
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </ThemeProvider>
  )
}

export default App

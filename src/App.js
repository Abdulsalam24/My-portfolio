import React from 'react'

import Header from './component/header/Header'
import NavBar from './component/nav/NavBar'

import About  from './Pages/about/About'
import Contact from './Pages/contact/Contact'
import Footer from './Pages/footer/Footer'
// import  Wiw from './Pages/experience/Wiw'
import Project from './Pages/project/Project'


import Slide from 'react-reveal'

const App = () => {

  return (
    <>
        <NavBar/>
        <Header/>
        <Slide left>
          <About/>
        </Slide>
        <Slide bottom>
          <Project/>
        </Slide>
        <Slide left>
          <Contact/>
        </Slide>
        <Footer/>
    </>
  )
}

export default App
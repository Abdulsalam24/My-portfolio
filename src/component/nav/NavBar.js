import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'

const NavBar = () => {

  const [mobile , setMobile] = useState(true)
  const [navBar , setNavBar] = useState(false)

  useEffect(() => {
    const scrollY = () => {
      if ( window.scrollY >= 140){
        setNavBar(!navBar)
      }
      else{
        setNavBar(navBar)
      }
    }
    window.addEventListener('scroll' , scrollY)
  },[])

  useEffect(() => {
    const scroll = () => {
      if ( window.scroll ){
        return setMobile(mobile)
      }else{
        setMobile(!mobile)
      }
    }

    window.addEventListener('scroll' , scroll)
  },[])

  const screen = window.screen.width
  console.log(screen)

  
  return (
    <nav>
      <div className={navBar ? 'nav-div active' : 'nav-div'}>
        <div className="nav-bar flex">
          <div className="logo">
            <Fade left>
              <h1>
              <a href="#home">
              ABD
              </a>
            </h1>
            </Fade>
          </div>
          <Fade right>
          <div className={mobile ? 'nav-link' : 'nav-mobile nav-link'} onClick={() => screen >= 770 ? setMobile(mobile) : setMobile(!mobile) }>
            <ul className='list'>
              <li><a href='#about'><span className="green">0.1 </span>About</a></li>
              <li><a href='#project'><span className="green">0.2 </span>Work</a></li>
              <li><a href='#contact'><span className="green">0.3 </span>Contact</a></li>
            </ul>
            <div className="btn">
            <button>Resume</button>
            </div>
          </div>
          <div className="menu">
            <div
            className={mobile ? "dash" : "cancel dash" }
            onClick={() => setMobile(!mobile)}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
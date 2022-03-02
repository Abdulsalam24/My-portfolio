import React from 'react'
import { Rotate } from 'react-reveal'

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="footer-flex flex">
            <div className="icon">
              <a href="https://mobile.twitter.com/Abdoyobos">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/mwlite/in/abdulsalam-mohammed-46896922b">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/Abdulsalam24">
                <i className="fa-brands fa-github"></i> 
              </a>
              <a href="https://web.facebook.com/profile.php?id=100068558813405">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
            <p className='email'>
              <a href="abdulsalammohammed586686@gmail.com">abdulsalammohammed586686@gmail.com</a>
            </p>
            <Rotate>
              <p>Built by Abdulsalam mohammed</p>
            </Rotate>
            </div>
        </div>
    </footer>
  )
}

export default Footer
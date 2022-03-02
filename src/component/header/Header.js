import React from 'react'

import Typical from 'react-typical'

const Header = () => {
  return (
    <header id='home'>
      <div className="home max-width">
        <div className="home-text">
          <span className="name green">
            Hi, my name is 
          </span>
          <h2>Abdulsalam mohammed</h2>
          <div className="text">
          <h3>i, am a {' '}
          <Typical 
            loop={Infinity}
            wrapper='b'
            steps ={[
              'Front end developer',2000,
              'Graphic designer',2000,

            ]}
            
          />
          </h3>
          <div className="btn">
            <button><a href="#project">Check out my work!</a></button>
          </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
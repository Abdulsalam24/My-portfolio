import React from 'react'
import profile from '../../asset/profile.JPG'

const About = () => {

  
  return (
    <section id='about'>
          <div className="heading">
            <span className="green">
            0.1</span> <h4>About Me</h4>
          </div>

          <div className="abt max-width">
              <div className="abt-text">
                <div className="text">
                  <p>Hello! My name is Abdulsalam and I enjoy coding and creating things that live on the internet. My interest in web development started back in 2020 when I decided to learn programming for fun — turns out building web was my interest after learning html and css</p>
                  <p>
                  I am a <span className="green">
                  Creative Front-End Developer
                  </span> 
                  with two years of experience providing
                  developing and supporting web applications.
                  Skilled in designing, developing web application with the latest tools.
                  <span className="green">My career goal</span> is to build methods and software tools to optimize service delivery ,
                  and build better products
                  </p>
                  <p>
                  Here are the programming <span className="green">language</span> i am currently working with :
                  </p>
                  <ul className="tech flex">
                      <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML5</li>
                      </ul>
                      <ul>
                        <li>Css</li>
                        <li>Scss</li>
                      </ul>
                  </ul>
                </div>
              </div>
              <div className="abt-img">
                <div className="img-border">
                  <div className="img">
                    <img src={profile} alt="" />
                    <div className="thumbnail"></div>
                  </div>
                </div>
              </div>
          </div>
    </section>
  )
}

export default About
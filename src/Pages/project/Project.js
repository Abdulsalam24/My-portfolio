import React from 'react'
import { Slide } from 'react-reveal'
import { ProjectData } from './projectData'

const Project = () => {
  return (
    <section id='project'>
        <div className="heading">
          <span className="green">
          0.2</span> <h4>Some Project</h4>
        </div>
      <div className="project max-width">
        <div className="project-text">
        </div>
        <Slide left>
          <div className="project-items flex">
            {ProjectData.map((item) => (
              <div 
              key={item.title} 
              className='item' 
              style={{backgroundImage: `url(${item.img})`,backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover"}}
              >
                  <div className="item-img">
                    <div className="item-text">
                      <span className="green">
                        {item.description}
                      </span>
                      <h5>
                        {item.title}
                      </h5>
                      <p>
                        {item.writeUp}
                      </p>
                      <ul className="lang-type flex">
                        <li>{item.html}</li>
                        <li>{item.scss}</li>
                        <li>{item.javascript}</li>
                        <li>{item.react}</li>
                        <li>{item.redux}</li>
                      </ul>
                      <div className="icon flex">
                      <a href={item.gitHub}><i className="fa-brands fa-github"></i></a>
                      
                      <a href={item.link}><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="thumbnail"></div>
              </div>
            ))}
          </div>
        </Slide>
      </div>


    </section>
  )
}

export default Project
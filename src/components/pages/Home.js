import React from 'react'
import "./Home.css"

import hasta from '../projects/hasta.png'
import educare from '../projects/educare.png'
import gruppe from '../projects/GruppenBild.jpg'
import safety from '../projects/safety.png'
import skinguide from '../projects/SkinGuide.png'

function Home() {
  return (
    <>
      <div className="project">
        <div className='project-container'>

          <div className='project-box'>
            <img src={hasta} className="project-image" alt="img" />
            <div className='project-text'>
              “Hasta La Fiesta” is a party planning site to make it easier
              for hosts and guests to organize food, music and games
            </div></div>

          <div className='project-box'>
            <img src={educare} className="project-image" alt="img" />
            <div className='project-text'>
              “EduCare” is a website specially developed for refugee parents
              to help them communicate with teachers and schools
            </div></div>
          <div className='project-box'>
            <img src={gruppe} className="project-image" alt="img" />
            <div className='project-text'>
              Unsere Gruppe
            </div></div>
          <div className='project-box'>
            <img src={safety} className="project-image" alt="img" />
            <div className='project-text'>
              “DB for Women” Find safer routes and spots and always be
              prepared for an emergency with our anti harassment train app
            </div></div>
          <div className='project-box'>
            <img src={skinguide} className="project-image" alt="img" />
            <div className='project-text'>
              “SkinGuide” is a voice assistant, that helps users determine their own
              skin type and find the right skincare ingredients for their skin.
            </div></div>

        </div>
      </div>

    </>
  )
}


export default Home;
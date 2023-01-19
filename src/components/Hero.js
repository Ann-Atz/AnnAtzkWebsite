import React from 'react'
import "./Hero.css"
import hero from './img/banner.png';

function Hero() {
    return (
        <div className='container'>
            <div className='title'>Computer Science and Design Student<br/>Munich Center for Digital Sciences and AI</div>
            <img src={hero}
                className="banner"
                alt="hero" />
                </div>

    )
}

export default Hero
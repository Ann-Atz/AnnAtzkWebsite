import React from 'react'
import "./Hero.css"
import hero from './img/banner.png';

function Hero() {
    return (
        <div className='container'>
            <div className='title'>Ann-Marie Atzkern <br/> Computer Science and Design Student</div>
            <img src={hero}
                className="banner"
                alt="hero" />
                </div>

    )
}

export default Hero
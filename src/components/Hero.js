import React from 'react'
import "./Hero.css"
import Ellipse from './img/Ellipse.png'

function Hero() {
    return (
        <><><>
            <div className='hero_container'>
                <div className='title1'>Hi, I'm</div>
                <div className='title2'>Ann-Marie<br></br>Atzkern</div>
                <div className='title3'>Student of IT and Design</div>
            </div>

            <div className='ellipse'>
                <img src={Ellipse} className="ellipse_png" alt="img" />
            </div>
        </>
            <div className='welcome'>
                <div className='title1'>Hello!</div>
                <div className='Welcome_Text'>Willkommen auf meinem Portfolio. Dies soll Ihnen einen kleinen Einblick in meine Fähigkeiten und Projekte geben. Mein Name ist Ann und ich liebe es, Probleme zu lösen und kreativ zu sein. Genauer gesagt interessiere ich mich für den Bereich UI/UX und Frontend Entwicklung. Ich konnte bereits in meinem Studium erste Erfahrungen und Berührungspunkte mit Projekten sammeln und beschäftige mich außerdem in meiner Freizeit gern mit Kunst und Design. Durch mein Studium habe ich bereits umfangreiche Erfahrungen und Kenntnisse im UX/UI Bereich gesammelt und bin bestrebt, mein Wissen ständig zu erweitern und zu vertiefen.
            </div>
            </div></>
            <div className='ellipse-welcome'>
                <img src={Ellipse} className="ellipse_png" alt="img" />
            </div></>

    )
}

export default Hero
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <><footer>
            <footerspan>

                <div className="Footer-Top">
                    <div className="Footer_Thick">
                        <p>Legal</p></div>
                    <div className="Footer_Thin">
                        <p><a href="https://www.privacypolicies.com/generic/" title="policy" target="_blank" className="w3-hover-text-green" rel="noreferrer">Datenschutz</a></p>
                        <Link className="footer-link" rel="noreferrer" to="/Impressum">Impressum</Link>
                    </div>
                </div>
                <div className="Footer-Mid">
                    <div className="Footer_Thick">
                        <p>Contact</p></div>
                    <div className="Footer_Thin">
                        <p>annmarie.atzkern@gmail.com</p>
                        <p>München, Deutschland</p>
                    </div>
                </div>
                <div className="Footer-Top">
                    <div className="Footer_Thick">
                        <p>Socials</p></div>
                    <div className="Footer_Thin">
                        <p><a href="https://www.instagram.com/diji_doodles/" title="policy" target="_blank" className="w3-hover-text-green" rel="noreferrer">Instagram</a></p>
                        <p><a href="https://www.linkedin.com/in/ann-marie-atzkern-712675217/" title="policy" target="_blank" className="w3-hover-text-green" rel="noreferrer">Linkedin</a></p>
                    </div>
                </div>

            </footerspan>

        </footer>

            <div className="Footer-Bottom">
                <p>@ Copyright 2023 | Made by Ann-Marie</p>
            </div></>
    )
}
export default Footer
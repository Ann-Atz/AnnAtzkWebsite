import React from 'react'
import './Footer.css'

function Footer() {
    return (
      <footer>
      <div className="Footer-Top">
          <div className="contact">
              <p> <a href="https://dogexpress.in/wp-content/uploads/2022/11/20-Hilarious-Dog-Photos-To-Put-A-Smile-On-Your-Face.jpg" title="Contact" target="_blank" className="w3-hover-text-green" rel="noreferrer">Contact</a></p>
          </div>
          <div className="policy">
              <p> <a href="https://www.privacypolicies.com/generic/" title="policy" target="_blank" className="w3-hover-text-green" rel="noreferrer">Privacy Policy</a></p>
          </div>
          <div className="socials">
              <p> <a href="https://www.instagram.com/diji_doodles/" title="socials" target="_blank" className="w3-hover-text-green" rel="noreferrer">Socials</a></p>
          </div>
      </div>


      <div className="Footer-Bottom">
          <p>Copyright &copy;2022 <a href="https://www.instagram.com/diji_doodles/" title="instagram" target="_blank" className="w3-hover-text-green" rel="noreferrer">diji_doodles</a></p>
      </div>

  </footer>

    )
}
export default Footer
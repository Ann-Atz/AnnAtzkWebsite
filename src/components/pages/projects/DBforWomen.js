import React from 'react'
import './DBforWomen.css'

import mockup from './pic_educare/mockup.png'
import mockup1 from './pic_educare/mockup1.png'
import mockup2 from './pic_educare/mockup2.png'
import shape1 from './pic_educare/shape1.png'
import shape2 from './pic_educare/shape2.png'
import shape3 from './pic_educare/shape3.png'

function DBforWomen() {
  return (
    <db>
      <div className='DB'>
        <div className='DB-Top'>
        <t1>Train safety for women</t1>
        <t3>find safer routes and spots, communicate with each other and always be prepared for an emergency
        </t3>
      </div>
      <img src={mockup} className="mockup2-image" alt="img" />
      <img src={mockup1} className="mockup2-image" alt="img" />
      </div>
      <div className='app-info'>
        <img src={mockup2} className="mockup2-image" alt="img" />
        <t3>Our vision is a life, where women do not have to be afraid of going outside to live their lives. They should be able to do whatever they want without being scared and worried for themselves and their female loved ones. <br></br>
          DB for women is the first small step in Germany to approach that goal. Everyone deserves to be safe and we believe and fight for this statement.<br></br>
          We provide an App, which mainly young and vulnerable women can use to plan safer routes when traveling with public transportation.
          Our app is especially made for young women who depend on the service of public transport to make them feel safer especially at night. </t3>
      </div>

      <div className='shape-row'>
        <div className='shape-info'>
        <img src={shape1} className="shape-image" alt="img" />
          <t3>Young women who depend on public transport <br></br>
          Young women who feel vulnerable at night<br></br>
          young women with less experience<br></br>
          </t3>
        </div>
        <div className='shape-info'>
        <img src={shape2} className="shape-image" alt="img" />
        <t3>fear of sexual harassment, stress, catcalling, inequality</t3>
        </div>
        <div className='shape-info'>
        <img src={shape3} className="shape-image" alt="img" />
        <t3>Feminist theory suggests that all forms of violence are interrelated. Their approach argues that global security is related to local issues, so the success of comprehensive security depends on the action of women and men at all levels of society.</t3>
        </div>
      </div>
    </db>
  )
}

export default DBforWomen
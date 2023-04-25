import React from 'react'
import './DBforWomen.css'

import mockup1 from './pic_educare/mockup1.png'
import mockup2 from './pic_educare/mockup2.png'
import shape1 from './pic_educare/shape1.png'
import shape2 from './pic_educare/shape2.png'
import shape3 from './pic_educare/shape3.png'
import func from './pic_educare/functions.png'

function DBforWomen() {
  return (
    <div className='db'>
      <div className='DB'>
        <div className='DB-Top'>
          <t0>Train safety for women</t0>
          <t3>find safer routes and spots, communicate with each other and always be prepared for an emergency
          </t3>
          <img src={func} className="function" alt="img" />
          <img src={mockup1} className="mockup1-image" alt="img" />
        </div>
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
          <t1>Target Group</t1>
          <t3>Young women who DEPEND on public transport <br></br>
            Young women who FEEL vulnerable at night<br></br>
            young women with less EXPERIENCE<br></br>
          </t3>
        </div>
        <div className='shape-info'>
          <img src={shape2} className="shape-image" alt="img" />
          <t1>Feelings</t1>
          <t3>fear of sexual harassment, stress, catcalling, inequality</t3>
        </div>
        <div className='shape-info'>
          <img src={shape3} className="shape-image" alt="img" />
          <t1>Value Proposition</t1>
          <t3>Feminist theory suggests that all forms of violence are interrelated. Their approach argues that global security is related to local issues, so the success of comprehensive security depends on the action of women and men at all levels of society.</t3>
        </div>
      </div>
      <div className='DB-Bottom'>
        <t1>During our prototyping process, we focused on the following features:</t1>
        <div className='stichpunkte'>
          <t3>Plan <span>safer routes</span> in advance by including safe spots and safe-rated train stations in the route<br></br></t3>
          <t3><span>Contact</span> others who also use the app to be able to travel in groups (trainsharing).<br></br></t3>
          <t3><span>Share</span> planned route or real-time gps coordinates with friends, family or police.<br></br></t3>
          <t3><span>Emergency </span>board on home screen: </t3>
          <div className='examples'>
            <t3>a. <span>Emergency audio recording</span> is triggered by user-defined signs (such as shaking the phone heavily or pushing buttons multiple times)<br></br></t3>
            <t3>b. <span>Emergency call</span> feature allows quick and easy contacting of pre-filled contact numbers in emergency situations.<br></br></t3>
            <t3>c. <span>Report assaults</span> feature enables users to quickly report incidents by pre-filling data, minimizing the effort required during shock situations.<br></br></t3>
          </div>
        </div></div>
    </div>
  )
}

export default DBforWomen
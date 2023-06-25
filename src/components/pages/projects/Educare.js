import React, { useEffect } from 'react';
import './Educare.css'

import mockup1 from './pic_educare/Educare Mockup.png'
import mockup3 from './pic_educare/edumock1.png'

function DBforWomen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='edu'>
      <div className='EDU'>
        <div className='DB-Top'>
          <t0>EduCare</t0>
          <t3>Einen Webservice für Flüchtlingseltern um den Austausch mit Lehrern zu erleichtern
          </t3>
          <img src={mockup1} className="eduimage" alt="img" />
        </div>
      </div>
      
      <div className='eduText'>
        <t1>General Info</t1>
        <t3>Roles: Research, Design, CSS/HTML  |  Tools: Figma, React Native, Github</t3>
        <t1>Challenge</t1>
        <t3>Wir wollen Geflüchteten helfen, ihre Kinder im Bildungssystem besser zu unterstützen, indem wir kulturelle und sprachliche Barrieren zwischen Familien und Lehrern abbauen. Flüchtlingseltern benötigen noch viel Hilfe, insbesondere beim Verständnis und der Begleitung des Bildungswegs ihrer Kinder. Unser Ziel ist es, ihnen dabei zu helfen, indem wir die Kommunikation und den Austausch zwischen allen Beteiligten verbessern.</t3>

        <t3>Auf der Grundlage der Ergebnisse der Interviews und der Netnographie konnten wir fünf Problempunkte herausarbeiten:
          <br></br><br></br>1. Sprachliche Barriere, welche die Bildung der Kinder gefährden
          <br></br>2. Kulturelle Unterschiede, welche zu Missverständnissen führen können
          <br></br>3. Fehlende oder teure Hilfeleistungen
          <br></br>4. Mangel an Lehrkräften, Nachhilfelehrer, Dolmetscher
          <br></br>5. Unterschiedliche soziale Hintergründe der Kinder
        </t3>

        <t1>Solution</t1>
        <t3>Wir haben einen Webservice entwickelt, um Geflüchteten zu helfen, den Austausch mit Lehrern zu erleichtern und damit die Bildungschancen ihrer Kinder zu verbessern.</t3>
        <div className='stichpunkteEdu'>
          <div className='examplesEdu'>
            <t3>•  Sprache einstellbar<br></br></t3>
            <t3>•  Direkter Kontakt zu den Lehrern<br></br></t3>
            <t3>•  Ankündigungen über Feiertage und Aktivitäten<br></br></t3>
            <t3>•  Begriffe wie Wandertag werden übersetzt und erklärt um die deutsche Kultur gleichzeitig zu erklären<br></br></t3>
            <t3>•  Kinder bekommen die nötigste Unterstützung<br></br></t3>
            <t3>•  Vereinfachung der Krankmeldung oder Freinehmen<br></br></t3>
          </div>
          <t3>Mit unserem Webservice wollen wir dazu beitragen, die Bildungschancen von Geflüchteten und Migrationskindern zu verbessern, indem wir den Austausch mit Lehrern erleichtern und Unterstützung bieten.</t3>

          <img src={mockup3} className="mockup3-image" alt="img" />

        </div></div>
    </div>
  )
}

export default DBforWomen
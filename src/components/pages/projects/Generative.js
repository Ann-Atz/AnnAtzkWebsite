import React, { useEffect } from 'react';
import './Generative.css';
import berlin1 from './pic_generative/Berlin Black-1.png'
import berlin2 from './pic_generative/Berlin Speci-1.png'
import berlin3 from './pic_generative/Berlin White-1.png'
import berlin_ani from './pic_generative/Licht1.mp4'
import berlin_ani2 from './pic_generative/Licht2.mp4'
import berlin_ani3 from './pic_generative/Licht3.mp4'
import mockbus1 from './pic_generative/mockbus1.png'

function Generative() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='generative'>
                <div className='gen-text'>
                    <t1>Generative Posters</t1>
                    <t3>Generatives Design ist ein kreativer Prozess, bei dem Algorithmen, Regeln und Daten verwendet werden, um Kunstwerke, Designs und interaktive Erfahrungen zu generieren. Im Generative Design Kurs haben wir gelernt, wie man Code und Algorithmen einsetzt, um visuelle und interaktive Werke zu erschaffen.
                        <br></br>
                        Unser Projekt befasste sich damit, die Auswirkungen von Lichtverschmutzung auf das Verhalten von Vögeln zu visualisieren. Mit Hilfe von p5.js konnten wir die Flugrouten und Verhaltensweisen der Vögel in Bezug auf Lichtverschmutzung darstellen.
                        <br></br>
                        <br></br>
                        Unsere Poster erzählen eine Geschichte von Vögeln, die auf ihrem Heimweg von künstlichen Lichtquellen verwirrt werden. Die Poster zeigen auf einfache und abstrakte Weise, wie sich das Verhalten der Vögel verändert, wenn sie dem Licht näher kommen. Ihre Flugbahnen werden chaotischer und desorientierter dargestellt. Dadurch möchten wir auf die Auswirkungen der Lichtverschmutzung auf die natürliche Orientierung der Vögel aufmerksam machen. Die Poster regen dazu an, über die Konsequenzen menschlicher Aktivitäten nachzudenken und umweltfreundlichere Lösungen zu finden.
                    </t3>
                    <div className='gen-posters'>
                        <img src={mockbus1} className="bus-image" alt="img" />
                    </div>
                    <div className='comp'>
                        <div className='gen-posters'>
                            <img src={berlin1} className="gen-image" alt="img" />
                            <img src={berlin2} className="gen-image" alt="img" />
                            <img src={berlin3} className="gen-image" alt="img" />
                        </div>
                        <div className='gen-videos'>
                            <div className='gen-video'>
                                <video className="video-play" autoPlay loop muted>
                                    <source src={berlin_ani} type="video/mp4" />
                                </video>
                            </div>
                            <div className='gen-video'>
                                <video className="video-play" autoPlay loop muted>
                                    <source src={berlin_ani2} type="video/mp4" />
                                </video>
                            </div>
                            <div className='gen-video'>
                                <video className="video-play" autoPlay loop muted>
                                    <source src={berlin_ani3} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Generative;

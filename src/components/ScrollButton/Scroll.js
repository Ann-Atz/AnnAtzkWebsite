// npm install --save styled-components
import React, { useState } from 'react';
import { RiPlaneFill } from 'react-icons/ri';
import { Button } from './Styles';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 600) {
            setVisible(true)
        }
        else if (scrolled <= 600) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button>
            <RiPlaneFill onClick={scrollToTop}
                     style={{display: visible ? 'inline' : 'none'}} 
                     size="20px"
                     
                     fill='gray' 
                     />

        </Button>
    );
}


export default ScrollButton;

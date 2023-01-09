import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import img1 from './img/img1.jpg'
// import img2 from './img/img2.jpg'
// import img3 from './img/img3.png'
import './Slides.css'


const proprietes = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slides = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div className='img'>
                        <img src='./images/img1.jpg' alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div className="img">
                        <img src='./images/img2.jpg' alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div className='img'>
                        <img src='./images/img3.png' alt="img3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slides;
import './Gallery.css';
import g1 from '../images/g1.png'; 
import g2 from '../images/g2.png'; 
import g3 from '../images/g3.png'; 
import g4 from '../images/g4.png';
import g5 from '../images/g5.png'; 
import g6 from '../images/g6.png'; 
import React from 'react';

const Gallery = () => {
    return (
        <div className='j px-4 lg:px-4 mt-20 max-w-screen-xl mx-auto min-h-screen h-screen' id="gallery">
            <img className='pic' src={g1} alt='gallery' />
            <img className='pic' src={g2} alt='gallery' />
            <img className='pic' src={g3} alt='gallery' />
            <img className='pic' src={g4} alt='gallery' />
            <img className='pic' src={g5} alt='gallery' />
            <img className='pic' src={g6} alt='gallery' />
        </div>
    );
};

export default Gallery;

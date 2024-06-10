import './Aboutus.css';
import React from 'react';
import arImage from '../images/ar.png';
import u1Image from '../images/u1.png'; 
import pkImage from '../images/pk.png'; 
import ajImage from '../images/aj.png'; 
import vaImage from '../images/va.png'; 
import sgImage from '../images/sg.png'; 

const Aboutus = () => {
    return (
        <div className='kg px-4 lg:px-4 mt-14 max-w-screen-xl mx-auto min-h-screen h-screen' id="aboutus">
            <div className='GH'>
            <div className='rm'>
                <p>At AB17, we are passionate about bringing music lovers together to experience unforgettable concerts and events. Our mission is to create magical moments that resonate with our audience and leave a lasting impression. AB17 concert is more than just a concert promoter - we are a community of music enthusiasts dedicated to curating exceptional live music experiences. From intimate acoustic sets to electrifying stadium performances, we strive to showcase a diverse range of talent that appeals to every musical taste. Whether you're an artist looking to perform or a music lover eager to attend our next event, there are plenty of ways to get involved with AB17. Join our mailing list to stay updated on upcoming concerts and follow us on social media for behind-the-scenes content and exclusive offers.</p>
            </div>
            <div className='rk'>
                <img className='img' src={arImage} alt='concert' />
                <img className='img' src={u1Image} alt='concert' />
                <img className='img' src={pkImage} alt='concert' />
                <img className='img' src={ajImage} alt='concert' />
                <img className='img' src={vaImage} alt='concert' />
                <img className='img' src={sgImage} alt='concert' />
            </div>
            </div>
        </div>
    );
};

export default Aboutus;

import './Blog.css';
import React from 'react';
import concertImage1 from '../images/u1.png'; 
import concertImage2 from '../images/ar.png'; 
const Blog = () => {
    return (
        <div className='rkg px-4 lg:px-4 mt-14 max-w-screen-xl mx-auto min-h-screen h-screen' id="blog">
            <div className='left'>
                <div className='kgr'>
                    <img className='image' src={concertImage1} alt='concert' />
                </div>
                <p className='text'>
                    The concert structure (order of songs) was well planned. To keep up the hype and hook the audience, there were welcome songs — from Kandukondain Kandukondain to Maamannan. Haricharan sang “Enna Solla Pogirai” followed by Shuba, Shweta Mohan, and Rakshita Suresh singing other songs.
                    This was followed by Hariharan singing Vennilave, Nila Kaaigiradhu, and Shakthisree Gopalan singing Nenjukkule and Nenjame Nenjame. As the artists performed on stage, the audience sang along. ARR then sang the most famous “Yakkai Thiri” and we all enjoyed it.
                    To our surprise, Vadivelu came on stage and sang two songs — one from Maamannan and another from Sangamam. He recalled his memories with ARR and both of them sang the Sangamam song together.
                    After that ARR came with a segment of Ragas. He’d show the name of the raga on the screen and then perform a song based on that raga. Though I couldn’t remember the raga names, the whole segment was good. There were 6–8 songs in that segment.
                    This was followed by a rap segment where Blaaze, ADK, and other artists rocked the stage. There were several songs by them and it was energetic.
                </p>
            </div>
            <div className='right'>
                <p className='text'>
                    The sensational singer and composer returns to KL for the third time in his next show called “YUVAN 25 – LIVE IN CONCERT KUALA LUMPUR”. 
                    Speaking to Varnam Malaysia, concert organisers Malik Streams confirmed that there will also be special performances for one hour featuring local artists such as Darkkey, Santesh, Havoc Brothers, Yunohoo, Siddarth, Ifon, and many more to be confirmed soon. 
                    With a career spanning 25 years, Yuvan is returning to Kuala Lumpur after ten years and this will be his first show on his world tour. The three-hour concert should not be missed by any of his diehard fans, as he will be showcasing repertoires from his earlier to the latest hits such as ‘Mankata’, ‘Idhu Varai Male’, ‘Yedho Mayakam’, ‘Loosu Penna’, ‘Oru Kal Oru Kannadi’ and many more crowd favourites.
                    The 25 years of brilliant music by Yuvan will feature all his music that was created in more than two decades. Malik Streams are also ensuring concert-goers will experience the one night only performance by Yuvan Shankar Raja in Kuala Lumpur to be a spectacular one. The concert is in celebration of Yuvan’s involvement in the music industry for 25 years and the immense support from his thousands of loyal and devoted fans in Malaysia and around the region.
                </p>
                <div className='kgr'>
                    <img className='image' src={concertImage2} alt='concert' />
                </div>
            </div>
        </div>
    );
};

export default Blog;

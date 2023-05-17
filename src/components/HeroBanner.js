import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

import HeroBannerVideo from '../assets/videos/gymvid.mp4'

const HeroBanner = () => {
  return (
   
    <div className='hero-container'>
    <video src={HeroBannerVideo} autoPlay loop={true} muted />
    <h1>WE<span className='textColor'> STRIVE</span> FOR <span className='textColor'>FITNESS</span></h1>
    <p>GET <span className='textColor'>PUMP</span>, GET <span className='textColor'>SWEAT</span> AND  <span className='textColor'>REPEAT</span></p>
    <div className='hero-btns'>
      <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
      >
        <Link
          to='/exercisepage'

          style={{textDecoration: 'none', color:'#F5f5f5'}}
        >          
        Explore Exercises
       </Link>
      </Button>
      
    </div>
  </div>
  )
}

export default HeroBanner
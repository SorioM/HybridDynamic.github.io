import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';

import gif1 from '../assets/images/1.gif';
import gif2 from '../assets/images/2.gif';
import gif3 from '../assets/images/3.gif';
import gif4 from '../assets/images/4.gif';
import gif5 from '../assets/images/5.gif';
import gif6 from '../assets/images/6.gif';
import rightArrow from '../assets/images/right-arrow.png';

import './HomeContent.css';



const HomeContent = () => {
  return (
    <>
        <div className='content1'>
        <div className='title-content'>
        <h4>STRIVING FOR FITNESS</h4>
        </div>

        <div className='para-content'>
            <p>Our 'strive for fitness' format makes exercising fun delivering a total body workout that burns fat and builds lean muscle.</p>
        </div>
        <div className='btn-content'>
        <Button 
        className='btns'
        buttonStyle='btn--outline1'
        buttonSize='btn--large'>
          <Link
          to='/about'
          style={{textDecoration: 'none', color:'#121619'}}
          >        
          LEARN MORE
          </Link>
        </Button>
        </div>
        </div>
        <div className='content2'>
          <h4>Here are some exercises you can do!</h4>
          <div className='gifs'>
            <img src={gif1} alt='Exercise 1'/>
            <img src={gif2} alt='Exercise 2'/>
            <img src={gif3} alt='Exercise 3'/>
            <img src={gif4} alt='Exercise 4'/>
            <img src={gif5} alt='Exercise 5'/>
            <img src={gif6} alt='Exercise 6'/>
          </div>

          <div className='seeMore-btn'>
            <button>
            <Link
              to='/exercisepage'
              style={{textDecoration: 'none', color:'#121619'}}
            >   
            See more 
            </Link>
              </button>
            <img src={rightArrow} alt='right-arrow'/>
          </div>

        </div>

        
    </>

  )
}



export default HomeContent






  

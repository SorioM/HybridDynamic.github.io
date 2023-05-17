import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo2 from '../assets/images/logo2.png';

const Footer = () => {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        
       
        <div class='footer-link-items'>
        <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={Logo2} height='100px' width='100px'/>
            </Link>
        </div>
        </div>

        <div class='footer-link-items'>
          <div class='social-media-wrap'>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
              <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </div>
          
          
          

          
          <div class='footer-link-items'>
            <h2>
              <Link
              to='/about'
              style={{textDecoration: 'none',}}
              >   
              About Us
              </Link></h2>
          </div>
          <div class='footer-link-items'>
            <h2>
              <Link
              to='/contact'
              style={{textDecoration: 'none',}}
              >   
              Contact Us
              </Link>
              </h2>
          </div>
        
        
          
          
        
      </div>

     
      <section class='social-media'>
        
        <div class='social-media-wrap' style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
        <p style={{color:'white', fontSize:'12px'}}> HYBRID DYNAMIC &#169; 2023</p>
          
        </div>
      </section>
      
    </div>
  )
}

export default Footer
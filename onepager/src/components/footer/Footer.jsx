import React from 'react'
import './Footer.scss'
import Wrapper from '../wrapper/Wrapper';
import FooterPhone from '../../assets/footer-phone.png';
import PlayStore from '../../assets/footer-play-store.svg';
import AppStore from '../../assets/footer-app-store.svg';
import Logo from '../../assets/footer-logo.svg';

import { 
    AiFillLinkedin,
    AiFillInstagram,
    AiOutlineTwitter
 } from 'react-icons/ai';

import { FaFacebook } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='footer'>
      <Wrapper>
      <div className="footer__container">
        <div className="footer__text">
        <h2>Start Building Today!</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Totam consequatur tempora ducimus modi harum fuga.
        </p>
        <div className="footer__stores">
            <img src={PlayStore} alt="" />
            <img src={AppStore} alt="" />
        </div>
        </div>
        <div className="footer__img-container">
            <img src={FooterPhone} alt="" />
        </div>
      </div>
      <div className="footer__links-container">
        <div className="footer__logo-container">
        	<img src={Logo} alt="" />
        </div>

        <div className="footer__links-col">
            <h3>Platforms</h3>
            <ul>
                <li>iOS</li>
                <li>Android</li>
                <li>Web</li>
            </ul>
        </div>
        <div className="footer__links-col">
            <h3>About</h3>
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Feedback</li>
            </ul>
        </div>
        <div className="footer__links-col">
            <h3>Get in touch</h3>
            <p>+91 788745223</p>
            <p>user@gmail.com</p>


            <div className="footer__icons">
                <div className="footer__icon">
                <AiFillInstagram/>
                </div>
                <div className="footer__icon">
                <AiFillLinkedin/>
                </div>
                <div className="footer__icon">
                <FaFacebook/>
                </div>
                <div className="footer__icon">
                <AiOutlineTwitter/>
                </div>
            </div>
        </div>
      </div>
      </Wrapper>
    </footer>
  )
}

export default Footer

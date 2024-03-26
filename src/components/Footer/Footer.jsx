// Footer.js

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';
import call from '../Assets/viber.png'
import whatsapp from '../Assets/whatsapp.png'
import { Link } from 'react-router-dom'

const Footer = () => {

const handleFooter = () => {

    if (window.innerWidth < 1900) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  };

    return (
        <>
            <div className="icon-container">

                <Link to="tel:9099535555" className="icon call">
                    <img className='icon-image icon-image-call' src={call} alt="" />
                </Link>
                <Link to="https://wa.me/9099535555" className="icon whatsapp">
                    <img className='icon-image icon-image-whatsapp' src={whatsapp} alt="" />
                </Link>
            </div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-content">
                                    <h5>Address</h5>
                                    <h6>K.No. 29/5, 1040, Doddanagamangala Village, Cambridge School Road, Konappana Agrahara, Electronic City, Bengaluru 560100</h6>
                                </div>

                            </div>
                            <div className="col-md-6">

                                <div className="footer-contents">
                                    <h5>Contact Us</h5>
                                    <h6>Phone: 9099535555</h6>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="footer-icons">
                        <ul className="footer-list">
                            <Link to='/services'> <li onClick={handleFooter}>Services</li></Link>
                            <Link to='/form'> <li   onClick={handleFooter}>Contact Us</li></Link>
                            <Link to='/policy'> <li   onClick={handleFooter}>Privacy Policy</li></Link>
                            <Link to='/terms'> <li   onClick={handleFooter}>Terms of Service</li></Link>
                        </ul>
                        <div className="social-icons">
                            <Link to="https://www.facebook.com"><FaFacebook /></Link>
                            <Link to="https://www.twitter.com"><FaTwitter /></Link>
                            <Link to="https://www.instagram.com"><FaInstagram /></Link>
                            <Link to="https://www.linkedin.com"><FaLinkedin /></Link>
                            <Link to="https://www.youtube.com"><FaYoutube /></Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <h6>&copy; {new Date().getFullYear()} GoodRich Packers & Movers. All Rights Reserved. Developed By <span className='footer-company'> <Link to='https://futuretouch.in/'>Future IT Touch Pvt Ltd</Link></span></h6>
                </div>
            </footer>
        </>
    );
};

export default Footer;

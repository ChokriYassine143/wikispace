import React from 'react';
import './Footer.css';
import locationImage from './maps.png';  // Importing the image

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
            <div className="footer-right">
                   <a href='https://www.google.com/maps/place/Wiki+space/@35.837146,10.6264886,15z/data=!4m2!3m1!1s0x0:0xf466807b1228d809?sa=X&ved=1t:2428&ictx=111' target='_blank'><img src={locationImage} alt="Location" className="location-image" /></a> 
                </div>
                <div className="footer-left">
                    <p>Email: <a href="mailto:wikispace.tn@gmail.com">wikispace.tn@gmail.com</a></p>
                    <p>Phone: <a href="tel:+216 98 406 369">+1 (234) 567-890</a></p>
                    <p>Open 24/7</p>
                </div>
              
            </div>
        </footer>
    );
}

export default Footer;

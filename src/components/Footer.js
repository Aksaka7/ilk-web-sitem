import React from 'react';
import './Footer.css';



const Footer = () => {
    return (
        <div id='footer'>
            <div className='footer'>
                <div className='container'>

                    <ul>
                        <li className='nav-item '> <a href='/'>Home</a> </li>

                        <li className='nav-item'> <a href='#about'>About</a> </li>

                        <li className='nav-item'> <a href='#tertimonials'>Testimonials</a> </li>

                        <li className='nav-item'> <a href='#contact'>Contact</a> </li>
                    </ul>

                    <div className='bottom'>

                        <span className='icon'><a href='https://www.facebook.com/timmythozamile.mmango' ><i class="fab fa-facebook-f"></i></a></span>
                        <span className='icon'><a href='https://www.instagram.com/thefinanciallyfreeme/' ><i class="fab fa-instagram"></i></a></span>
                        <span className='icon'><a href='https://twitter.com/TimMmango?t=ohMC5Ab9wTe7vM9P1lAGWA&s=09' ><i class="fab fa-twitter"></i></a></span>

                    </div>
                    <p>Tim Mmango, Inc. All rights reserved</p>

                </div>
            </div>
        </div >
    )
};

export default Footer;

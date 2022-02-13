import React from 'react';
import user1 from './images/Emo.jpeg';
import user2 from './images/Lucy.jpeg';
import user3 from './images/steph.jpeg';

import './Tertimonials.css';


const Tertimonials = () => {
    return (
        <div className='tertimonials' id='tertimonials' >

            <div className='container' >
                <h2>Tertimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1' />
                        <p>
                            The Financial freedom course gave me the knowledge and the inspiration to build healthy financial habits and
                            pursue my financial goals. It starts from the basic how to track your expenses and build a
                            budget to more advanced topics like how to make wise  investments about property and stocks.
                            The program was helpful because it enriched my financial education and gave me the accountability and
                            support to apply the new knowledge in my life. What is more, Tim is a great mentor who is passionate about
                            empowering people to reach their financial goals and gives his best to help in the process of achieving financial freedom.
                            Highly recommended!
                        </p>
                        <p><span> Emo </span></p>
                        <p> Business, leadership and is an IBM team member. </p>
                    </div>

                    <div className='card'>
                        <img className='boy' src={user2} alt='user1' />
                        <p>
                            Thank you so much for the time you have invested in me Tim.

                            Thank you for the hope you’ve given me, thank you for sharing your knowledge, for your constant encouragement.. I didn’t think financial freedom was possible for me especially being in my 30s
                            But you’ve helped me see that it is possible..
                            All this knowledge that you’ve shared I have loved applying in my life and will continue applying..

                            Continue encouraging others,we need more people like you.</p>
                        <p><span>Lucy</span></p>
                        <p>Education and Music</p>
                    </div>

                    <div className='card'>
                        <img src={user3} alt='user1' />
                        <p>
                            Financial Freedom Sessions have help me to take control and manage my finances well. I have learned so many new things I didn’t know, and gain the knowledge and confidence to do them on my own. I’ve learned the best way to buying my own house. I also learned about investing in Real Estate, stocks and crypto. I am happy and  excited for what the future holds. Thank you, Tim.
                        </p>
                        <p><span> Steph </span></p>
                        <p>Customer Care Specialist</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Tertimonials

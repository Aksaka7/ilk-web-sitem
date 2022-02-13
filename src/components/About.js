import React from 'react';
import tim from './images/Tim3.jpeg'
import './About.css';

import { Modal } from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2> About Me</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <p>I have a strong background in business development, started-ups, business management, service industry, finance, investing and coaching. I am graced with the unique passion for people, problem solving, and leadership development. I love everything about business, finance, property, stocks, crypto and NFTs. I also love serving people, as it pleases my heart to see others flourish.
                        I have been privileged to work and live amongst the most successful, wealthiest, and most powerful people in America. From top government officials, to people who own companies and industries that influence not just the American economy, but the world economy. Growing in this type of environment for more than 7 years has added tremendous value, experience and knowledge. It has positively shaped who I am, my skill sets, my approach to life, and the way I think. I intend to impart this valuable, life changing experience and knowledge to anyone willing to learn.
                    </p>

                    Enough with pleasantries! 😁 <p>
                        My beginnings are rather humbling. I come from a small town that no body knows. I grew up surrounded by poverty and myself and my family/parents have been poor before. Through my parents hard work, at one point we were no longer poor but became an affording family.
                    </p>
                    <p>
                        Both Mom and Dad now work as teachers and also own businesses. For a long time I have struggled with poverty mentality, but now I’ve eradicated it and won the fight I often still see as big challenge in my family and many others. There’s spaces I couldn’t get in and wealth brackets I couldn’t break into because of Poverty Mentality. You can see poverty mentality by how people spend their time and money.
                    </p>
                    <p>
                        I have always been a dreamer. I’ve always been committed to do whatever it takes to reach my goals and make my dream a reality.
                        I had a goal to make my first Million-Rands before turned 30. Other goals to live abroad in multiple countries, to start a my own business, own rental property, own my time, to travel the world, to build wealth, to serve others and give generously.
                    </p>

                    <p>
                        Now I’ve been fortunate to live in 3 countries, and live in two beautiful locations in all three countries.
                        <ul>
                            <li>🇺🇸 America - Miami and Cape Cod Boston area</li>
                            <li>🇿🇦 South Africa - Pretoria and Barkly East</li>
                            <li>🇧🇬 Bulgaria - Sofia and Berkovitsa</li>
                        </ul>
                        I started my own a scooter rental business in America when I was 25.
                        I started investing in stock when and crypto when i was 26. Tesla and Bitcoin were on of my first buys.
                        I reached financial freedom when i was 29
                        I made my first million when I was 29.
                        I bought my first rental property cash - 5 bedroom house and 3 flats at 30.I have given over $51 000 the past 10 years from my income. I have more generous goals for the next 10.
                        Now I educate, equip and empower others as Personal Finance and Wealth Building Coach.
                    </p>

                    My goal is to coach others in their journeys, with the hope more others would be reached, coached and financially transformed.
                </p>
            </Modal.Body>

        </Modal >
    );
}

const About = () => {

    const [modalShow, setModalShow] = React.useState(false);



    return (
        <div className='about' id='about'>

            <div className='container'>
                <img src={tim} alt='Tim' />
                <div className='colon'>

                    <h2>About</h2>
                    <span className='line'></span>
                    <p>
                        I have a strong background in business development, startups, business management, service industry, finance, investment and coaching. I love everything related to business, finance, property, stocks, crypto and NFTs.
                    </p>
                    <p>Hi, I am Tim and I am glad you're here. I would love to take you on a financial transformation journey.</p>
                    <button className="button btn-outline-primary" onClick={() => setModalShow(true)}>Read My Story</button>


                </div>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </div >
    )
}

export default About

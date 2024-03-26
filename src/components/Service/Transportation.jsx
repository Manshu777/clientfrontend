import React, {useState} from 'react';
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import pnginter from "../Assets/international.webp"
import international from '../Assets/cargo.webp'
import { Link } from 'react-router-dom';
import Form from '../Form/Form'
const Transportation = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div>
            <section className="banner-international">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="main-inner-banner-text">
                            <div className="ft-breadcrumb-content">
                                <h2>International Transportation</h2>
                                <div className="ft-breadcrumb-list ul-li">
                                    <ul>
                                        <li><Link to='/'>Home</Link></li>
                                        <li><Link to='/services'>Service</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-details-area">
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-lg-7 mt-3">
                            <div className="service-details-wrap">
                                <h1>International packers and movers services in Bangalore</h1>
                                <p className="text-justify">

                                    Looking for seamless international moving services in Bangalore? Look no further than GoodRich Packers and Movers. Our expert team specializes in international relocations, ensuring a smooth transition for your belongings across borders. With meticulous planning and top-notch logistics, we guarantee a hassle-free experience for our clients. Trust GoodRich Packers and Movers for your international moving needs in Bangalore. 
                                </p>
                                <p className="text-justify">

                                    Our international packers and movers services in Bangalore offer comprehensive solutions tailored to meet your relocation needs. We take care and precision in handling every part of your overseas move, from loading and packing to clearing customs and delivery. With our extensive network of partners worldwide, we ensure timely and secure transportation of your belongings to any destination. Choose GoodRich Packers and Movers for a seamless international relocation experience in Bangalore. Contact us now to get started on your journey.
                                </p>
                                <p className="text-justify">
                                    At GoodRich Packers and Movers, our international relocation services in Bangalore guarantee efficiency and reliability. With years of experience, we manage the complexities of cross-border moves seamlessly. From handling paperwork to coordinating logistics, our dedicated team ensures a smooth transition for your belongings. Trust us to deliver your possessions safely and on time to any global destination. Choose GoodRich Packers and Movers for peace of mind during your international move in Bangalore. Get in touch with us today!
                                </p>
                                <div className="single-item" >
                                    <img className='item-img' src={international} alt="International packers and movers services in Bangalore" />
                                </div>
                                <h2>Hire international transportation services in Bangalore</h2>
                                <p className="text-justify">
                                    Looking for seamless international transportation services in Bangalore? GoodRich Packers and Movers has got you covered. Our expert team specializes in handling international relocations with precision and care. Whether you're moving overseas for work or personal reasons, we ensure safe and timely transportation of your belongings to any destination worldwide. Trust GoodRich Packers and Movers for hassle-free international moving solutions in Bangalore.
                                </p>
                                <p className="text-justify">

                                    Look no further for top-notch international transportation services in Bangalore! GoodRich Packers and Movers is your trusted partner for smooth and efficient relocations across borders. With our extensive expertise and dedicated team, we ensure the secure and prompt delivery of your possessions to any global destination. Count on GoodRich Packers and Movers to handle all aspects of your international move with professionalism and reliability. Contact us now to experience seamless transportation services in Bangalore and beyond!
                                </p>
                                <p className="text-justify">
                                    For reliable international transportation services in Bangalore, turn to GoodRich Packers and Movers. With our seasoned team and commitment to excellence, we guarantee the safe and timely delivery of your belongings worldwide. Trust us to handle your international move seamlessly. Contact GoodRich Packers and Movers today for unparalleled service in Bangalore.
                                </p>
                                <h4>Why Choose Us?</h4>
                                <p className="text-justify">
                                    Choosing GoodRich Packers and Movers means selecting reliability, efficiency, and professionalism for your relocation needs. With years of experience in the industry, we pride ourselves on delivering top-notch services tailored to your requirements. Our skilled team ensures the safe handling and transportation of your belongings, providing peace of mind throughout the process. From meticulous packing to timely delivery, we prioritize customer satisfaction, making us your trusted partner for a seamless moving experience.
                                </p>
                                <p className="text-justify">
                                    At GoodRich Packers and Movers, our commitment to excellence sets us apart. With a dedicated team of experts, we prioritize the safety and security of your belongings above all else. From local moves to long-distance relocations, we offer personalized solutions to meet your unique needs. Our transparent pricing, punctuality, and attention to detail ensure a stress-free moving experience from start to finish. Trust GoodRich Packers and Movers for unparalleled professionalism and reliability every step of the way.






                                </p>
                                <p className="text-justify">
                                    When you choose GoodRich Packers and Movers, you're selecting a partner dedicated to exceeding your expectations.Our track record of accomplishments speaks eloquently about our dedication to client satisfaction. With state-of-the-art equipment and industry-leading techniques, we ensure the smoothest transition for your possessions. From fragile items to bulky furniture, we handle each item with utmost care and precision. Experience peace of mind knowing that your move is in capable hands with GoodRich Packers and Movers, your trusted relocation ally.
                                </p>
                                <div className="service-sidebar-area m-3 text-center">
                                    <div className="service-list service-card">
                                        <div className="left-main-div">
                                            <h3 className="service-details-title">Our Services</h3>

                                            <ul>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                    Local Household Shifting
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                    Domestic Shifting Services
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                    International Transportation
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                    Car & Bike Transportation
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                    Warehouse Services
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                    Packing Unpacking Services
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="service-image"><img style={{ width: '200px', height: 'auto' }} src={pnginter} alt="" /></div>

                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 mt-3">
                        <Form  activeTab={activeTab} setActiveTab={setActiveTab}/>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Transportation

import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import deliver from '../Assets/domestic1.webp'
import deliver2 from '../Assets/delever.webp'
import { Link } from 'react-router-dom';
import Form from '../Form/Form'

const Loading = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <section className="banner-loading">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="main-inner-banner-text">
                            <div className="ft-breadcrumb-content">
                                <h2>Domestic Shifting Services</h2>
                                <div className="ft-breadcrumb-list ul-li">
                                    <ul>
                                        <li><Link to='/'>Home</Link></li>
                                        <li><Link>/</Link></li>
                                        <li><Link>Service</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-details-area">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-lg-7 mt-3">
                            <div className="service-details-wrap">
                                <h2>Employ Bangalore's Finest Domestic Moving SeArvices</h2>

                                <p className="text-justify">
                                Looking to relocate hassle-free in Bangalore? GoodRich Packers and Movers offer top-notch domestic shifting services tailored to your needs. With a reputation for reliability and professionalism, we handle every aspect of your move with care and precision.To ensure a smooth transfer to your new home, we offer full services that include packing, loading, transportation, unloading, and unpacking. We ensure a stress-free moving experience with our well-trained staff and upfront pricing. For the greatest domestic moving services in Bangalore, put your trust in GoodRich Packers & Movers. Get in touch with us now for a hassle-free moving experience!
                                </p>

                                <p className="text-justify">
                                Experience a stress-free relocation in Bangalore with GoodRich Packers and Movers. Our dedicated team ensures your belongings are handled with utmost care, providing peace of mind throughout the moving process. From packing to unpacking, we handle every detail efficiently. With transparent pricing and clear communication, we prioritize customer satisfaction above all else. Trust GoodRich Packers and Movers for a smooth and seamless transition to your new home. Discover why we're the top choice for domestic shifting services in Bangalore. Contact us now to get started!
                                </p>

                                <p className="text-justify">
                                Relocating in Bangalore? Choose GoodRich Packers and Movers for a hassle-free experience. Our expert team takes care of every aspect of your move, from packing fragile items to loading heavy furniture with precision. With attention to detail and efficiency, we ensure your belongings arrive safely at your new home. Transparent pricing and excellent customer service are our hallmarks, making us the preferred choice for domestic shifting services in Bangalore. Trust GoodRich Packers and Movers to make your relocation smooth and stress-free. Contact us today!
                                </p>

                                <div className="single-item" style={{ margin: '30px' }}>
                                    <img src={deliver} alt="car bike transportation services in bangalore" />
                                </div>


                                <h2>Why One Should Hire Domestic Shifting services in Bangalore?</h2>

                                <p className="text-justify">Looking for reliable packers and movers in Bangalore? Consider GoodRich Packers and Movers for top-notch warehouse services. With our extensive experience and state-of-the-art facilities, we offer secure storage solutions tailored to your needs. Whether you're relocating, renovating, or simply need extra space, our warehouses provide a safe haven for your belongings. From furniture to fragile items, we ensure proper handling and protection. Don't let storage concerns overwhelm you. Trust GoodRich Packers and Movers for comprehensive warehouse services in Bangalore, ensuring peace of mind throughout your moving journey..</p>

                                <p className="text-justify">GoodRich Packers and Movers in Bangalore offer unparalleled warehouse services for your convenience. Our warehouses are equipped with advanced security systems to safeguard your belongings. Whether you require short-term storage during a move or long-term storage for excess inventory, we've got you covered. Our team ensures meticulous handling and organization of your items, giving you peace of mind. With GoodRich Packers and Movers, you can rest assured that your possessions are in safe hands, allowing you to focus on other aspects of your relocation stress-free.</p>

                                <p className="text-justify">GoodRich Packers and Movers in Bangalore provide reliable warehouse services tailored to your needs. Our secure facilities offer short-term and long-term storage solutions with advanced security measures. Trust our experienced team to handle your belongings with care and organization. With GoodRich Packers and Movers, you can streamline your relocation process and enjoy the convenience of safe and efficient storage options in Bangalore.</p>

                                <h2>Why Choose Us?</h2>
                                <p className="text-justify">Looking for the finest Packers and Movers in Bangalore? Choose GoodRich Packers and Movers for unmatched service excellence. With years of experience and a dedicated team, we prioritize the safety of your belongings and ensure hassle-free relocation. Our commitment to quality, reliability, and affordability sets us apart. From careful packing to timely delivery, we handle every aspect of your move with utmost care and professionalism. Trust GoodRich Packers and Movers for a seamless relocation experience in Bangalore. Your satisfaction is our priority. Choose us for peace of mind.</p>
                                <p className="text-justify">When it comes to selecting Packers and Movers in Bangalore, GoodRich stands out for its unparalleled dedication and expertise. With a proven track record of successful relocations, we understand the intricacies of every move, ensuring a smooth transition for you. Our trained professionals handle your belongings with utmost care, guaranteeing their safe arrival at your new destination. From meticulous packing to efficient unpacking, we handle every step with precision and efficiency. Choose GoodRich Packers and Movers in Bangalore for a stress-free and reliable moving experience. Your satisfaction is our top priority, making us the ideal choice for your relocation needs.</p>
                                <h2>Experience the Difference:</h2>
                                <p className="text-justify">With GoodRich Packers and Movers, say goodbye to the stress and hassle of moving. Let us handle the logistics while you focus on settling into your new home. Contact us today to experience the difference in domestic shifting services in Bangalore.</p>
                                <h5>Efficiency, Reliability, Peace of Mind - That's GoodRich Packers and Movers for You!</h5>
                            </div>
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
                                    <div className="service-image"><img src={deliver2} alt="" /></div>

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5 mt-3">
                            <Form  activeTab={activeTab} setActiveTab={setActiveTab}/>



                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Loading;

import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import cars from '../Assets/system.webp'
import van from '../Assets/van.webp'
import { Link } from 'react-router-dom';
import Form from '../Form/Form'

const Roadways = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <section className="banner">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="main-inner-banner-text">
                            <div className="ft-breadcrumb-content">
                                <h2>Car & Bike Transportation</h2>
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
                                <h1>Bangalore's Finest Vehicle and Bike Transportation Service</h1>
                                <p>
                                    Looking for top-tier car and bike transport services in Bangalore? Look no further than GoodRich Packers and Movers. We specialize in seamless relocation solutions, ensuring your vehicles reach their destination safely and on time. Our dedicated team employs state-of-the-art techniques and equipment to guarantee the utmost care during transit. Trust GoodRich Packers and Movers for unparalleled service excellence in Bangalore's transport industry.
                                </p>
                                <p>For unparalleled car and bike transport services in Bangalore, trust GoodRich Packers and Movers. With our meticulous attention to detail and commitment to customer satisfaction, we ensure a smooth and hassle-free relocation experience for your vehicles. Our team utilizes advanced technology and expertise to handle your precious possessions with care and precision. Count on GoodRich Packers and Movers for reliable and efficient transportation solutions tailored to your needs.
                                </p>
                                <p>For unparalleled car and bike transport services in Bangalore, trust GoodRich Packers and Movers. With our meticulous attention to detail and commitment to customer satisfaction, we ensure a smooth and hassle-free relocation experience for your vehicles. Our team utilizes advanced technology and expertise to handle your precious possessions with care and precision. Count on GoodRich Packers and Movers for reliable and efficient transportation solutions tailored to your needs.
                                </p>

                                <div className="single-item" style={{ margin: '30px' }}>
                                    <img src={cars} alt="car bike transportation services in bangalore" />
                                </div>

                                <h2>Hire Car &amp; Bike Transportation Services In Bangalore</h2>
                                <p>Looking to safely transport your car or bike in Bangalore? Look no further than GoodRich Packers and Movers! Our expert team specializes in reliable car and bike transportation services across Bangalore. With state-of-the-art equipment and trained professionals, we ensure secure handling and timely delivery of your vehicles to your desired destination. Trust GoodRich Packers and Movers for hassle-free and efficient car and bike transportation services in Bangalore. 
                                </p>
                                <p>Trust GoodRich Packers and Movers for seamless car and bike transportation services in Bangalore. With our experienced team and top-notch equipment, we ensure the safe and timely delivery of your vehicles to any destination. Whether you're relocating or need your vehicle transported for any reason, we guarantee reliability and efficiency. Count on GoodRich Packers and Movers to take the stress out of moving your car or bike in Bangalore. Contact us now for a worry-free transportation experience!
                                </p>
                                <p>GoodRich Packers and Movers offers reliable car and bike transportation services in Bangalore. With our expertise and advanced facilities, we ensure the secure and punctual delivery of your vehicles. Whether you're moving or need transportation assistance, rely on us for a hassle-free experience. Trust GoodRich Packers and Movers to handle your car and bike transportation needs in Bangalore with care and efficiency. Reach out to us today for seamless services you can depend on!
                                </p>
                                <h2>Why Choose Us?</h2>
                                <p>
                                    When it comes to transporting your car or bike in Bangalore, GoodRich Packers and Movers stands out as your premier choice. With our dedicated team and years of experience, we ensure a seamless and secure transportation process.  Trust GoodRich Packers and Movers for your car and bike transportation needs in Bangalore, and experience unmatched professionalism and peace of mind.
                                </p>
                                <p>Look no further for car and bike transportation services in Bangalore than GoodRich Packers and Movers. Our proven track record and attention to detail make us the preferred choice. We prioritize safety and timely delivery, ensuring your vehicles reach their destination without hassle. With transparent pricing and personalized service, we guarantee a stress-free experience. Choose GoodRich Packers and Movers for unparalleled expertise and reliability in Bangalore's transportation industry. Your satisfaction is our top priority.
                                </p>
                                <p>
                                    Count on GoodRich Packers and Movers for top-notch car and bike transportation services in Bangalore. With a team dedicated to excellence, we handle your vehicles with utmost care and professionalism. Our commitment to punctuality and customer satisfaction makes us the go-to choice for hassle-free transportation solutions. Trust GoodRich Packers and Movers to deliver your vehicles safely and securely to their destination, ensuring peace of mind throughout the journey.
                                </p>
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
                                    <div className="service-image"><img src={van} alt="" /></div>

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

export default Roadways;

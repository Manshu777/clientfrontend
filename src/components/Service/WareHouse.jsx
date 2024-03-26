
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import warehouse from '../Assets/Temporary-warehouse.webp'
import house from '../Assets/warehousepng.webp'
import { Link } from 'react-router-dom';
import Form from '../Form/Form'

const WareHouse = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <section className="banner-warehouse">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="main-inner-banner-text">
                            <div className="ft-breadcrumb-content">
                                <h2>Warehouse Services</h2>
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
                                <h1>The Best Warehouse Services In Bangalore</h1>
                                <p className="text-justify">
                                    Experience seamless and reliable warehouse services in Bangalore with GoodRich Packers and Movers. Whether you're moving locally or across the country, trust us to provide top-notch warehousing solutions tailored to your needs. Our dedicated team ensures efficient handling and storage, making us the preferred choice for the best warehouse services in Bangalore. Your satisfaction is our priority as we strive to exceed your expectations with every move.</p>
                                <p className="text-justify">
                                    At GoodRich Packers and Movers, we redefine excellence in warehouse services across Bangalore. With strategically located warehouses equipped with advanced security systems, your belongings are in safe hands. Our team of trained professionals ensures meticulous inventory management and timely deliveries. Whether it's short-term storage or long-term solutions, we offer flexible options to accommodate your needs. Experience peace of mind knowing that your items are stored in the best warehouse facilities in Bangalore, backed by our commitment to quality service and customer satisfaction.</p>
                                <p className="text-justify">At GoodRich Packers and Movers, we prioritize efficiency and reliability in every aspect of our warehouse services. With round-the-clock surveillance and climate-controlled environments, your belongings remain protected and well-maintained. Choose us for the best warehouse services in Bangalore and experience unmatched convenience and peace of mind. Trust GoodRich Packers and Movers to safeguard your possessions with care and professionalism, ensuring a stress-free moving experience.</p>

                                <div className="single-item" style={{ margin: '30px' }}>
                                    <img src={warehouse} alt="car bike transportation services in bangalore" />
                                </div>


                                <h2>Why One Should Hire warehouse services in Bangalore?</h2>
                                <p className="text-justify">Looking for reliable warehouse services in Bangalore? GoodRich Packers and Movers has got you covered. Hiring warehouse services ensures secure storage of your belongings during transit or relocation. Our state-of-the-art facilities offer ample space and advanced security measures to safeguard your goods from damage or theft. With our professional warehouse services, you can enjoy peace of mind knowing that your possessions are in safe hands. Trust GoodRich Packers and Movers for all your storage needs in Bangalore.</p>
                                <p className="text-justify">Don't risk the safety of your belongings during relocation. GoodRich Packers and Movers offer top-notch warehouse services in Bangalore to ensure your items are protected throughout the moving process. Our spacious and secure facilities provide optimal storage solutions for your possessions, minimizing the risk of damage or loss. With our expert team managing your storage needs, you can focus on other aspects of your move with confidence. Choose GoodRich Packers and Movers for reliable warehouse services in Bangalore.</p>
                                <p className="text-justify">Secure your belongings with GoodRich Packers and Movers' warehouse services in Bangalore. Our dedicated facilities guarantee a safe haven for your items, shielding them from potential damage or theft. By entrusting us with your storage needs, you benefit from our professional approach, ensuring organized and efficient handling of your possessions. Don't compromise on the safety of your belongings – choose GoodRich Packers and Movers for trusted warehouse services that prioritize the security and integrity of your items in Bangalore.</p>
                                <h2>Why Choose Us?</h2>
                                <p className="text-justify">GoodRich Packers and Movers offer top-notch warehouse services tailored to your needs. Why choose us? Our warehouses are equipped with advanced security systems, ensuring the safety of your belongings round the clock. With spacious facilities and climate-controlled environments, we guarantee the integrity of your goods. Trust GoodRich Packers and Movers for reliable storage solutions in Bangalore, ensuring peace of mind throughout your relocation journey.
                                </p>
                                <p className="text-justify">When it comes to choosing warehouse services in Bangalore, GoodRich Packers and Movers stands out for several reasons. Our team of experienced professionals ensures efficient handling and management of your goods, minimizing the risk of damage or loss. With flexible storage options and competitive rates, we provide cost-effective solutions tailored to your specific requirements. Whether short-term or long-term storage needs, trust GoodRich Packers and Movers to safeguard your belongings with utmost care and professionalism.</p>
                                <p className="text-justify">At GoodRich Packers and Movers, we prioritize customer satisfaction by offering hassle-free warehouse services in Bangalore. Our commitment to excellence is reflected in our state-of-the-art facilities and dedicated staff who ensure the safety and security of your belongings at all times. With transparent processes and timely communication, we strive to exceed your expectations and make your storage experience seamless and convenient. Choose GoodRich Packers and Movers for reliable warehouse services in Bangalore, and experience peace of mind during your relocation journey.</p>
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
                                    <div className="service-image"><img src={house} alt="" /></div>

                                
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

export default WareHouse;

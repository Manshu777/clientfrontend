import React ,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import deliver from '../Assets/delivery-man.webp'
import deliver2 from '../Assets/icon1.webp'
import { Link } from 'react-router-dom';
import Form from '../Form/Form'
const Local = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <section className="local-banner-loading">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="main-inner-banner-text">
                            <div className="ft-breadcrumb-content">
                                <h2>Local Household Shifting</h2>
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
                                <h2>Best Local Household Shifting Services In Bangalore</h2>

                                <p className="text-justify">
                                    Looking for reliable packers and movers for local household shifting? Look no further than GoodRich Packers and Movers. With years of experience in the industry, we specialize in seamless local household shifting services tailored to meet your needs. Our dedicated team ensures careful packing, secure loading, swift transportation, and efficient unloading, making your move hassle-free. Whether you're moving within the city or nearby areas, trust GoodRich Packers and Movers to handle your local household shifting with professionalism and expertise. Contact us today for a smooth and stress-free relocation experience.
                                </p>

                                <p className="text-justify">

                                    At GoodRich Packers and Movers, we understand the importance of a smooth transition during local household shifting. Our skilled team utilizes quality packing materials and modern techniques to ensure the safety of your belongings.At every stage of the procedure, we aim to surpass your expectations by providing timely and dependable service. Put your trust in GoodRich Packers and Movers for a smooth local home moving process.
                                </p>

                                <p className="text-justify">
                                    Count on GoodRich Packers and Movers for seamless local household shifting. With expert packing, secure transportation, and prompt service, we ensure a stress-free relocation experience. You can rely on us to treat your possessions with respect and expertise. Select GoodRich Packers & Movers to ensure a seamless move to your new residence.
                                </p>

                                <div className="single-item" style={{ margin: '30px' }}>
                                    <img src={deliver} alt="car bike transportation services in bangalore" />
                                </div>


                                <h2>The Most Secure & Reliable Packers & Movers In Bangalore</h2>

                                <p className="text-justify">Introducing GoodRich Packers & Movers, your dependable and safe relocation partner in Bangalore. Throughout the moving process, we give the security and safety of your possessions top priority out of a dedication to excellence. Your relocation will be hassle-free thanks to our skilled team's careful packing, prompt transportation, and effective unpacking. As Bangalore's top packers and movers, we provide piece of mind with our completely insured services and open pricing. You can rely on GoodRich Packers and Movers to provide a smooth and worry-free moving experience.</p>

                                <p className="text-justify">At GoodRich Packers and Movers, we understand the importance of a smooth transition when relocating in Bangalore. With our dedicated team and comprehensive services, we ensure the highest level of security and reliability for your move.Every detail is handled with the highest care and efficiency, from careful packing to secure transit and timely unpacking. Our commitment to your satisfaction is unwavering, backed by transparent pricing and a fully insured process. Choose GoodRich Packers and Movers for a seamless relocation experience you can rely on.</p>

                                <p className="text-justify">For the most secure and reliable moving experience in Bangalore, choose GoodRich Packers and Movers. Our dedicated team ensures your belongings are handled with care, providing peace of mind throughout the process.</p>

                                <h2>Why Choose Us?</h2>
                                <p className="text-justify">Looking for the finest Packers and Movers in Bangalore? Choose GoodRich Packers and Movers for unmatched service excellence. With years of experience and a dedicated team, we prioritize the safety of your belongings and ensure hassle-free relocation. From careful packing to timely delivery, we handle every aspect of your move with utmost care and professionalism. Trust GoodRich Packers and Movers for a seamless relocation experience in Bangalore. Your satisfaction is our priority. Choose us for peace of mind.</p>
                                <p className="text-justify">When it comes to selecting Packers and Movers in Bangalore, GoodRich stands out for its unparalleled dedication and expertise. With a proven track record of successful relocations, we understand the intricacies of every move, ensuring a smooth transition for you. Our trained professionals handle your belongings with utmost care, guaranteeing their safe arrival at your new destination. From meticulous packing to efficient unpacking, we handle every step with precision and efficiency. Choose GoodRich Packers and Movers in Bangalore for a stress-free and reliable moving experience. Your satisfaction is our top priority, making us the ideal choice for your relocation needs.</p>
                                <h2>Experience the Difference:</h2>
                                <p className="text-justify">With GoodRich Packers and Movers, say goodbye to the stress and hassle of moving.As you concentrate on settling into your new home, let us take care of the details.. Contact us today to experience the difference in domestic shifting services in Bangalore.</p>
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
    )
}

export default Local
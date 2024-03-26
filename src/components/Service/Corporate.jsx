import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import deliver from '../Assets/full-shot.webp'
import deliver2 from '../Assets/domestic.webp'
import { Link } from 'react-router-dom';
import Form from '../Form/Form'
const Corporate = () => {
         const [activeTab, setActiveTab] = useState(1);

  return (
    <>
    <section className="corporate-banner-loading">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="main-inner-banner-text">
                    <div className="ft-breadcrumb-content">
                        <h2>Corporate Relocation Services</h2>
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
                        <h2>The Best Corporate Relocation Services In Bangalore</h2>

                        <p className="text-justify">
                        For the finest corporate relocation services in Bangalore, trust GoodRich Packers and Movers. Our expert team specializes in seamless corporate moves, ensuring minimal disruption to your business operations. With meticulous planning and efficient execution, we handle every aspect of your relocation with precision and care. Experience a smooth transition to your new corporate space with GoodRich Packers and Movers.
                        </p>

                        <p className="text-justify">
                        Discover unparalleled corporate relocation services in Bangalore with GoodRich Packers and Movers. With a focus on efficiency and professionalism, we streamline your corporate move to minimize downtime and maximize productivity. Our team of experts handles every aspect of your relocation, from packing and transportation to unpacking and setup, ensuring a seamless transition for your business. Trust GoodRich Packers and Movers for a stress-free corporate relocation experience in Bangalore.
                        </p>

                        <p className="text-justify">
                        Experience unmatched corporate relocation services in Bangalore with GoodRich Packers and Movers. Our dedicated team ensures a smooth transition for your business, handling packing, transportation, and setup with precision. Minimize downtime and maximize productivity with our efficient and professional approach. Trust GoodRich Packers and Movers for your corporate relocation needs in Bangalore.
                        </p>

                        <div className="single-item" style={{ margin: '30px' }}>
                            <img src={deliver} alt="car bike transportation services in bangalore" />
                        </div>


                        <h2>What Are The Benefits of Hiring An Expert?</h2>

                        <p className="text-justify">Discover unparalleled corporate relocation services in Bangalore with GoodRich Packers and Movers. Entrust your corporate move to experts for a seamless transition. Benefit from experienced professionals who handle every aspect efficiently, ensuring minimal disruption to your business operations. With GoodRich, enjoy streamlined processes, timely execution, and personalized attention to meet your unique corporate relocation needs.</p>

                        <p className="text-justify">Experience seamless corporate relocation services in Bangalore with GoodRich Packers and Movers. Our expert team ensures a smooth transition for your business, minimizing downtime and disruptions. Benefits of hiring an expert include efficient planning, professional packing, safe transportation, and timely delivery. Trust GoodRich for a hassle-free corporate move, allowing you to focus on your business while we take care of the rest.</p>

                        <p className="text-justify">Experience seamless corporate relocation services in Bangalore with GoodRich Packers and Movers. Our expert team ensures a smooth transition for your business, minimizing downtime and disruptions. Benefits of hiring an expert include efficient planning, professional packing, safe transportation, and timely delivery. Trust GoodRich for a hassle-free corporate move, allowing you to focus on your business while we take care of the rest.</p>

                        <h2>Why Choose Us?</h2>
                        <p className="text-justify">For the best corporate relocation services in Bangalore, trust GoodRich Packers and Movers. With years of experience and a dedicated team, we ensure a seamless transition for your business. Our services include packing, transportation, and unpacking, tailored to meet your specific needs. Choose us for our reliability, professionalism, and commitment to excellence. Experience a stress-free corporate relocation with GoodRich Packers and Movers.</p>
                        <p className="text-justify">
With GoodRich Packers and Movers, your corporate relocation in Bangalore is in capable hands. We prioritize efficiency, safety, and personalized service to minimize disruptions to your business operations. Our experienced team handles every aspect of the relocation process with precision and care. Trust us to deliver exceptional results and make your corporate move a success.</p>
                        <h2>Experience the Difference:</h2>
                        <p className="text-justify">With GoodRich Packers and Movers, your corporate relocation in Bangalore is in safe hands. Our efficient team handles every aspect of your move with precision and care, minimizing disruptions to your business operations. Choose us for our attention to detail, timely execution, and personalized service. Trust GoodRich for a smooth and successful corporate relocation experience.</p>
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

export default Corporate
import React from 'react';
import './Service.css'; // Import the CSS file
import warehouses from '../Assets/warehouses-icon.webp'
import unloading from '../Assets/delivery-man-icon.webp'
import loading from '../Assets/packing-icon.webp'
import transportation from '../Assets/Transportation-icon.webp'
import hour from '../Assets/car-icon.webp'
import packing from '../Assets/Local-Shifting-icon.webp'

import ClientReviews from './ClientReviews'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Packing from './Packing';

const Service = () => {
    // Settings for React Slick slider
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768, // Adjust as per your phone width breakpoint
                settings: {
                    slidesToShow: 1, // Change slides to show for smaller screens
                }
            }
        ]

    };

    const reviews = [
        {
            author: 'Hiii Frnds',
            content: `Many more packers and movers in Bangalore. When I chose Goodrich, I felt very good. I directly talked to the branch manager and asked everything; they gave me a proper response. About negative reviews, I asked clearly, most are fake reviews.`,
        },
        {
            author: 'SUMIT PANWAR',
            content: `Outstanding and superior service supplier. If you don't think what I say is true, try using Goodrich packers at least once in your life. After that, you keep using their services for your needs. Regards, group`,
        },
        {
            author: 'ANUBHAV SHARMA',
            content: 'Best service. I have recently shifted from Bangalore to Palacode, Tamil Nadu. Amazing service. Thanks, Goodrich Packers And Movers.',
        },
        {
            author: 'MAHESH V',
            content: `greatest business. My friend has already recommended Goodrich Packers to me when I'm looking for reliable movers and packers in Bangalore. I decided to utilize this packer and mover after receiving the best services possible from them.`,
        },
        {
            author: 'RAVI TANDON',
            content: 'Nice work. Thanks for support and best shifting. Thank you very much.',
        },
        {
            author: 'ARIFA SULTANA',
            content: 'Excellent customer service. Only one word… Safe secure and full responsibility only single name. Goodrich packers. Thank you very much.',
        },
        {
            author: 'SHWETA TRIPATHI',
            content: 'Bangalore to Noida. Thank you Goodrich packers for helping me to relocate from Bangalore to Noida. I was very much nervous about shifting but you did very well. Keep it up.',
        },
        {
            author: 'RAKESH SHARMA',
            content: 'Safe shifting. Thanks Suraj. We have shifted from Bangalore to Imphal. We got our goods safe and secure.',
        },
        {
            author: 'RANJINI',
            content: 'Good service little costly.',
        },
        {
            author: 'SUBHAM VERMA',
            content: 'Best service. I have recently shifted from Bangalore to Palacode, Tamil Nadu. Amazing service. Thanks, Goodrich Packers And Movers.',
        },
        {
            author: 'RAMYA D',
            content: 'Time to time delivery. My bike shifted by Goodrich packers and movers. Timely delivery. No any damages. Thank you sir… sure I will refer u.',
        },
        {
            author: 'ADITYA',
            content: 'Nice work. Thanks for support and best shifting. Thank you very Goodrich packers.',
        },
    
    ];

    const branchesData = [
        {
            id: 1,
            address: "# 35 14th main road, sector 4, HSR Layout, Bangalore karnataka 560102",
            phone: "8884012111"
        },
        {
            id: 2,
            address: "112/98 Velankani Drive, Celebrity layout, Electronic city Phase 1, Electronic city, Bengaluru Karnataka 560100",
            phone: "8884012111"
        },
        {
            id: 3,
            address: "20ft, Main Road, Magosa Ave, Green Glen Layout, Bellandur, Bengaluru, Karnataka 560103",
            phone: "8884012111"
        },
        {
            id: 4,
            address: "18th Cross, 1507, 8th Main Road, Jayanagar 3rd Block, Bengaluru, Karnataka 560011",
            phone: "8884012111"
        },
        {
            id: 5,
            address: "9th Cross Rd, SBI Colony, 1st Phase, J. P. Nagar, Bengaluru Karnataka 560078",
            phone: "8884012111"
        },
        {
            id: 6,
            address: "55, Manipal Center, 1, Dickinson Road, yellapps Garden, yellappa Chetty Layout, Sivanchetti Gardens, Bengaluru, Karnataka 560042",
            phone: "8884012111"
        }
    ];



    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<span key={i} className="star filled">&#9733;</span>);
            } else {
                stars.push(<span key={i} className="star">&#9733;</span>);
            }
        }
        return stars;
    };


    return (
        <>
            <Packing />
            <div className="service-main">
                <div className="container ">
                    <div className="col-md-12">
                        <h2 className='title'>Our Services</h2>
                        <figure className="wp-block-image size-large"></figure>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12 pull-left">
                                            <div className="card">
                                                < img src={packing} className="card-img-top" alt="Packing" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Local Household Shifting</h5>
                                                    <p className="card-text">
                                                    Searching for local household moving services that are hassle-free? Your move will go more smoothly with the help of GoodRich Packers & Movers. Our knowledgeable staff takes great care to guarantee that your valuables transfer smoothly. Everything from packing to unpacking is taken care of by us. You may rely on GoodRich Packers and Movers to make your move less stressful. Get a quote from us right now.!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12 pull-left">
                                            <div className="card">
                                                <img src={loading} className="card-img-top" alt="Loading" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Domestic Shifting Services</h5>
                                                    <p className="card-text">
                                                        Looking for reliable domestic shifting services? GoodRich Packers and Movers have got you covered. Our team of experts ensures a hassle-free relocation experience, handling everything from packing to transportation with utmost care and efficiency.Rely on our years of experience and dedication to client satisfaction to ensure a seamless and stress-free transfer. Get a quote from us right now!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12 pull-left">
                                            <div className="card">
                                                <img src={unloading} className="card-img-top" alt="Transportation" />
                                                <div className="card-body">
                                                    <h5 className="card-title"> Corporate Relocation Services</h5>
                                                    <p className="card-text">
                                                        Looking to streamline your corporate relocation process? GoodRich Packers and Movers offers comprehensive corporate relocation services tailored to meet your company's needs. Whether you're moving a small team or an entire office, our experienced team ensures a smooth transition. With careful planning and attention to detail. Trust GoodRich for a seamless corporate relocation experience.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12 pull-left">
                                            <div className="card">
                                                <img src={transportation} className="card-img-top" alt="Transportation" />
                                                <div className="card-body">
                                                    <h5 className="card-title">International Transportation</h5>
                                                    <p className="card-text">For seamless International Transportation solutions, look no further than GoodRich Packers and Movers. With our expertise and global network, we ensure efficient and secure relocation of your belongings across borders. Our team handles customs clearance, documentation, and logistics with precision, guaranteeing a hassle-free experience. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12 pull-left">
                                            <div className="card">
                                                <img src={hour} className="card-img-top" alt="Transportation" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Car & Bike Transportation</h5>
                                                    <p className="card-text">Trust GoodRich Packers and Movers for safe and reliable transportation of your cars and bikes. Our team ensures secure handling and timely delivery, providing peace of mind during the entire process. With state-of-the-art equipment and experienced professionals, we guarantee a hassle-free relocation experience for your vehicles.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12 pull-left">
                                            <div className="card">
                                                <img src={warehouses} className="card-img-top" alt="Transportation" />
                                                <div className="card-body">
                                                    <h5 className="card-title"> Warehousing</h5>
                                                    <p className="card-text">
                                                        For top-tier warehouse services, look no further than GoodRich Packers and Movers. Our state-of-the-art facilities ensure the safety and security of your belongings. With ample space and advanced inventory management systems, we guarantee efficient handling and storage of your goods.. Reach out to us for seamless warehouse solutions today.</p>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="service-main">
                <div className="container pdt10 pdb5">
                    <h3 className="title">Packers and movers bangore to other cities</h3>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4 ">
                                <div className="service-city">
                                    <div className="scrollable-container">
                                        <ul className="city-list">
                                            <li>Packers and Movers Bangalore to Mumbai</li>
                                            <li>Packers and Movers Bangalore to Delhi</li>
                                            <li>Packers and Movers Bangalore to Pune</li>
                                            <li>Packers and Movers Bangalore to Hubli</li>
                                            <li>Packers and Movers Bangalore to Goa</li>
                                            <li>Packers and Movers Bangalore to Hyderabad</li>
                                            <li>Packers and Movers Bangalore to Coimbatore</li>
                                            <li>Packers and Movers Bangalore to Chennai</li>
                                            <li>Packers and Movers Bangalore to Bhopal</li>
                                            <li>Packers and Movers Bangalore to Indore</li>
                                            <li>Packers and Movers Bangalore to Ahmedabad</li>
                                            <li>Packers and Movers Bangalore to Patna</li>
                                            <li>Packers and Movers Bangalore to Madurai</li>
                                            <li>Packers and Movers Bangalore to Pondicherry</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="service-city">
                                    <div className="scrollable-container">
                                        <ul className="city-list">
                                            <li>Packers and Movers Bangalore to Cochin</li>
                                            <li>Packers and Movers Bangalore to Cuttack</li>
                                            <li>Packers and Movers Bangalore to Mangalore</li>
                                            <li>Packers and Movers Bangalore to Mysore</li>
                                            <li>Packers and Movers Bangalore to Chandigarh</li>
                                            <li>Packers and Movers Bangalore to Dehradun</li>
                                            <li>Packers and Movers Bangalore to Gurgaon</li>
                                            <li>Packers and Movers Bangalore to Guwahati</li>
                                            <li>Packers and Movers Bangalore to Kolkata</li>
                                            <li>Packers and Movers Bangalore to Lucknow</li>
                                            <li>Packers and Movers Bangalore to Rajasthan</li>
                                            <li>Packers and Movers Bangalore to Jaipur</li>
                                            <li>Packers and Movers Bangalore to Bhubaneswar</li>
                                            <li>Packers and Movers Bangalore to Bikaner</li>
                                            <li>Packers and Movers Bangalore to Rourkela</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-city">
                                    <div className="textwidget custom-html-widget">
                                        <div className="scrollable-container">
                                            <ul className="city-list">
                                                <li>Packers and Movers Bangalore to Vijaywada</li>
                                                <li>Packers and Movers Bangalore to Trivandrum</li>
                                                <li>Packers and Movers Bangalore to Noida</li>
                                                <li>Packers and Movers Bangalore to Ranchi</li>
                                                <li>Packers and Movers Bangalore to Shimla</li>
                                                <li>Packers and Movers Bangalore to Siliguri</li>
                                                <li>Packers and Movers Bangalore to Assam</li>
                                                <li>Packers and Movers Bangalore to Gujarat</li>
                                                <li>Packers and Movers Bangalore to Kerala</li>
                                                <li>Packers and Movers Bangalore to Maharashtra</li>
                                                <li>Packers and Movers Bangalore to Visakhapatnam</li>
                                                <li>Packers and Movers Bangalore to Andhra Pradesh</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <ClientReviews reviews={reviews} sliderSettings={sliderSettings} />

            <div className="table-container">
                <table className="branches-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Goodrich Relocation Pvt Ltd. Branches Address</th>
                            <th>Phone No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {branchesData.map(branch => (
                            <tr key={branch.id}>
                                <td>{branch.id}</td>
                                <td>{branch.address}</td>
                                <td>{branch.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Service;

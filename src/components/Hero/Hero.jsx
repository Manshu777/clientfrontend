import React from 'react';
import './Hero.css';
import Form from '../Form/Form';
import Left from './Left';
import ClientReviews from '../Service/ClientReviews'; 
import { useState } from 'react';



const Hero = () => {
  const [activeTab, setActiveTab] = useState(1); // State for active tab
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

  return (
    <>
      <section>
        <div className="main-hero">
          <div className="container">
            <div className="row">
              
              <div className="col-md-7 order-md-1  left-column">
                <Left activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>
              <div className="col-md-5 order-md-1  form-column">
                <Form activeTab={activeTab} setActiveTab={setActiveTab}  />
              </div>
            </div>
          </div>

        </div>
        <ClientReviews reviews={reviews} sliderSettings={sliderSettings} />
      </section>


    </>
  );
};

export default Hero;



import React, { useState, useEffect, useRef } from 'react'
import moversonly from '../Assets/moversonly2.mp4';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import nblogo from '../Assets/nb-protect.png';
import logotwo from '../Assets/clock.png'
import icon1 from '../Assets/hassle-icon.png'
import icon2 from '../Assets/reliable-driver.png'
import logos from '../Assets/map_11622902 (1).webp'
import location from '../Assets/location.webp'
import driver from '../Assets/driving.webp'
import truck from '../Assets/truck.webp'
import work1 from '../Assets/heavy-lifting.png'
import work2 from '../Assets/instant-quote.png'
import work3 from '../Assets/quality-service-expert.png'
import work4 from '../Assets/shifting-requirement.png'
import image1 from '../Assets/multi-layer-packaging-esp.webp'
import image2 from '../Assets/image2.webp'
import image3 from '../Assets/lowest-price.png'
import image4 from '../Assets/quality-service.png'
import image5 from '../Assets/reschedule-cancellation.png'
import image6 from '../Assets/move-manager.png'
import image7 from '../Assets/professional-labour.png'
import Table from 'react-bootstrap/Table';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from '../Form/Form';




const Left = ({ activeTab, setActiveTab }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (itemId) => {
    setActiveItem(itemId); // Set the active item
    setActiveTab(itemId);

    if (window.innerWidth < 768) {
      window.scrollTo({
        top: 160,
        behavior: 'smooth'
      });
    }
  };


  const videoRef = useRef(null);



  useEffect(() => {
    // Ensure the video reference exists
    if (videoRef.current) {
      videoRef.current.play(); // Play the video
    }
  }, []);

  const sliderData = [
    {
      id: 1,
      logo: nblogo,
      brandName: 'GR Protect',
      title: 'Household damage protection',
    },
    {
      id: 2,
      logo: logotwo,
      brandName: '4.8 / 5 Rating',
      title: 'Timely Pickup & Delivery',
    },
    {
      id: 3,
      logo: icon1,
      brandName: '4.9 / 5 Rating',
      title: 'Reliable Packaging',
    },
    {
      id: 4,
      logo: icon2,
      brandName: 'Price Match Guarantee',
      title: '100% price and  guarantee',
    },


  ];

  const settings = {
    dots: true, // Show slider dots
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
          slidesToShow: 2, // Change slides to show for smaller screens
        }
      }
    ]
  };

  return (
    <>

      <div className="hero-left">
        <h4>India’s Most Reliable Packing Services</h4>
        <p>Packing or Unpacking Rental services that fit your budget!</p>
      </div>

      <section className="container slider-section">
        <div className="slider-container">
          <Slider {...settings}>
            {sliderData.map(item => (
              <div key={item.id}>
                <div className="slider-left">
                  <img src={item.logo} alt={item.brandName} />
                  <div className="slider-right">
                    <h3>{item.brandName}</h3>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <div className="display-form">
        <Form activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div>
        <video className='video-main' ref={videoRef} autoPlay loop muted>
          <source src={moversonly} type="video/mp4" />
        </video>
      </div>


      <div className="outer-main-div">
        <h4>Services We Offer</h4>
        <div className="outer-div">
          <div className={`inner-div ${activeItem === 1 ? 'active' : ''}`} onClick={() => { handleClick(1) }}>
            <h6>Upto 25% off</h6>
            <img src={logos} alt="" />
            <p>Within City</p>
          </div>
          <div className={`inner-div ${activeItem === 2 ? 'active' : ''}`} onClick={() => { handleClick(2) }}>
            <h6>Upto 25% off</h6>
            <img src={location} alt="" />
            <p>Out of City</p>
          </div>
          <div className={`inner-div ${activeItem === 3 ? 'active' : ''}`} onClick={() => { handleClick(3) }}>
            <h6>Upto 25% off</h6>
            <img src={driver} alt="" />
            <p>City Tempo</p>
          </div>
          <div className={`inner-div ${activeItem === 4 ? 'active' : ''}`} onClick={() => { handleClick(4) }}>
            <h6>Upto 25% off</h6>
            <img src={truck} alt="" />
            <p>Vehicle Shifting</p>
          </div>
        </div>
      </div>




      <section>
        <div className="outer-main-div mt-4">
          <h4>How it Works?</h4>
          <div className="main-inner-work">
            <div className="inner-work">
              <img src={work4} alt="" />
              <div className="work-text">
                <h6>Tell us about your shifting needs.</h6>
                <p>Please let us know where and when you would like to relocate.</p>
              </div>
            </div>
            <div className="inner-work">
              <img src={work2} alt="" />
              <div className="work-text">
                <h6>Get a Free Instant Quote Now</h6>
                <p>Obtain the best quote for your relocation right away, guaranteed.</p>
              </div>
            </div>
            <div className="inner-work">
              <img src={work3} alt="" />
              <div className="work-text">
                <h6>Assign a High-Quality Service Specialist</h6>
                <p>For your movement, a qualified service specialist will be assigned to ensure a safe relocation.</p>
              </div>
            </div>
            <div className="inner-work">
              <img src={work1} alt="" />
              <div className="work-text">
                <h6>Leave the Heavy Lifting to Us</h6>
                <p>Take pleasure in hassle-free, timely delivery of your household items.</p>
              </div>
            </div>
            <div className="inner-images">
              <img src={image2} alt="" />
              <img src={image1} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="outer-main-div mt-4">
          <h4>Why GoodRich's Packers and Movers in Bangalore?</h4>
          <div className="main-inner-work">
            <div className="inner-work-images">
              <img src={image3} alt="" />
              <div className="work-text">
                <h6>Guaranteed Lowest Price</h6>
                <p>Moving at a cost you can afford: we will match any quote from a rival company.

</p>
              </div>
            </div>
            <div className="inner-work-images">
              <img src={image4} alt="" />
              <div className="work-text">
                <h6>Top-Rated Services</h6>
                <p>Reliable and Safe Moving and Packing Services</p>
              </div>
            </div>
            <div className="inner-work-images">
              <img src={image5} alt="" />
              <div className="work-text">
                <h6>Replan your move at any time.</h6>
                <p>Change the shift's date to accommodate your schedule.</p>
              </div>
            </div>
            <div className="inner-work-images">
              <img src={image6} alt="" />
              <div className="work-text">
                <h6>Supporting Assistance</h6>
                <p>Committed help to ensure prompt resolution of inquiries</p>
              </div>
            </div>

            <div className="inner-work-images">
              <img src={image7} alt="" />
              <div className="work-text">
                <h6>Expert Labor</h6>
                <p>packing and relocating your possessions with skill</p>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section>
        <div className="outer-main-div mt-4">
          <h4>Service Comparison</h4>

          <div>
            <Table responsive="sm" className="main-tables">
              <thead>
                <tr>

                  <th className="text-light-grey">Services</th>
                  <th className="text-light-grey">Local Packers & Movers</th>
                  <th className="text-light-grey">Packers & Movers</th>

                </tr>
              </thead>
              <tbody>
                <tr className="main-table">

                  <td className='table-head'>Vehicle Assurance</td>
                  <td className='text-center '><FontAwesomeIcon icon={faCheck} /></td>
                  <td className='text-center'><FontAwesomeIcon icon={faCheck} /></td>




                </tr>

                <tr className="main-table">
                  <td className='table-head'>Free Loading and Unloading Time</td>
                  <td className='text-center'><FontAwesomeIcon icon={faXmark} /></td>
                  <td className='text-center'><FontAwesomeIcon icon={faCheck} /></td>

                </tr>
                <tr className="main-table">

                  <td className='table-head'>On-Time Pickup</td>
                  <td className='text-center'><FontAwesomeIcon icon={faXmark} /></td>
                  <td className='text-center'><FontAwesomeIcon icon={faCheck} /></td>



                </tr>
                <tr className="main-table">

                  <td className='table-head'>Verified Professional Driver</td>
                  <td className='text-center'><FontAwesomeIcon icon={faXmark} /></td>

                  <td className='text-center'><FontAwesomeIcon icon={faCheck} /></td>




                </tr>
                <tr className="main-table">

                  <td className='table-head'>On-Demand Additional Helper</td>
                  <td className='text-center'><FontAwesomeIcon icon={faXmark} /></td>
                  <td className='text-center'><FontAwesomeIcon icon={faCheck} /></td>




                </tr>
                <tr className="main-table">

                  <td className='table-head'>Free Rescheduling</td>
                  <td className='text-center'><FontAwesomeIcon icon={faXmark} /></td>
                  <td className='text-center'><FontAwesomeIcon icon={faCheck} /></td>




                </tr>
                <tr className="main-table">

                  <td className='table-head'>Support Assistance</td>
                  <td className='text-center'><FontAwesomeIcon icon={faXmark} /></td>
                  <td className='text-center'><FontAwesomeIcon icon={faCheck} /></td>


                </tr>
              </tbody>
            </Table>
          </div>

        </div>
      </section>



      <section>
        <div className="outer-main-div mt-4">
          <div className="main-inner-work">
            <div className="inner-work-images">
              <div className="work-text">
                <h4>Best Packers and Movers in Bangalore</h4>

                <p>
                  Looking for the best Packers and Movers in Bangalore? Look no further than GoodRich Packers and Movers. With years of experience and a commitment to customer satisfaction, we offer top-notch relocation services tailored to your needs. Whether it's local or long-distance, residential or commercial, trust us to handle your move with care and efficiency. </p>
              </div>
            </div>
            <div className="inner-work-images">
              <div className="work-text">
                <h4>What are GoodRich Packing And Moving Services In Bangalore</h4>
                <p>With a team of experienced professionals, we ensure safe and timely transportation of your belongings, whether it's local or long-distance. From packing delicate items to loading and unloading, we handle everything with care and precision. Trust GoodRich for a hassle-free moving experience in Bangalore.</p>
              </div>
            </div>
            <div className="inner-work-images">
              <div className="work-text">
                <h6>Domestic Best Packers and Movers in Bangalore:</h6>
                <p> The GoodRich packers and movers house shifting services in Bangalore are among the greatest and most reliable, and they offer relocation services throughout India. We'll design a plan that takes into account your time, money, and the size and quantity of the items. Please contact us if you want relocation assistance..</p>
              </div>
            </div>
            <div className="inner-work-images">
              <div className="work-text">
                <h6>Office Shifting Best Packers And Movers Nearby Bangalore:  </h6>
                <p>Easy to use and convenient are the commercial moving services offered by GoodRich Packers and Movers in Bangalore. Serving all of India, we are Bangalore's top packers and movers for homes and businesses. Your whole inventory of premium office supplies will be securely moved to the new location by our staff.</p>
              </div>
            </div>
            <div className="inner-work-images">
              <div className="work-text">
                <h6>Intercity Packers and Movers in Bangalore:</h6>
                <p> The Bangalore-based GoodRich house relocating business moves people all throughout India. Relocation to Bangalore is GoodRich Packers & Movers' area of expertise. They are part of a national network of packers and movers in both rural and metropolitan areas.</p>
              </div>
            </div>

            <div className="inner-work-images">
              <div className="work-text">
                <h6>Intercity Packers and Movers in Bangalore:Reliable Interstate Home Shifting Packers and Movers in Bangalore:</h6>
                <p>One of the best and most well-known businesses in India providing domestic and international moving services is GoodRich. We will create a strategy that considers your available resources, the project's cost, and the quantity and dimensions of the objects that need to be relocated.</p>
              </div>
            </div>

            <div className="inner-work-images">
              <div className="work-text">
                <h4>How the home shifting services in Bangalore of GoodRich Packers and Movers make moving easier for you?</h4>
                <p>1. **Comprehensive Packing Services**: GoodRich Packers and Movers offer comprehensive packing solutions tailored to your specific needs. From delicate items to bulky furniture, their experienced team ensures everything is packed securely using high-quality materials, reducing the risk of damage during transit. <br />

                  2. **Efficient Loading and Unloading**: With GoodRich, the burden of heavy lifting is lifted off your shoulders. Their skilled professionals handle the loading and unloading process with precision and efficiency, ensuring your belongings are safely transported to your new home in Bangalore. <br />

                  3. **Safe Transportation**: GoodRich Packers and Movers prioritize the safety of your belongings during transit. Equipped with modern vehicles and advanced logistics, they guarantee timely and secure transportation of your possessions to your new destination in Bangalore. <br />

                  4. **Customized Solutions**: GoodRich understands that every move is unique, which is why they offer customized solutions tailored to your requirements. Whether you're moving within Bangalore or across the country, they work closely with you to plan and execute a seamless relocation process. <br />

                  5. **Post-Move Support**: GoodRich doesn't just stop at delivering your belongings. They also provide post-move support, including unpacking services to help you settle into your new home effortlessly. Their dedicated team remains available to address any concerns or issues you may have even after the move is complete, ensuring your peace of mind throughout the entire process.</p>
              </div>
            </div>

            <div className="inner-work-images">
              <div className="work-text">
                <h4>An overview of the Bangalore packers and movers quotation</h4>
                <p>Since every person has different shifting needs, the cost for your particular needs will vary based on how many and what kind of stuff you need to move. Furthermore, you'll discover that GoodRich moving and packing services in Bangalore are the best accessible at the lowest cost when compared to other logistics businesses.</p>
                <p>
                  Welcome to GoodRich Packers and Movers, your trusted partner for hassle-free relocation solutions in Bangalore. Our summary of packers and movers quotation in Bangalore encapsulates transparent pricing and comprehensive services tailored to your needs.Our quotes, which prioritize fairness and clarity, provide a thorough cost breakdown, guaranteeing there are no unpleasant surprises down the road. Our knowledgeable staff takes care and professionalism in handling every part of your relocation, from loading and packing to transporting and unpacking. You can rely on GoodRich Packers and Movers for dependable and reasonably priced relocation services in Bangalore, supported by years of experience in the field and satisfied clients.</p>
              </div>
            </div>

            <div className="inner-work-images">
              <div className="work-text">
                <h4>Benefits of Using GoodRich's Packing & Moving Services in Bangalore</h4>
                <h5> Why GoodRich Packers and Movers are the Best in Bangalore</h5>
                <h6>GoodRich Packers And Movers Services In Bangalore Provides Relocation Services From Door To Door:</h6>
                <p> When you hire movers door-to-door, they pack everything at your house and relocate it to your new location. Whether you're traveling across state lines or the entire country, door-to-door service is vital. Door-to-door delivery becomes even more crucial in remote locations and on less used routes, where you most likely won't be able to rely on local transit to bring your things from the roads to your address.</p>
              </div>
            </div>
            <div className="inner-work-images">
              <div className="work-text">
                <h6>GoodRich Home Shifting Service In Bangalore’s Packing Is Impeccable:</h6> <p>You won't have to worry about any damage if your products are properly packed for transit. In the end, the people will have to solve the problems. Errors are always possible when other people are involved. Because of the meticulous packaging, you would be safe in the event that such an error occurred.</p>
              </div>
            </div>
            <div className="inner-work-images">
              <div className="work-text">
                <h6>GoodRich House Shifting Services In Bangalore Provide Transport, Loading, And Unloading Services: </h6> <p>The tension of packing and unloading your stuff might be reduced by hiring seasoned packers and movers. The movers supply their own labor force, trained in safe and efficient methods of lifting and moving large, heavy, and irregularly shaped objects like wardrobes and double-door refrigerators.</p>
              </div>
            </div>
            <div className="inner-work-images">
              <div className="work-text">
                <h6>Bangalore's GoodRich Local Movers and Packers Services This Is An Feature That Saves Time And Effort:</h6> <p>There's more to moving than merely moving your furniture and boxes when you decide to move. Hiring movers and packers with experience is a great way to save time and effort because they will take care of everything for you, safely and efficiently. As the big moving day approaches, you can concentrate on the numerous other tasks that must be completed in advance.</p>
              </div>
            </div>



            <div className="work-text">
              <h4>A Quick Cost Analysis Of GoodRich Home Shifting Services In Bangalore</h4>
              <h5>Table-1</h5>
              <div className="table-container">
                <h5>
                  Based on BHK Type
                </h5>
                <Table bordered hover>
                  <thead>
                    <tr>
                      <th>BHK TYPE</th>
                      <th>APPROX. COST (INR)*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 BHK</td>
                      <td>6,090/- to 7,590/-</td>
                    </tr>
                    <tr>
                      <td>1 RK</td>
                      <td>5,250/- to 6,750/-</td>
                    </tr>
                    <tr>
                      <td>2 BHK</td>
                      <td>8,925/- to 11,425/-</td>
                    </tr>
                    <tr>
                      <td>3 BHK</td>
                      <td>13,650/- to 17,150/-</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="2">
                      *Please take note that the price may change based on the volume of items that need to be moved.
                      </td>
                    </tr>
                  </tfoot>
                </Table>
              </div>

            </div>
          </div>

          <div className="inner-work-images">
            <div className="work-text">
              <h4>The Nearest Packers and Movers in Bangalore – GoodRich Dispenses With Insurance</h4>
              <p>For those seeking the nearest packers and movers in Bangalore, GoodRich Packers and Movers offer unparalleled services backed by insurance coverage. We guarantee our clients a smooth relocation experience by being dedicated to excellence. Our team of adept experts manages all facets of the relocation with accuracy and consideration, encompassing packing, transporting, and unpacking. Our clients may rest easy knowing that their possessions are protected during the entire procedure because insurance protection is in place. For an assured, hassle-free moving experience in Bangalore, put your trust in GoodRich Packers and Movers.</p>
            </div>

          </div>
          <div className="inner-work-images">
            <div className="work-text">
              <h4>Conclusion</h4>
              <p>
              Finally, with unshakable commitment and professionalism, GoodRich Packers and Movers provides a complete solution for all of your relocation needs. Every facet of our services, from careful packaging to secure delivery and effective unpacking, demonstrates our dedication to quality. Having worked in the field for many years, we have a solid reputation for dependability, timeliness, and client satisfaction. Your possessions will be handled with the utmost care and attention by our team of skilled professionals, who will make sure they arrive at their destination promptly and safely. Throughout the moving process, we put your belongings' safety and protection first as a fully certified and insured firm.

                At GoodRich Packers and Movers, we understand that moving can be a stressful experience, which is why we strive to make it as smooth and hassle-free as possible for our clients. Our transparent pricing and clear communication ensure that you know exactly what to expect every step of the way. Whether you are moving locally within Bangalore or across long distances, you can rely on GoodRich Packers and Movers to provide you with personalized, reliable, and efficient relocation services. Trust us with your move, and let us take the stress out of your next relocation journey.</p>
            </div>

          </div>


        </div>

      </section>

    </>
  )
}

export default Left
import React ,{useState} from 'react';
import image1 from '../Assets/image3.webp';
import image2 from '../Assets/image4.webp';
import image3 from '../Assets/image1.webp';
import image4 from '../Assets/image22.webp';
import Form from '../Form/Form'

const Packing = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className='Service-header'>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-5 col-sm-5 form-design sticky">
            <Form  activeTab={activeTab} setActiveTab={setActiveTab}/>
          </div>
          <div className="col-md-7 mt-2 col-sm-7">
            <h2><strong>Services </strong><span style={{ fontWeight: 400 }}>of Goodrich Packers and Movers Bangalore!</span></h2>
            <p>Goodrich Packers and Movers in Bangalore is one of the competent packing and moving services providers. <strong>Having worked in this sector for eighteen years, we have received numerous honors and recognitions. We have received recognition from organizations such as the India Cargo Award, Value Creator Award, Environmental Conservation Award, and Road Transportation Award.</strong><span style={{ fontWeight: 400 }}> Your trusted partner in relocation solutions. With a legacy of excellence spanning years, we pride ourselves on delivering top-notch packing and moving services tailored to your needs. Our dedicated team of professionals is committed to ensuring a seamless transition for your belongings, whether it's across the street or across the country. At GoodRich, we prioritize efficiency, reliability, and customer satisfaction, making us your go-to choice for all your packing and moving needs in Bangalore. Trust us to move you forward.
            </span></p>
            <h3>Reasons To Choose Goodrich Packers and Movers In Bangalore!</h3>
            <p>
              Looking for a seamless relocation experience in Bangalore? Choose GoodRich Packers and Movers for unparalleled service and expertise. With years of industry experience, we offer tailored solutions to meet your specific needs. Our team of trained professionals ensures careful handling of your belongings, providing utmost safety and security throughout the process. From packing to transportation and unpacking, we handle it all with precision and efficiency. Trust GoodRich Packers and Movers for a stress-free move, ensuring your belongings reach their destination intact and on time. Experience the difference with us!</p>
            <p>
              When it comes to relocating in Bangalore, GoodRich Packers and Movers stands out for several compelling reasons. Our commitment to customer satisfaction is unmatched, as evidenced by our track record of successful moves and positive testimonials. We prioritize transparency, offering fair and competitive pricing with no hidden fees or surprises. With state-of-the-art equipment and vehicles, we ensure smooth and secure transportation of your belongings. Our dedicated customer support team is always available to address any concerns or queries you may have, providing peace of mind throughout the relocation process. Choose GoodRich Packers and Movers for a seamless, hassle-free moving experience in Bangalore.</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <img src={image3} className="img-fluid" />
          </div>
          <div className="col-md-6 col-sm-6">
            <img src={image4} className="img-fluid" />
          </div>
        </div>
      </div>


      <div className="container mt-4 ">
        <div className="row">
          <div className="col-md-8 col-sm-12 pull-left packing-content">
            <h1 className="title">Welcome to Goodrich packers and movers Bangalore</h1>
            <p className="description">"Welcome to GoodRich Packers and Movers Bangalore! We are your trusted partners in seamless relocation services. With our commitment to excellence, professionalism, and care, we ensure a stress-free moving experience for you. Welcome aboard!"</p>
            <h2 className="sub-title">Why Goodrich Movers and Packers is the best in Bangalore</h2>
            <p className="description">
            For a number of reasons, GoodRich Packers and Movers is a top option in Bangalore. With years of experience, we put the needs of our clients first by offering relocation solutions that are dependable, economical, and efficient. Our staff is made up of knowledgeable experts that take the highest care with your possessions. We provide specialized services made to fit each person's needs, guaranteeing a hassle-free moving experience. Put your trust in GoodRich Packers and Movers for a smooth relocation process in Bangalore..</p>
            <p className="description">GoodRich Packers and Movers leads the pack in Bangalore due to our commitment to excellence. We boast state-of-the-art equipment, modern techniques, and a dedication to timely delivery. Our transparent pricing and attention to detail set us apart, earning us trust and loyalty from our clients. With a focus on reliability and integrity, we consistently surpass expectations, making us the preferred choice for all moving needs in Bangalore.</p>
            <p className="description">Bangalore's top-ranked company, GoodRich Packers and Movers, is known for providing unparalleled professionalism and service quality. Our knowledgeable staff handles your belongings with accuracy and care to facilitate smooth transitions. We take great satisfaction in consistently producing excellent products while being on time and efficient. For a dependable, stress-free moving experience that sets the bar in Bangalore, choose GoodRich Packers & Movers.
</p>
          </div>
          <div className="col-md-4 col-sm-12 pull-left">
            <img src={image1} className="img-fluid packing-image" alt="Image 1" />
            <img src={image2} className="img-fluid packing-image" alt="Image 2" />
          </div>
        </div>
      </div>

      <div className="container mt-4 ">
        <div className="row">
          <div className="col-md-12 col-sm-12  packing-content">
            <div className="container cost-table-container">
              <h2>Packers and Movers Cost Calculation</h2>
              <table className="cost-table">
                <thead>
                  <tr>
                    <th>Local Shifting</th>
                    <th>Approximate Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 BHK House shifting</td>
                    <td>Rs 5,000 to Rs 9,000</td>
                  </tr>
                  <tr>
                    <td>2 BHK House shifting</td>
                    <td>Rs 9,000 to Rs 12,000</td>
                  </tr>
                  <tr>
                    <td>3 BHK House shifting</td>
                    <td>Rs 12,000 to Rs 18,000</td>
                  </tr>
                  <tr>
                    <td>4 BHK House shifting</td>
                    <td>Rs 16,000 to Rs 22,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

export default Packing;

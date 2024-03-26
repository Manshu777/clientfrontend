import React, { useState, useEffect ,   } from 'react';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import logopop from '../Assets/login-pnm.webp'
import { Checkmark } from 'react-checkmark'


import { faXmark, faPhone, faUser, faBuilding } from '@fortawesome/free-solid-svg-icons';


const Form = ({ activeTab, setActiveTab }) => {
    // const [activeTab, setActiveTab] = useState(1);
    const [loading, setLoading] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const [cityTempo, setCityTempo] = useState('');
    const [shiftingfrom, setShiftingfrom] = useState('');
    const [shiftingto, setShiftingto] = useState('');
    const [sourcecity, setSourcecity] = useState('');
    const [destinationcity, setDestinationcity] = useState('');
    const [pickUpLocation, setPickUpLocation] = useState('');
    const [dropOffLocation, setDropOffLocation] = useState('');
    const [shiftTime, setShiftTime] = useState('');
    const [acceptInvitation, setAcceptInvitation] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [vehicleshiftingfrom, setVehicleshiftingfrom] = useState('');
    const [vehicleshiftingto, setVehicleshiftingto] = useState('');
    const [filteredDistrictscity, setFilteredDistricts] = useState([]);
    const [filtercitiesto, setfiltercitiesto] = useState([]);
    const [filtercitiesfrom, setfiltercitiesfrom] = useState([]);
    const [filtercitiesout, setfiltercitiesout] = useState([]);
    const [filtercitiesdest, setfiltercitiesdest] = useState([]);
    const [filtercitiestemp, setfiltercitiestemp] = useState([]);
    const [filtercitiestempfrom, setfiltercitiestempfrom] = useState([]);
    const [filtercitiestempto, setfiltercitiestempto] = useState([]);
    const [filtercitiestemplast, setfiltercitiestemplast] = useState([]);

    const [filtercitiestemplasta, setfiltercitiestemplasta] = useState([]);
    const [handlesubmitted, setHandlesubmitted] = useState(false);


    const [storeDistricks, setStoreDistricks] = useState();




   
    useEffect(() => {
        const fetchData = async () => {
          try {
           
            const requestBody = {
                "country": "India"
              };
      
    
          
            const response = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json', 
                },
                body: JSON.stringify(requestBody), 
              });
            const jsData = await response.json()
              console.log(jsData.data)
              setStoreDistricks(jsData.data)
    
            
    
         
          } catch (error) {
          
            
          }
        };
    
       
        fetchData();
    
      
        
      }, []); 






    const handleInputChange = (e) => {
        const selectedCity = e.target.value;
        setSelectedCity(selectedCity);
          
           

        if (selectedCity.trim() !== '') {
            const filteredDistrictscity = storeDistricks.filter(district =>
                district.toLowerCase().startsWith(selectedCity.toLowerCase())
            );
        
          setFilteredDistricts(filteredDistrictscity)
        } else {
            setFilteredDistricts([]);
        }   
    };

    const handleInputTOChange = (e) => {
        const selectedCity = e.target.value;
        
           setShiftingfrom(selectedCity)
           

        if (selectedCity.trim() !== '') {
            const filteredDistrictscity = storeDistricks.filter(district =>
                district.toLowerCase().startsWith(selectedCity.toLowerCase())
            );
        
            setfiltercitiesto(filteredDistrictscity)
        } else {
            setfiltercitiesto([]);
        }   
    };

    const handleInputFromChange = (e) => {
        const selectedCity = e.target.value;
        
        setShiftingto(selectedCity)
           

        if (selectedCity.trim() !== '') {
            const filteredDistrictscity = storeDistricks.filter(district =>
                district.toLowerCase().startsWith(selectedCity.toLowerCase())
            );
        
            setfiltercitiesfrom(filteredDistrictscity)
        } else {
            setfiltercitiesfrom([]);
        }   
    };

    const handleInputOutChange = (e) => {
        const selectedCity = e.target.value;
        
        setSourcecity(selectedCity)
           

        if (selectedCity.trim() !== '') {
            const filteredDistrictscity = storeDistricks.filter(district =>
                district.toLowerCase().startsWith(selectedCity.toLowerCase())
            );
        
            setfiltercitiesout(filteredDistrictscity)
        } else {
            setfiltercitiesout([]);
        }   
    };

    const handleInputDestChange = (e) => {
        const selectedCity = e.target.value;
        
        setDestinationcity(selectedCity)
           

        if (selectedCity.trim() !== '') {
            const filteredDistrictscity = storeDistricks.filter(district =>
                district.toLowerCase().startsWith(selectedCity.toLowerCase())
            );
        
            setfiltercitiesdest(filteredDistrictscity)
        } else {
            setfiltercitiesdest([]);
        }   
    };

    const handleInputTempoChange = (e) => {
        const selectedCity = e.target.value;
        
        setCityTempo(selectedCity)
           

        if (selectedCity.trim() !== '') {
            const filteredDistrictscity = storeDistricks.filter(district =>
                district.toLowerCase().startsWith(selectedCity.toLowerCase())
            );
        
            setfiltercitiestemp(filteredDistrictscity)
        } else {
            setfiltercitiestemp([]);
        }   
    };


    const handleInputTempssChange = (e) => {
        const selectedCity = e.target.value;
        
        setPickUpLocation(selectedCity)
           

        if (selectedCity.trim() !== '') {
            const filteredDistrictscity = storeDistricks.filter(district =>
                district.toLowerCase().startsWith(selectedCity.toLowerCase())
            );
        
            setfiltercitiestempfrom(filteredDistrictscity)
        } else {
            setfiltercitiestemp([]);
        }   
    };

    const handleInputTempsToChange = (e) => {
        const selectedCity = e.target.value;
        
        setDropOffLocation(selectedCity)
           

        if (selectedCity.trim() !== '') {
            const filteredDistrictscity = storeDistricks.filter(district =>
                district.toLowerCase().startsWith(selectedCity.toLowerCase())
            );
        
            setfiltercitiestempto(filteredDistrictscity)
        } else {
            setfiltercitiestempto([]);
        }   
    };
   
    const handleInputTempsTolastChange = (e) => {
        const selectedCity = e.target.value;
        
        setVehicleshiftingfrom(selectedCity)
           

        if (selectedCity.trim() !== '') {
            const filteredDistrictscity = storeDistricks.filter(district =>
                district.toLowerCase().startsWith(selectedCity.toLowerCase())
            );
        
            setfiltercitiestemplast(filteredDistrictscity)
        } else {
            setfiltercitiestemplast([]);
        }   
    };

    const handleInputTempsTolastChangea = (e) => {
        const selectedCity = e.target.value;
        
        setVehicleshiftingto(selectedCity)
           

        if (selectedCity.trim() !== '') {
            const filteredDistrictscity = storeDistricks.filter(district =>
                district.toLowerCase().startsWith(selectedCity.toLowerCase())
            );
        
            setfiltercitiestemplasta(filteredDistrictscity)
        } else {
            setfiltercitiestemplasta([]);
        }   
    };



    useEffect(() => {
        if (submitted) {
            document.body.classList.add('popup-open');
        } else {
            document.body.classList.remove('popup-open');
        }

        // Cleanup function to remove the class when component unmounts
        return () => {
            document.body.classList.remove('popup-open');
        };
    }, [submitted]);

    const handleSelectOption = (district) => {
        setSelectedCity(district);
        setFilteredDistricts([]);
     
    };


    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const handleButton = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = {
            name,
            phoneNumber,
            selectedCity,
            cityTempo,
            shiftingfrom,
            shiftingto,
            sourcecity,
            destinationcity,
            pickUpLocation,
            dropOffLocation,
            shiftTime,
            acceptInvitation,
            vehicleshiftingfrom,
            vehicleshiftingto
        };
       
        const filteredFormData = Object.fromEntries(
            Object.entries(formData).filter(([_, value]) => value !== '')
        );

        try {
            const response = await fetch('https://cudeupload.onrender.com/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(filteredFormData)

            });

            if (!response.ok) {
                throw new Error('Failed to submit form');


            }

            setHandlesubmitted(true)
            
    

            console.log(name,
                phoneNumber,
                selectedCity,
                cityTempo,
                shiftingfrom,
                shiftingto,
                sourcecity,
                destinationcity,
                pickUpLocation,
                dropOffLocation,
                shiftTime,
                acceptInvitation,
                vehicleshiftingfrom,
                vehicleshiftingto)
                
            setName('')
            setPhoneNumber('')
            setSelectedCity('')
            setCityTempo('')
            setShiftingfrom('')
            setShiftingto('')
            setSourcecity('')
            setDestinationcity('')
            setPickUpLocation('')
            setDropOffLocation('')
            setShiftTime('')
            setAcceptInvitation('')
            setVehicleshiftingfrom('')
            setVehicleshiftingto('')

        } catch (error) {
            console.error('Error submitting form:', error.message);
            // Handle error, show error message to the user, etc.
        } finally {
            setLoading(false); // Reset loading state after form submission completes
        }
        
    }

   const handleSubmit = (event) => {
    event.preventDefault();
    
    // Set submitted state to true
    setSubmitted(true);

    setHandlesubmitted(false);

  
};


    return (
        <>
            <div className="col-md-12 hero-right">
                <div className='form-main'>
                    <h5>Where are you going to relocate?</h5>
                    <div className="tabs-main">
                        <div className="tabs">
                            <button onClick={() => handleTabChange(1)} className={activeTab === 1 ? 'active' : ''}>Within City</button>
                            <button onClick={() => handleTabChange(2)} className={activeTab === 2 ? 'active' : ''}>Out of City </button>
                            <button onClick={() => handleTabChange(3)} className={activeTab === 3 ? 'active' : ''}>City Tempo</button>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {activeTab === 1 && (
                            <div>
                                <div>
                                    <label>Enter your City</label>
                                    <div style={{ position: 'relative' }}>
                                        <FontAwesomeIcon icon={faBuilding} style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)' }} />
                                        <div className="city-option">

                                            <input
                                                type="text"
                                                value={selectedCity}
                                                onChange={handleInputChange}
                                                placeholder="City"
                                                required
                                                style={{ paddingLeft: '30px' }}
                                            />
                                            <ul>
                                                {filteredDistrictscity.map((district, index) => {

                                                    return (
                                                        <li key={index} onClick={() => handleSelectOption(district)}>
                                                            {district}
                                                        </li>
                                                    );
                                                })}

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* setShiftingfrom(e.target.value) */}
                                <div>
                                    <div>
                                        <label>Enter your Locality</label>
                                        <div style={{ position: 'relative' }}>
                                            
                                            <FontAwesomeIcon icon={faLocationDot} style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)' }} />
                                            <div className="city-option">

                                            
                                            <input className='input-text'
                                                type="text"
                                                value={shiftingfrom}
                                                onChange={(e) => handleInputTOChange(e)}
                                                placeholder='Shifting from'
                                                required
                                                style={{ paddingLeft: '30px' }}
                                            />
                                            <ul className='list_style'>
                                                {filtercitiesto.map((district, index) => {

                                                    return (
                                                        <li key={index} onClick={() => {setShiftingfrom(district); setfiltercitiesto([]);}}>
                                                            {district}
                                                        </li>
                                                    );
                                                })}

                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ position: 'relative' }}>
                                            <FontAwesomeIcon icon={faLocationDot} style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)' }} />
                                            <div className="city-option">
                                            <input
                                                type="text"
                                                value={shiftingto}
                                                onChange={(e) => handleInputFromChange(e)}
                                                placeholder='Shifting to'
                                                required
                                                style={{ paddingLeft: '30px' }}
                                            />
                                            <ul className='list_style'>
                                                {filtercitiesfrom.map((district, index) => {

                                                    return (
                                                        <li key={index} onClick={() => { setShiftingto(district); setfiltercitiesfrom([]);}}>
                                                            {district}
                                                        </li>
                                                    );
                                                })}

                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 2 && (
                            <div>
                                <div>

                                    <label>Enter your City</label>
                                    <div style={{ position: 'relative' }}>

                                        <FontAwesomeIcon icon={faLocationDot} style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)' }} />
                                        <div className="city-option">
                                        <input type="text" 
                                        value={sourcecity} 
                                        
                                        onChange={(e) => handleInputOutChange(e)} 
                                        placeholder='Enter Source City' 
                                        style={{ paddingLeft: '30px' }} 
                                        required />
                                         <ul className='list_style'>
                                                {filtercitiesout.map((district, index) => {

                                                    return (
                                                        <li key={index} onClick={() => { setSourcecity(district); setfiltercitiesout([]);}}>
                                                            {district}
                                                        </li>
                                                    );
                                                })}

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ position: 'relative' }}>

                                        <FontAwesomeIcon icon={faLocationDot} style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)' }} />
                                        <div className="city-option">
                                        <input type="text" value={destinationcity} 
                                        onChange={(e) => handleInputDestChange(e)} 
                                        placeholder='Enter Destination City' 
                                        style={{ paddingLeft: '30px' }} 
                                        required />
                                        <ul className='list_style'>
                                                {filtercitiesdest.map((district, index) => {

                                                    return (
                                                        <li key={index} onClick={() => { setDestinationcity(district); setfiltercitiesdest([]);}}>
                                                            {district}
                                                        </li>
                                                    );
                                                })}

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label>Select Shifting Date</label>


                                    <input type="datetime-local" value={shiftTime} onChange={(e) => setShiftTime(e.target.value)} placeholder='Shifting Date' required />
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" checked={acceptInvitation} onChange={(e) => setAcceptInvitation(e.target.checked)} />
                                        I’m flexible on my shifting date
                                    </label>
                                </div>
                            </div>
                        )}
                        {activeTab === 3 && (
                            <div>
                                <div>
                                    <label>Enter your City</label>
                                    <div style={{ position: 'relative' }}>
                                        <FontAwesomeIcon icon={faBuilding} style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)' }} />
                                        <div className="city-option">

                                            <input
                                                type="text"
                                                value={cityTempo}
                                                onChange={(e) => handleInputTempoChange(e)} required
                                                placeholder="City"
                                                style={{ paddingLeft: '30px' }}
                                            />

                                              <ul className='list_style'>
                                                {filtercitiestemp.map((district, index) => {

                                                    return (
                                                        <li key={index} onClick={() => { setCityTempo(district); setfiltercitiestemp([]);}}>
                                                            {district}
                                                        </li>
                                                    );
                                                })}

                                            </ul>

                                        </div>
                                    </div>
                                </div>
                               
                                <div>

                                    <label>Enter your Locality</label>
                                    <div style={{ position: 'relative' }}>

                                        <FontAwesomeIcon icon={faLocationDot} style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)' }} />
                                        <div className="city-option">
                                        <input type="text" value={pickUpLocation} 
                                        onChange={(e) => handleInputTempssChange(e)} 
                                        placeholder='Pickup from' 
                                        style={{ paddingLeft: '30px' }} 
                                        required />
                                         <ul className='list_style'>
                                                {filtercitiestempfrom.map((district, index) => {

                                                    return (
                                                        <li key={index} onClick={() => { setPickUpLocation(district); setfiltercitiestempfrom([]);}}>
                                                            {district}
                                                        </li>
                                                    );
                                                })}

                                            </ul>

                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div style={{ position: 'relative' }}>
                                        <FontAwesomeIcon icon={faLocationDot} style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)' }} />

                                        <div className="city-option">
                                        <input type="text" 
                                        value={dropOffLocation} 
                                        
                                        onChange={(e) => handleInputTempsToChange(e)} 
                                        placeholder='Drop at' 
                                        style={{ paddingLeft: '30px' }} 
                                        required />
                                         <ul className='list_style'>
                                                {filtercitiestempto.map((district, index) => {

                                                    return (
                                                        <li key={index} onClick={() => { setDropOffLocation(district); setfiltercitiestempto([]);}}>
                                                            {district}
                                                        </li>
                                                    );
                                                })}

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}
                        {activeTab === 4 && (
                            <div>


                                <label>Enter your Locality</label>
                                <div style={{ position: 'relative' }}>

                                    <FontAwesomeIcon icon={faLocationDot} style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)' }} />
                                    <div className="city-option">
                                    <input type="text" 
                                    value={vehicleshiftingfrom} 
                                    onChange={(e) => handleInputTempsTolastChange(e)} 
                                    placeholder='Shifting from' 
                                    style={{ paddingLeft: '30px' }} 
                                    required />

                                                <ul className='list_style'>
                                                {filtercitiestemplast.map((district, index) => {

                                                    return (
                                                        <li key={index} onClick={() => { setVehicleshiftingfrom(district); setfiltercitiestemplast([]);}}>
                                                            {district}
                                                        </li>
                                                    );
                                                })}

                                            </ul>

                                    </div>
                                </div>


                                <div>
                                    <div style={{ position: 'relative' }}>
                                        <FontAwesomeIcon icon={faLocationDot} style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)' }} />

                                        <div className="city-option">
                                        <input type="text" 
                                        value={vehicleshiftingto} 
                                        onChange={(e) => handleInputTempsTolastChangea(e)} 
                                        placeholder='Shifting To' 
                                        style={{ paddingLeft: '30px' }} 
                                        required />
                                        <ul className='list_style'>
                                                {filtercitiestemplasta.map((district, index) => {

                                                    return (
                                                        <li key={index} onClick={() => { setVehicleshiftingto(district); setfiltercitiestemplasta([]);}}>
                                                            {district}
                                                        </li>
                                                    );
                                                })}

                                            </ul>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}
                        <button type="submit">Continue</button>
                    </form>
                    {submitted && (
                        <div className="popup">
                        
                            <div className="popup-content">
                                <div className='pop-img'>
                                    <img src={logopop} alt="" />
                                </div>
                                <div className="pop-right">

                                    <span className='cross-icon' onClick={() => setSubmitted(false)}><FontAwesomeIcon icon={faXmark} /></span>
                                    <div className="">
                                        <h4>Enter mobile number to continue</h4>
                                        <p>Never shared, never spammed.</p>
                                    </div>

                                    <div className="pop-right-text">
                                        <div className="pop-right-input">
                                            <div style={{ position: 'relative' }}>
                                                <FontAwesomeIcon icon={faUser} style={{ position: 'absolute', left: '16px', top: '49%', color: 'rgb(84 75 75)' }} />

                                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' required />

                                            </div>

                                            <div>
                                                <div style={{ position: 'relative' }}>
                                                    <FontAwesomeIcon icon={faPhone} style={{ position: 'absolute', left: '16px', top: '49%', color: 'rgb(84 75 75)' }} />

                                                    <input
                                                        type="tel"
                                                        placeholder="Enter your phone number"
                                                        value={phoneNumber}
                                                        onChange={(event) => setPhoneNumber(event.target.value)}
                                                        required 
                                                        onKeyDown={(e) => {
                                                            if (!((e.keyCode > 95 && e.keyCode < 106) || (e.keyCode > 47 && e.keyCode < 58) || e.keyCode === 8)) {
                                                                e.preventDefault();
                                                            }
                                                        }} 

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pop-right-btn">
    <button className='pop-button' onClick={handleButton} disabled={loading}>
        {loading ? <div className="loader"></div> : 'Submit'}
    </button>
</div>
                                        </div>
                                        {handlesubmitted && (

                                            <div className="message-check">
                                                <span>  <Checkmark size='20px' color='green' /></span>
                                                <p> Thanks for submitting! </p>

                                            </div>

                                        )}
                                        <div className="hr-line"></div>
                                    

                                </div>
                            </div>
                        </div>
                    )}


                </div>
            </div>

        </>
    );
};

export default Form;

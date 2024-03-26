import React, {useState} from 'react'
import Form from '../Form/Form';
import banner from '../Assets/faceless.webp'
import './Page.css'

export const MyBooking = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <div className="booking-main">
               <div className="booking-img">
               <img src={banner} alt="" />
               </div>
                <div className="text-align">
                    <div><Form  activeTab={activeTab} setActiveTab={setActiveTab}/></div>
                </div>
            </div>

        </>
    )
}


export default MyBooking
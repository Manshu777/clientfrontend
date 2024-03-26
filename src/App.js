// App.js
import React from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar'

import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';
import { MyBooking } from './components/Pages/MyBooking';
import Packing from './components/Service/Packing';
import Transportation from './components/Service/Transportation';
import Roadways from './components/Service/Roadways';
import Loading from './components/Service/Loading';
import WareHouse from './components/Service/WareHouse';
import Corporate from './components/Service/Corporate';
import Local from './components/Service/Local';
import Policy from './components/Pages/Policy';
import Terms from './components/Pages/Terms';

const App = () => {
  return (
    <div className='app-main'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<MyBooking />} />
        <Route path="/services" element={<Service />} />
        <Route path="/packing-services" element={<Packing />} />
        <Route path="/moving-services" element={<Roadways />} />
        <Route path="/domestic-shifting" element={<Roadways />} />
        <Route path="/office-goods-shifting" element={<Transportation />} />
        <Route path="/home-shifting" element={<WareHouse />}/>
        <Route path="/loading" element={<Loading />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/local" element={<Local />} />

        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;

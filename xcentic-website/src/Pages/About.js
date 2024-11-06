import React from 'react';
import ParticlesContainer from '../Components/ParticlesContainer';
import Footer from '../Components/Footer';
import './Home.css'; 
import AppDev from '../Components/AppDev';
import AboutSection from '../Components/AboutSection';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function AppDevelopment() {
  return (
      <div className='homepage'>
          <ParticlesContainer id="particles" />
          <AboutSection />
          <Footer />
          {/* Other components */}
      </div>
  );
}

export default AppDevelopment;
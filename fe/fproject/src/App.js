import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/nav/Navbar';
import MyLogo from './components/logo/Logo';
import MyFooter from './components/footer/myfooter';
import CentralContainer from './components/midContainer/container';
import NewsCarousel from './components/myCentralCarousel.js/carousel'; // Modifica qui

function App() {
  return (
    <>
      <MyLogo />
      <MyNavbar />
      <NewsCarousel /> 
      <CentralContainer />
      <MyFooter />
    </>
  );
}

export default App;




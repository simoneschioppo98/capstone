import React from 'react';
import MyLogo from '../logo/Logo';
import MyNavbar from '../nav/Navbar';
import MyFooter from '../footer/myfooter';
import MeteoContainer from '../WeatherContainer/meteoContainer';

function MyWeatherPage() {
  return (
    <>
      <MyLogo/>
      <MyNavbar/>
      <MeteoContainer/>
      <MyFooter/>
    </>
  );
}

export default MyWeatherPage;

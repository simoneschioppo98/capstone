import React from 'react';
import './flightinfo.css';


function FlightInfo({ data }) {
  // Estrai le informazioni desiderate dai dati della chiamata API
  const flightStatus = data?.flightStatuses;
  const departureAirport = data?.appendix?.airports?.[0]?.name;
  const arrivalAirport = data?.appendix?.airports?.[1]?.name;

  return (
    <div className='oro'>
      <h2>Flight Information</h2>
      <p className='cazzo'>Flight Status: {flightStatus}</p>
      <p>Departure Airport: {departureAirport}</p>
      <p>Arrival Airport: {arrivalAirport}</p>
    </div>
  );
}

export default FlightInfo;

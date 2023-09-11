import React from 'react';
import './flightinfo.css';

function FlightInfo({ data }) {
  // Estrai le informazioni desiderate dai dati della chiamata API
  const flightStatus = data?.flightStatuses[0]?.status;
  const departureAirport = data?.appendix?.airports?.[0]?.name;
  const arrivalAirport = data?.appendix?.airports?.[1]?.name;
  const topFlightNumber = data?.flightStatuses[0]?.carrierFsCode;
  const bottomFlightNumber = data?.flightStatuses[0]?.flightNumber;
  const middleDeparture = data?.flightStatuses[0]?.departureAirportFsCode;
  const middleArrival = data?.flightStatuses[0]?.arrivalAirportFsCode;


  
  // Funzione per determinare lo stato del volo
  let statusText;

  switch (flightStatus) {
    case "L":
      statusText = "Landed";
      break;
    case "A":
      statusText = "In Air";
      break;
    case "S":
      statusText = "Scheduled";
      break;
    default:
      statusText = "Not Departed";
      break;
  }

  return (
     <div className='results'>
      <div className='top-info'>
        <div className='first-info'>
        <span>{topFlightNumber}</span>
        {bottomFlightNumber ? <span>{bottomFlightNumber}</span> : <span>Numero del volo non disponibile</span>}
        </div>
        <div className='middle-info'>
            <span>{middleDeparture}</span>
            <span>{middleArrival}</span>
        </div>
        <div className='status'>
        <p className={`status ${flightStatus === 'L' ? 'status-landed' : flightStatus === 'A' ? 'status-in-air' : flightStatus === 'S' ? 'status-scheduled' : ''}`}>
            Status: {statusText}
        </p>

        </div>
      </div>
      <p className='cazzo'>Status: {statusText}</p>
      <p>Departure Airport: {departureAirport}</p>
      <p>Arrival Airport: {arrivalAirport}</p>
    </div>
      
  );
}

export default FlightInfo;



import React from 'react';
import './flightinfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

function FlightInfo({ data }) {
  // Estrai le informazioni desiderate dai dati della chiamata API
  const flightStatus = data?.flightStatuses[0]?.status;
  const departureAirport = data?.appendix?.airports?.[1]?.name;
  const arrivalAirport = data?.appendix?.airports?.[0]?.name;
  const topFlightNumber = data?.flightStatuses[0]?.carrierFsCode;
  const bottomFlightNumber = data?.appendix?.airlines[0]?.name;
  const middleDeparture = data?.flightStatuses[0]?.departureAirportFsCode;
  const middleArrival = data?.flightStatuses[0]?.arrivalAirportFsCode;
  const departureDate = data?.flightStatuses[0]?.departureDate.dateLocal;
  const actualDeparture = data?.flightStatuses[0]?.operationalTimes?.actualGateDeparture.dateLocal;
  const arrivalDate = data?.flightStatuses[0]?.arrivalDate.dateLocal;
  const actualArrival = data?.flightStatuses[0]?.operationalTimes?.actualGateArrival.dateLocal;


  
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
        <span className='first-text'>{topFlightNumber}</span>
        {bottomFlightNumber ? <span>{bottomFlightNumber}</span> : <span>Numero del volo non disponibile</span>}
        </div>
        <div className='middle-info'>
            <span>{middleDeparture}</span>
            <FontAwesomeIcon icon={faPlane} />
            <span>{middleArrival}</span>
        </div>
        <div className='status'>
        <p className={`status ${flightStatus === 'L' ? 'status-landed' : flightStatus === 'A' ? 'status-in-air' : flightStatus === 'S' ? 'status-scheduled' : ''}`}>
            Status: {statusText}
        </p>
        </div>
      </div>
      <hr/>
      <div className='left'>
        <span className='detail-info'>Departure</span>
      <p className='airport-info'>{departureAirport}</p>
        <div className='flight-times'>
            <div className='flight-time'>
              <p>scheduled</p>
              <span>{departureDate}</span>
            </div>
            <div className='flight-time'>
              <p>actual</p>
              <span>{actualDeparture}</span>
            </div>
        </div>
      </div>
      <div className='right'>
        <span className='detail-info'>Arrival</span>
      <p  className='airport-info'>{arrivalAirport}</p>
      <div className='flight-times'>
            <div className='flight-time'>
              <p>scheduled</p>
              <span>{arrivalDate}</span>
            </div>
            <div className='flight-time'>
              <p>actual</p>
              <span>{actualArrival}</span>
            </div>
        </div>
      </div>
    </div>
      
  );
}

export default FlightInfo;



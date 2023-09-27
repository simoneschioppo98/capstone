import React, { useState, useEffect } from "react";
import './correctContainer.css';

function CorrectContainer(props) {
  // Destructuring per ottenere i dati del volo dalle props
  const { flightData } = props;

  // Stato per salvare i dati del volo
  const [savedFlightData, setSavedFlightData] = useState([]);

  // Funzione di callback per ricevere i dati del volo salvati da FlightInfo
  const handleSaveFlightData = () => {
    // Leggi i dati dal localStorage
    const storedFlightData = localStorage.getItem('flightData');
    return storedFlightData ? JSON.parse(storedFlightData) : null;
  };

  useEffect(() => {
    // Leggi i dati salvati dal localStorage all'avvio del componente
    const savedData = handleSaveFlightData();
    if (savedData) {
      // Aggiungi i dati al tuo array di savedFlightData
      setSavedFlightData([savedData]);
      console.log([savedData])
    }
  }, []); // L'array vuoto [] indica che questa chiamata useEffect verrà eseguita solo una volta, all'avvio del componente.

  return (
    <div className="profile-div">
      {savedFlightData.map((flight, index) => (
        <div key={index} className='saved-response'>
            <div className="up-info">
            <div className="inner-top-info">
                <p>flight</p>
                <span>{flight.request.airline.requestedCode},</span>
                <span>{flight.flightStatuses[0].flightNumber}</span>
            </div>
            <div className="inner-top-info">
                <p>Route</p>
                <span>{flight.flightStatuses[0].departureAirportFsCode} -> </span>
                <span>{flight.flightStatuses[0].arrivalAirportFsCode}</span>
            </div>
            </div>
            <h5>Departure Details</h5>
            <hr/>
            <div className="mid-info">
                <table>
                    <tbody>
                        <tr>
                            <td>Departure</td>
                            <td>{flight.appendix.airports[1].name}</td>
                        </tr>
                        <tr>
                            <td>Departure Date</td>
                            <td>{flight.flightStatuses[0].departureDate.dateUtc}</td>
                        </tr>
                        <tr>
                            <td>Scheduled Departure</td>
                            <td>{flight.flightStatuses[0].operationalTimes.estimatedGateDeparture.dateUtc}</td>
                        </tr>
                        <tr>
                            <td>Actual Departure</td>
                            <td>{flight.flightStatuses[0].operationalTimes.actualGateDeparture.dateUtc}</td>
                        </tr>
                        <tr>
                            <td>Terminal</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Gate</td>
                            <td>{flight.flightStatuses[0].airportResources.departureGate}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h5>Arrivals Details</h5>
            <div className="last-info">
            <table>
                    <tbody>
                        <tr>
                            <td>Arrive</td>
                            <td>{flight.appendix.airports[0].name}</td>
                        </tr>
                        <tr>
                            <td>Arrival Date</td>
                            <td>{flight.flightStatuses[0].arrivalDate.dateUtc}</td>
                        </tr>
                        <tr>
                            <td>Scheduled Arrival</td>
                            <td>{flight.flightStatuses[0].operationalTimes.estimatedGateArrival.dateUtc}</td>
                        </tr>
                        <tr>
                            <td>Actual Arrival</td>
                            <td>{flight.flightStatuses[0].operationalTimes.actualGateArrival.dateUtc}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>{flight.flightStatuses[0].schedule.status}</td>
                        </tr>
                        <tr>
                            <td>Gate</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      ))}
    </div>
  );
}

export default CorrectContainer;





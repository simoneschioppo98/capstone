import React, { useState } from 'react';
import './flight.css';
import FlightInfo from '../flightInfo.js/flightInfoContainer';

function FlightSearch() {
  const [carrier, setCarrier] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [date, setDate] = useState('');
  const [flightData, setFlightData] = useState(null);

  const getFlightInfo = () => {
    // Controlla che tutti i campi siano compilati
    if (!carrier || !flightNumber || !date) {
      alert('Compila tutti i campi prima di effettuare la ricerca.');
      return;
    }

    let formattedDate = date.replace("-", "/");
    formattedDate = formattedDate.replace("-", "/");
    console.log(formattedDate);

    fetch(`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${carrier}/${flightNumber}/arr/2023/09/09?appId=5a041ee5&appKey=642da6f80725f2a9b647e91775784030&utc=false`, {
      method: "GET",
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Errore nella richiesta');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setFlightData(data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className="central">
      <div className="inner-container">
        <input
          type="text"
          placeholder='Carrier (e.g AA)'
          value={carrier}
          onChange={e => setCarrier(e.target.value)}
        />
        <input
          type="text"
          placeholder='Flight Number'
          value={flightNumber}
          onChange={e => setFlightNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder='Date (YYYY-MM-DD)'
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>
      <button onClick={getFlightInfo}>Search Flight</button>
      {flightData && (
        <div>
          <FlightInfo/>
        </div>
      )}
    </div>
  );
}

export default FlightSearch;

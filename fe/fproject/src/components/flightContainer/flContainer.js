import React, { useState } from 'react';
import './flight.css';
import FlightInfo from '../flightInfo.js/flightInfoContainer';
import axios from 'axios'; 


// funzione per la ricerca dei voli
function FlightSearch() {
  const [carrier, setCarrier] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [date, setDate] = useState('');
  const [flightData, setFlightData] = useState(null);

  // conditional per una corretta compilazione del form
  const getFlightInfo = () => {
    if (!carrier || !flightNumber || !date) {
      alert('Compila tutti i campi prima di effettuare la ricerca.');
      return;
    }
  
    // formattazione data NB:viene usata la formattazione della data perchè altrimenti non ritornerebbero bene i dati all'utente
    let formattedDate = date.replace("-", "/");
    formattedDate = formattedDate.replace("-", "/");
    console.log(formattedDate);

    // chiamata get con axios definendo i componenti carrier,flightnumber e formatteDate per una corretta risposta da parte dell'url e dell'API
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${carrier}/${flightNumber}/arr/${formattedDate}?appId=5a041ee5&appKey=642da6f80725f2a9b647e91775784030&utc=false`)
      .then(response => {
        console.log(response.data);
        setFlightData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };


  // contenitore con il form principale e il pulsante per cercare i voli scelti
  return (
    <div className="central">
      <div className='introduction'>
          <h1>FullStackSky</h1>
          <p>Flightracker veloce e intuitivo per non perdere nessun volo! </p>
      </div>
      <div className='medium-container'>
        <div className="inner-container">
          <input className='field'
            type="text"
            placeholder='Carrier (e.g AA)'
            value={carrier}
            onChange={e => setCarrier(e.target.value)}
          />
          <input className='field'
            type="text"
            placeholder='Flight Number'
            value={flightNumber}
            onChange={e => setFlightNumber(e.target.value)}
          />
          <input className='field'
            type="text"
            placeholder='Date (YYYY-MM-DD)'
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <button className='button' onClick={getFlightInfo}>Search Flight</button>
        </div>
      </div>
      {flightData && (
        <div className='response-div'>
          <FlightInfo data={flightData} />
        </div>
      )}
    </div>
  );
}

export default FlightSearch;

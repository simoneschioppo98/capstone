import React, { useState } from 'react';
import './flight.css';
import FlightInfo from '../flightInfo.js/flightInfoContainer';
import axios from 'axios'; // Importa Axios

function FlightSearch() {
  const [carrier, setCarrier] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [date, setDate] = useState('');
  const [flightData, setFlightData] = useState(null);

  const getFlightInfo = () => {
    if (!carrier || !flightNumber || !date) {
      alert('Compila tutti i campi prima di effettuare la ricerca.');
      return;
    }

    let formattedDate = date.replace("-", "/");
    formattedDate = formattedDate.replace("-", "/");
    console.log(formattedDate);

    axios.get(`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${carrier}/${flightNumber}/arr/${formattedDate}?appId=5a041ee5&appKey=642da6f80725f2a9b647e91775784030&utc=false`)
      .then(response => {
        console.log(response.data);
        setFlightData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="central">
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

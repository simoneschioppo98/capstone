import React, { useState } from 'react';
import './flight.css';
import axios from 'axios';

function FlightSearch() {
        const [airportName , setAirportName] = useState('')
        const getFlightInfo = () => {
          axios.get('http://api.aviationstack.com/v1/flights?access_key=061edb78b491ed015082d47701395cfe')
          .then(res =>{
            console.log(res.data)
          }).catch(err => {
            console.log('request error');
          })
        }

  return (
    <div className="central">
      <div className="inner-container">
        <input
        type="text"
        placeholder='Airlines (e.g ITA AIRWAYS)'
        />
           <input
        type="text"
        placeholder='Airport Name'
        />
           <input
        type="date"
        />
      </div>
      <button onClick={getFlightInfo}>Search Flight</button>
    </div>
  );
}

export default FlightSearch;

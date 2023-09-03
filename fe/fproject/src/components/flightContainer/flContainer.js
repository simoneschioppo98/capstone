import React, { useState } from 'react';
import './flight.css';

function FlightSearch() {
  const [companyName, setCompanyName] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="central">
      <div className="inner-container">
        <form className="airline" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Airlines (e.g. ITA AIRWAYS)"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Flight Number (e.g. UA2402)"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
          />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <button type="submit">Search Flight</button>
        </form>
      </div>
    </div>
  );
}

export default FlightSearch;

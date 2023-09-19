import React, { useState, useEffect } from "react";
import './weatherContainer.css';
import axios from "axios";
import MeteoStatus from "../meteoResponse/meteoInfo";

function MeteoContainer() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getMeteoInfo = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0a9433c5f8afc8a2e802c91678a55eb8`)
      .then(response => {
        console.log(response.data);
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="meteo-container">
      <div className="form">
        <input
          type='text'
          placeholder="choose location"
          value={cityName}
          onChange={e => setCityName(e.target.value)}
        />
        <button onClick={getMeteoInfo}>Search Informations</button>
        <button>C</button>
        <button>F</button>
      </div>
      <div className="meteo-status-container">
        {weatherData && <MeteoStatus data={weatherData} />}
      </div>
    </div>
  );
}

export default MeteoContainer;


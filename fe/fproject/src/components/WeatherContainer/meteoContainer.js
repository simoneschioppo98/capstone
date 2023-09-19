// MeteoContainer.js
import React, { useState, useEffect } from "react";
import './weatherContainer.css';
import axios from "axios";
import MeteoStatus from "../meteoResponse/meteoInfo";
import {Switch} from 'antd';

function MeteoContainer() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [temperatureScale, setTemperatureScale] = useState("Celsius");

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

  const toggleTemperatureScale = () => {
    if (temperatureScale === "Celsius") {
      setTemperatureScale("Fahrenheit");
    } else {
      setTemperatureScale("Celsius");
    }
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
        <button onClick={getMeteoInfo} className="info-button">Search Informations</button>
        <Switch
          checkedChildren="C"
          unCheckedChildren="F"
          checked={temperatureScale === "Celsius"}
          onChange={toggleTemperatureScale}
        />
      </div>
      <div className="meteo-status-container">
        {weatherData && (
          <MeteoStatus
            data={weatherData}
            temperatureScale={temperatureScale}
          />
        )}
      </div>
    </div>
  );
}

export default MeteoContainer;




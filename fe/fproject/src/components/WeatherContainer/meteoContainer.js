import React, { useState } from "react";
import './weatherContainer.css'
import axios from "axios";

function MeteoContainer() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getMeteoInfo = () => {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=0a9433c5f8afc8a2e802c91678a55eb8`)
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
      <input
        type='text'
        placeholder="choose location"
        value={cityName}
        onChange={e => setCityName(e.target.value)}
      />
      <button onClick={getMeteoInfo}>cazzoculo</button>

      {weatherData && (
        <div>
         
        </div>
      )}
    </div>
  );
}

export default MeteoContainer;

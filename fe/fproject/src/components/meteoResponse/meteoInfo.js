
import React from "react";
import "./meteoResponse.css";
import SkyClearDay from "../statimeteo/sole.jpg";
import SkyClearNight from "../statimeteo/notte.jpg";
import SkyCloudyDay from "../statimeteo/nuvoloso.jpg";
import SkyCloudyNight from "../statimeteo/nottenuvolosa.jpg";
import RainyDay from "../statimeteo/pioggia.jpg";


function MeteoStatus({ data, temperatureScale }) {
  const name = data.name;
  const countryLocation = data.sys.country;
  // funzione per convertire i gradi da kelvin a celsius//
  const tempKelvin = data.main.temp;
  let realTemp = tempKelvin - 273.15;
  let realFeelTemp = data.main.feels_like - 273.15;
// conditional state per convertire poi i gradi celsius in farheneit
  if (temperatureScale === "Fahrenheit") {
    realTemp = (tempKelvin - 273.15) * 9/5 + 32;
    realFeelTemp = (data.main.feels_like - 273.15) * 9/5 + 32;
  }

  realTemp = Math.ceil(realTemp);
  realFeelTemp = Math.ceil(realFeelTemp);
  // variabili d'uso per stabilire il sorgere e calare del sole (valore dato dall'api key in millisecondi e trasformato in secodni moltiplicando per 1000)
  const sunriseTime = data.sys.sunrise;
  const sunriseSecondTime = new Date(sunriseTime * 1000);
  const sunsetTime= data.sys.sunset;
  const sunsetSecondTime = new Date(sunsetTime * 1000);
  //variabile pressione
  const initialPressure = data.main.pressure;
  // variabile per le icone dinamiche
  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
  // variabile per definire umidità
  const humidity = data.main.humidity;
  // formattazione data odierna,utile anche per la formattazione del sorgere e calare del sole
  const oggi = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dataOdierna = oggi.toLocaleDateString('it-IT', options);
  const realSunriseTime = sunriseSecondTime.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
  const realSunseTime = sunsetSecondTime.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });  
  const tempMinKelvin = data.main.temp_min;
  let realTempMin = tempMinKelvin - 273.15;
  let tempMaxKelvin = data.main.temp_max;
  let realTempMax = tempMaxKelvin - 273.15;
// conditional per passaggio da celsius a farheneit per la temperatura percepita massima e minima
  if (temperatureScale === "Fahrenheit") {
    realTempMin = (tempMinKelvin - 273.15) * 9/5 + 32;
    realTempMax = (tempMaxKelvin - 273.15) * 9/5 + 32;
  }

  realTempMin = Math.ceil(realTempMin);
  realTempMax = Math.ceil(realTempMax);
  //variabile per definire la visbilità
  const visibility = data.visibility;
  const realVisibility = visibility / 1000 ; // conversione centimetri in kilometri
// switch case usato per inviare loghi dinamici in base allo stato del tempo(cartella statimeteo)
  const getBackgroundImage = () => {
    switch (icon) {
      case "01d":
        return `url(${SkyClearDay})`;
      case "01n":
        return `url(${SkyClearNight})`;
      case "02d":
        return `url(${SkyCloudyDay})`;
      case "02n":
        return `url(${SkyCloudyNight})`;
      case "04d":
        return `url(${SkyCloudyDay})`;
      case "04n":
        return `url(${SkyCloudyNight})`;
      case "10d":
      case "10n":
        return `url(${RainyDay})`;
      default:
        return "";
    }
  };
// funzione per cambiare stile alle immagini di sfondo dinamiche
  const backGroundStyle = {
    backgroundImage: getBackgroundImage(),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="section-container">
    <div className="main-section" style={backGroundStyle}>
      <div className="current-condition">
        <div className="header-condition">
          <h1>{name},{countryLocation}</h1>
          <span>{dataOdierna}</span>
        </div>
      </div>
      <div className="mid-condition" >
        <div className="weather-details">
          <span>{realTemp}°{temperatureScale === "Fahrenheit" ? "F" : "C"}</span>
          <p>temperatura percepita: {realFeelTemp}°{temperatureScale === "Fahrenheit" ? "F" : "C"}</p>
          <p>MIN: {realTempMin}°{temperatureScale === "Fahrenheit" ? "F" : "C"}/MAX: {realTempMax}°{temperatureScale === "Fahrenheit" ? "F" : "C"}</p>
        </div>
        <div className="icon-condition">
          <img src={iconUrl} alt="immagine dinamica meteo" />
        </div>
      </div>
    </div>
    <div className="lower-section">
      <div className="today-details">
          <div className="today-city-informations">
              <h2>il meteo di oggi a {name}</h2>
          </div>
          <div className="mid-information">
            <div className="sun-info">
            <span class="material-symbols-outlined">water_lux</span>
             <span>{realSunriseTime}</span>
             <span class="material-symbols-outlined">wb_twilight</span>
             <span>{realSunseTime}</span>
            </div>
          </div>
          <div className="last-details">
              <div className="inner-details">
              <span class="material-symbols-outlined">compress</span>
                <p>pressione atmosferica</p>
                <span>{initialPressure} Pa</span>
              </div>
              <div className="inner-details">
              <span class="material-symbols-outlined">humidity_percentage</span>
                <p>umidità</p>
                <span>{humidity} %</span>
              </div>
              <div className="inner-details">
              <span class="material-symbols-outlined">visibility</span>
                <p>visbilità</p>
                <span>{realVisibility}KM</span>
              </div>
          </div>
      </div>

    </div>
    </div>
  );
}

export default MeteoStatus;

import React from "react";
import "./meteoResponse.css";
import SkyClearDay from "../statimeteo/sole.jpg";
import SkyClearNight from "../statimeteo/notte.jpg";
import SkyCloudyDay from "../statimeteo/nuvoloso.jpg";
import SkyCloudyNight from "../statimeteo/nottenuvolosa.jpg";
import RainyDay from "../statimeteo/pioggia.jpg";



function MeteoStatus({ data }) {
  const name = data?.name;
  const countryLocation = data?.sys?.country;
  const temp = data?.main?.temp;
  const realTemp = Math.ceil(temp - 273.15);
  const feelTemp = data?.main?.feels_like;
  const realFeelTemp = Math.ceil(feelTemp - 273.15);
  const icon = data?.weather[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
  const oggi = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dataOdierna = oggi.toLocaleDateString('it-IT', options);
  const tempMin = data?.main?.temp_min;
  const realTempMin = Math.ceil((tempMin - 273.15));
  const tempMax = data?.main?.temp_max;
  const realTempMax = Math.ceil((tempMax - 273, 15));

  const getBackgroundImage = () =>{
    switch (icon){
      case "01d":
        return `url(${SkyClearDay})`;
      case "01n":
        return `url(${SkyClearNight})`
      case "02d":
        return `url(${SkyCloudyDay})`;
      case "02n":
        return `url(${SkyCloudyNight})`;
        case "04d":
          return `url(${SkyCloudyDay})`;
        case "04n":
          return `url(${SkyCloudyNight})`;
      case "10d":
        return `url(${RainyDay})`;
      case "10n":
        return `url(${RainyDay})`;
    }
  };

  const backGroundStyle = {
    backgroundImage : getBackgroundImage(),
    backgroundSize : "cover",
    backgroundRepeat : "no-repeat",
  };

  return (
    <div className="main-section" style={backGroundStyle}>
      <div className="current-condition">
        <div className="header-condition">
          <h1>{name},{countryLocation}</h1>
          <span>{dataOdierna}</span>
        </div>
      </div>
      <div className="mid-condition" >
        <div className="weather-details">
          <span>{realTemp}°C</span>
          <p>temperatura percepita:{realFeelTemp}°C</p>
          <p>MIN:{realTempMin}°/MAX:{realTempMax}°</p>
        </div>
        <div className="icon-condition">
          <img src={iconUrl} alt="immagine dinamica meteo" />
        </div>
      </div>
    </div>
  );
}

export default MeteoStatus;

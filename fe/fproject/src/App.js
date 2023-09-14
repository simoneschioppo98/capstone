import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch , Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstPage from './components/FirstPage/firstPage';
import MyWeatherPage from './components/WeatherPage/weatherPage';


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/'element={<FirstPage/>}/>
        <Route path = '/meteo' element={<MyWeatherPage/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;




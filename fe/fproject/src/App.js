import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstPage from './components/FirstPage/firstPage';
import MyWeatherPage from './components/WeatherPage/weatherPage';
import MyProfilePage from './components/profilePage/profilePage';
import LoginAcces from './components/profilecontainer/login';
import CorrectProfilePage from './components/profilePage/correctProfilePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<FirstPage />} />
          <Route path='/meteo' element={<MyWeatherPage />} />
          <Route path='/profilo' element={<MyProfilePage />} />
          <Route path = '/login' element={<LoginAcces/>}/>
          <Route path = '/correctProfile' element={<CorrectProfilePage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;






import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/nav/Navbar';
import MyLogo from './components/logo/Logo';
import MyFooter from './components/footer/myfooter';
import CentralContainer from './components/midContainer/container';


function App() {
  return (
      <>
      <MyLogo/>
      <MyNavbar />
      <CentralContainer/>
      <MyFooter/>
      </>
  );
}

export default App;



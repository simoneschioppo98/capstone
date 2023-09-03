
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/nav/Navbar';
import MyLogo from './components/logo/Logo';
import MyFooter from './components/footer/myfooter';

function App() {
  return (
      <>
      <MyLogo/>
      <MyNavbar />
      <MyFooter/>
      </>
  );
}

export default App;



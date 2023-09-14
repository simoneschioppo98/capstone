import React , {useEffect , useState} from 'react';
import logo from './logocapstone.png';
import { useLocation } from 'react-router-dom';
import './logo.css'

function MyLogo() {
  const section = useLocation();
  const [Color, setColor] = useState('');

  useEffect(() => {
    let currentSection = section.pathname;

    if (currentSection === "/") {
      setColor(' rgb(13, 110, 253)');
    } else if (currentSection === "/meteo") {
      setColor('#FF8C00');
    } 
  }, [section]);


  return (
    <div className='logo-div' style={{ backgroundColor: Color }} >
      <img src={logo} alt="Logo" className='logo-edit' />
    </div>
  );
}

export default MyLogo;

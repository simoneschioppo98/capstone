import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./footer.css"; 

function MyFooter() {
  const section = useLocation();
  const [color, setColor] = useState('');
  
  useEffect(() => {
    let currentSection = section.pathname;

    if (currentSection === "/") {
      setColor('rgb(13, 110, 253)');
    } else if (currentSection === "/meteo") {
      setColor('#FF8C00');
    };
  }, [section]);

  return (
    <footer className="footer-color" style={{ backgroundColor: color }}>
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><a href="/chi-siamo">Chi siamo</a></li>
            <li><a href="/servizi">Servizi</a></li>
            <li><a href="/contatti">Contatti</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <p>Indirizzo: Via Napoli, Napoli</p>
          <p>Email: simoneschioppo@icloud.com</p>
          <p><a href="https://github.com" target='_blank' rel='noopener noreferrer'><img src="github.svg" alt='GitHub Icon'/></a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 FullStackSky</p>
      </div>
    </footer>
  );
}

export default MyFooter;





import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./footer.css"; 
import { GithubOutlined } from '@ant-design/icons';

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
          <a href="https://github.com/simoneschioppo98/capstone" target="_blank">
          <GithubOutlined className="icon-style" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 FullStackSky</p>
      </div>
    </footer>
  );
}

export default MyFooter;





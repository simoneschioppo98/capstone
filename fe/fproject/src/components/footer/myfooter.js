import React, { Component } from "react";
import "./footer.css"; 



class MyFooter extends Component {
  componentDidMount() {
    const currentPage = window.location.pathname;
    let backgroundColor = "";

    if (currentPage === "/pagina1") {
      backgroundColor = "blue";
    } else if (currentPage === "/pagina2") {
      backgroundColor = "green";
    }

    this.setState({ backgroundColor });
  }

  render() {
    const { backgroundColor } = this.state || {};

    const footerClasses = `footer ${backgroundColor || ""}`;

    return (
      <footer className={footerClasses}>
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
}

export default MyFooter;



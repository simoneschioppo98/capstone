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
        <p>Questo è il mio footer</p>
      </footer>
    );
  }
}

export default MyFooter;



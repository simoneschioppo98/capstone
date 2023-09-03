import React, { Component } from "react";
import "./container.css";
import FlightSearch from "../flightContainer/flContainer";

class CentralContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mid-container">
        <FlightSearch/>
      </div>
    );
  }
}

export default CentralContainer;

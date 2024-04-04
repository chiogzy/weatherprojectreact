import React from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  return (
    <div className="weatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">℃</span>
    </div>
  );
}

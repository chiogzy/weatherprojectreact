import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">Tue</div>
          <WeatherIcon code="01d" size={36} />
          <div className="weatherForecast-temperature">
            <span className="weatherForecast-temperature-max">35°</span>
            <span className="weatherForecast-temperature-min">27°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "a710bd8bd76400c9658ef649d9e81728";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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

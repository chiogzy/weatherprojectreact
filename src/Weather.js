import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Lagos</h1>
      <ul>
        <li>Monday 08:00</li>
        <li>Partly cloudy</li>
      </ul>{" "}
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partialy Cloudy"
          />
          33℃
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:0%</li>
            <li>Humidity:63%</li>
            <li>Wind:14km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

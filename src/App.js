import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>WeatherApp</h1>
        <Weather />
        <p>
          This code was created by{" "}
          <a href="https://github.com/chiogzy" target="_blank" rel="noreferrer">
            Chioma Oguogho
          </a>
          and it is{" "}
          <a
            href="https://github.com/chiogzy/weatherprojectreact"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;

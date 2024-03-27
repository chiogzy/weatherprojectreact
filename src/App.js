import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/chiogzy"
              target="_blank"
              rel="noreferrer"
            >
              Chioma Oguogho{" "}
            </a>
            and is on{" "}
            <a
              href="https://github.com/chiogzy/previousweather-react"
              target="_blank"
              rel="noreferrer"
            >
              GitHub{" "}
            </a>
            and{" "}
            <a
              href="https://musical-llama-76f8d4.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import SearchBar from "./SearchBar";
import Summary from "./Summary";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <SearchBar />
            <Summary defaultCity="Brisbane" />
            <Forecast />
          </div>
          <small>
            This weather app is{" "}
            <a
              href="https://github.com/codingpaige/shecodes-react-weatherapp"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>{" "}
            & coded by Paige.
          </small>
        </div>
      </header>
    </div>
  );
}

export default App;

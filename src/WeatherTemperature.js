import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="temperature">
        <span className="temp-value">{Math.round(props.celsius)}</span>
        <span className="temp-metrics">°C | </span>
        <span className="temp-metrics">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        <span className="temp-value">{Math.round(fahrenheit())}</span>
        <span className="temp-metrics">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          |{" "}
        </span>
        <span className="temp-metrics">°F</span>
      </div>
    );
  }
}

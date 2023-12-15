import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="temperature">
      <span className="temp-value">{Math.round(props.celsius)}</span>
      <span className="temp-metrics">°C</span>
    </div>
  );
}

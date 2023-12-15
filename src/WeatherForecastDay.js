import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function weatherIconCode() {
    let iconCode = props.data.weather[0].icon;
    return `${iconCode}`;
  }

  function forecastDay() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return `${days[day]}`;
  }
  return (
    <div className="WeatherForecastDay">
      <div className="weather-forecast-day">{forecastDay()}</div>
      <WeatherIcon code={weatherIconCode()} width={40} />
      <span className="weather-forecast-temp-max">{maxTemperature()}°</span>
      <span className="weather-forecast-temp-min"> {minTemperature()}°</span>
    </div>
  );
}

import React from "react";

export default function Summary() {
  let weatherData = {
    city: "Brisbane",
    temperature: 35,
    imgUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    date: "Sunday 4:00pm",
    humidity: 62,
    wind: 24,
    description: "Mostly Cloudy",
  };
  return (
    <div className="container">
      <div className="results-for-city">
        <span className="results">Results for:</span>
        <span className="city-name">
          <strong>{weatherData.city}</strong>
        </span>
      </div>
      <br />
      <br />
      <div className="row summary-section">
        <div className="col-7">
          <div className="d-flex current-weather-icon">
            <img
              id="weather-icon"
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="temp-value">{weatherData.temperature}</div>
            <span className="temp-metrics">°C</span>
            <ul>
              <div className="humidity-wind">
                <li>
                  Humidity:{" "}
                  <span className="humidity">{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span className="wind">{weatherData.wind}</span>km/h
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="col-5">
          <div className="weather-overview">
            <ul>
              <li>
                <span className="weather-heading">Weather</span>
              </li>
              <li>
                <span className="day-and-time">{weatherData.date}</span>
              </li>
              <li>
                <span className="weather-description">
                  {weatherData.description}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

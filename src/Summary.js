import React, { useState } from "react";
import axios from "axios";

export default function Summary() {
  let [loaded, setLoaded] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function handleSearch(response) {
    console.log(response.data);
    setLoaded(true);
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (loaded) {
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
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="temp-value">
                {Math.round(weatherData.temperature)}
              </div>
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
                  <span className="day-and-time">Wednesday 08:00</span>
                </li>
                <li>
                  <span className="weather-description text-capitalize">
                    {weatherData.description}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `3980a7c8f2a782241a093131b099f993`;
    let city = "Brisbane";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSearch);

    return "Loading...";
  }
}

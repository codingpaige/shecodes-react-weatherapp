import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="results-for-city">
        <span className="results">Results for:</span>
        <span className="city-name">
          <strong>{props.data.city}</strong>
        </span>
      </div>
      <br />
      <br />
      <div className="row summary-section">
        <div className="col-7">
          <div className="d-flex current-weather-icon">
            <img
              id="weather-icon"
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />
            <div className="temp-value">
              {Math.round(props.data.temperature)}
            </div>
            <span className="temp-metrics">°C</span>
            <ul>
              <div className="humidity-wind">
                <li>
                  Humidity:{" "}
                  <span className="humidity">{props.data.humidity}</span>%
                </li>
                <li>
                  Wind: <span className="wind">{props.data.wind}</span>
                  km/h
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
                <span className="day-and-time">
                  <FormattedDate date={props.data.date} />
                </span>
              </li>
              <li>
                <span className="weather-description text-capitalize">
                  {props.data.description}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

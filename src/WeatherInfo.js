import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
        <div className="col-8">
          <div className="d-flex current-weather-icon">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
            <ul>
              <div className="humidity-wind">
                <li>
                  <span className="humidity">
                    Humidity: {Math.round(props.data.humidity)}%
                  </span>
                </li>
                <li>
                  <span className="wind">
                    Wind: {Math.round(props.data.wind)}km/h
                  </span>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="col-4">
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

import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <div className="weather-forecast-day">Mon</div>
          <WeatherIcon code="01d" width={40} />
          <span className="weather-forecast-temp-max">12° </span>
          <span className="weather-forecast-temp-min">8°</span>
        </div>
        <div className="col-2">
          <div className="weather-forecast-day">Tue</div>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            width={42}
          />
          <span className="weather-forecast-temp-max">12° </span>
          <span className="weather-forecast-temp-min">8°</span>
        </div>
        <div className="col-2">
          <div className="weather-forecast-day">Wed</div>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            width={42}
          />
          <span className="weather-forecast-temp-max">12° </span>
          <span className="weather-forecast-temp-min">8°</span>
        </div>
        <div className="col-2">
          <div className="weather-forecast-day">Thu</div>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            width={42}
          />
          <span className="weather-forecast-temp-max">12° </span>
          <span className="weather-forecast-temp-min">8°</span>
        </div>
        <div className="col-2">
          <div className="weather-forecast-day">Fri</div>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            width={42}
          />
          <span className="weather-forecast-temp-max">12° </span>
          <span className="weather-forecast-temp-min">8°</span>
        </div>

        <div className="col-2">
          <div className="weather-forecast-day">Sat</div>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            width={42}
          />
          <span className="weather-forecast-temp-max">12° </span>
          <span className="weather-forecast-temp-min">8°</span>
        </div>
      </div>
    </div>
  );
}

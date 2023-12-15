import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "3980a7c8f2a782241a093131b099f993";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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

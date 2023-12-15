import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setLoaded(true);
    setForecast(response.data.daily);
  }
  if (loaded) {
    return (
      <div className="row">
        <div className="col-2">
          <div className="weather-forecast-day">{forecast[0].dt}</div>
          <WeatherIcon code={forecast[0].weather[0].icon} width={40} />
          <span className="weather-forecast-temp-max">
            {Math.round(forecast[0].temp.max)}°
          </span>
          <span className="weather-forecast-temp-min">
            {" "}
            {Math.round(forecast[0].temp.min)}°
          </span>
        </div>
      </div>
    );
  } else {
    let apiKey = "3980a7c8f2a782241a093131b099f993";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Please wait...";
  }
}

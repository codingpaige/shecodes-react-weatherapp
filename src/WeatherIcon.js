import React from "react";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "01d": "clear-day.svg",
    "01n": "clear-night.svg",
    "02d": "partly-cloudy.svg",
    "02n": "partly-cloudy-night.svg",
    "03d": "cloudy.svg",
    "03n": "cloudy.svg",
    "04d": "overcast-day.svg",
    "04n": "overcast-night.svg",
    "09d": "drizzle.svg",
    "09n": "drizzle.svg",
    "10d": "partly-cloudy-day-rain.svg",
    "10n": "partly-cloudy-night-rain.svg",
    "11d": "thunderstorms.svg",
    "11n": "thunderstorms.svg",
    "13d": "snow.svg",
    "13n": "snow.svg",
    "50d": "mist.svg",
    "50n": "clear-night.svg",
  };
  return (
    <img
      src={`/animatedweathericons/${codeMapping[props.code]}`}
      alt="weather icon"
      width={props.width}
    />
  );
}

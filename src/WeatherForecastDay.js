import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTempreture() {
    let tempreture = Math.round(props.data.temp.max);
    return `${tempreture}°`;
  }

  function minTempreture() {
    let tempreture = Math.round(props.data.temp.min);
    return `${tempreture}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WaeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-tempretures">
        <span className="WeatherForecast-tempreture-max">
          {maxTempreture()}
        </span>
        <span className="WeatherForecast-tempreture-min">
          {minTempreture()}
        </span>
      </div>
    </div>
  );
}

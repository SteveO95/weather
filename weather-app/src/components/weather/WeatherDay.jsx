import PropTypes from "prop-types";
import React from "react";
import { WeatherDate, WeatherDayCard, WeatherIcon } from "./WeatherDay.styled";
import { formatDate } from "../../utils";

const WeatherDay = ({ data }) => {
  const weatherType = data.weather[0].main;
  const date = formatDate(data.dt_txt);
  return (
    <WeatherDayCard>
      <WeatherDate>{date}</WeatherDate>
      <p>Температура: {data.main.temp}°C</p>
      <p>Влажность: {data.main.humidity}%</p>
      <p>Скорость ветра: {data.wind.speed} м/с</p>
      <WeatherIcon
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
        weatherType={weatherType}
      />
      <p>{data.weather[0].description}</p>
    </WeatherDayCard>
  );
};

WeatherDay.propTypes = {
  data: PropTypes.shape({
    dt_txt: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default WeatherDay;

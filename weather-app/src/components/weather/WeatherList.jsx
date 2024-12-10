import React from "react";
import WeatherDay from "./WeatherDay";
import PropTypes from "prop-types";
import { WeatherListContainer, WeatherTitle } from "./WeatherList.styled";

const WeatherList = ({ data }) => {
  const dailyForecasts = data.filter((item, index) => index % 8 === 0);

  return (
    <div>
      <WeatherTitle>Прогноз на 5 дней ☁️</WeatherTitle>
      <WeatherListContainer>
        {dailyForecasts.map((dayForecast, index) => (
          <WeatherDay key={index} data={dayForecast} />
        ))}
      </WeatherListContainer>
    </div>
  );
};

WeatherList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WeatherList;

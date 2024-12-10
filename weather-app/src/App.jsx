import React, { useState } from "react";
import { getCurrentWeather, getWeatherForecast } from "./api/weatherApi";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import Details from "./components/details/Details";
import WeatherList from "./components/weather/WeatherList";
import {
  AppWrapper,
  Contain,
  Container,
  ErrorMessage,
  Loader,
  Title,
  Wrapper,
} from "./App.styled";
import { getBackgroundColor } from "./utils";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [weekData, setWeektData] = useState(null); // Данные прогноза на 5 дней
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    try {
      const currentData = await getCurrentWeather(city);
      const week = await getWeatherForecast(city);
      if (!currentData || !week) {
        throw new Error("Некорректные данные от API");
      }
      setError(null);
      setWeatherData(currentData);
      setWeektData(week);
      console.log(city);
    } catch (err) {
      if (err.message === "Тайм-аут") {
        setError(
          "Время ожидания истекло. Проверьте соединение с интернетом или попробуйте позже."
        );
      } else if (err.name === "TypeError") {
        setError("Ошибка сети. Проверьте соединение с интернетом.");
      } else if (err.message === "Город не найден") {
        setError(
          "Город не найден. Проверьте правильность введённого названия."
        );
      } else if (err.message === "Ошибка на сервере. Попробуйте позже.") {
        setError("Ошибка на сервере. Попробуйте позже.");
      } else {
        setError(`Ошибка при запросе: ${err.message}`);
      }
      setWeatherData(null);
      setWeektData(null);
    } finally {
      setLoading(false);
    }
  };

  const weatherType = weatherData?.weather?.[0]?.main || null;

  const bgColor = getBackgroundColor(weatherType); //цвет фона

  return (
    <AppWrapper bgcolor={bgColor}>
      <Container>
        <Contain>
          <Title>Прогноз Погоды </Title>
          {/* Компонент для поиска города */}
          <SearchBar onSearch={handleSearch} />
          {loading ? <Loader /> : weekData && <Details data={weatherData} />}
        </Contain>

        <Wrapper>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          {/* Передача данных в Details */}

          {weekData && <WeatherList data={weekData.list} />}
        </Wrapper>
      </Container>
    </AppWrapper>
  );
}

export default App;

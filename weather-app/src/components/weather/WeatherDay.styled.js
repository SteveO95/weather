import styled from "styled-components";

const getWeatherGlow = (weatherType) => {
  switch (weatherType) {
    case "Clear":
      return "drop-shadow(0 0 15px rgba(255, 223, 0, 0.8))"; // Солнечный свет
    case "Clouds":
      return "drop-shadow(0 0 10px rgba(180, 180, 180, 0.6))"; // Облачное свечение
    case "Rain":
      return "drop-shadow(0 0 10px rgba(0, 100, 255, 0.8))"; // Дождливое синее свечение
    case "Thunderstorm":
      return "drop-shadow(0 0 30px #FF4500)";
    case "Snow":
      return "drop-shadow(0 0 30px #FFFFFF)";
    case "Mist":
      return "drop-shadow(0 0 30px #778899)";
    case "overcast clouds":
      return "drop-shadow(0 0 30px #8C92AC)";
    default:
      return "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))";
  }
};

export const WeatherDayCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 180px;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const WeatherDate = styled.h3`
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 10px;
`;

export const WeatherInfo = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 5px 0;

  span {
    font-weight: bold;
  }
`;

export const WeatherIcon = styled.img`
  width: 70px;
  height: 70px;

  filter: ${(props) => getWeatherGlow(props.weatherType)};
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(1.6) contrast(1.8)
      drop-shadow(0 0 30px rgba(0, 255, 255, 1));
  }
`;

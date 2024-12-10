export const getBackgroundColor = (weatherType) => {
  switch (weatherType) {
    case "Clear":
      return "#87CEEB";
    case "Clouds":
      return "#B0C4DE";
    case "Rain":
      return "#4682B4";
    case "Thunderstorm":
      return "#708090";
    case "Snow":
      return "#FFFAFA";
    case "Mist":
    case "Fog":
      return "#778899";
    default:
      return "#87CEEB"; // По умолчанию — небесно-голубой
  }
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

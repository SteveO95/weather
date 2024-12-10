import { getWeatherForecast } from "../api/weatherApi";

jest.mock("../api/weatherApi", () => ({
  getWeatherForecast: jest.fn(() =>
    Promise.resolve({
      list: [
        {
          main: { temp: 15.5 },
          wind: { speed: 3.5 },
          weather: [{ description: "clear sky" }],
        },
      ],
    })
  ),
}));

test("getWeatherForecast возвращает объект", async () => {
  const data = await getWeatherForecast("Samara");
  expect(data).toBeTruthy(); // Проверяем, что данные существуют
  expect(typeof data).toBe("object"); // Проверяем, что это объект
});

test("getWeatherForecast содержит ключи температуры и скорости ветра", async () => {
  const data = await getWeatherForecast("Samara");
  const firstDay = data.list[0]; // Проверяем первый элемент списка прогноза
  expect(firstDay).toHaveProperty("main.temp"); // Проверяем, что есть температура
  expect(firstDay).toHaveProperty("wind.speed"); // Проверяем, что есть скорость ветра
});

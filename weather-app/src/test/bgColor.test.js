import { getBackgroundColor } from "../utils";

test('getBackgroundColor возвращает правильный цвет для "Clear"', () => {
  const color = getBackgroundColor("Clear");
  expect(color).toBe("#87CEEB"); // Небесно-голубой для ясной погоды
});

test('getBackgroundColor возвращает правильный цвет для "Clouds"', () => {
  const color = getBackgroundColor("Clouds");
  expect(color).toBe("#B0C4DE"); // Светло-серый для облачной погоды
});

test("getBackgroundColor возвращает цвет по умолчанию для неизвестного типа", () => {
  const color = getBackgroundColor("UnknownWeatherType");
  expect(color).toBe("#87CEEB"); // Цвет по умолчанию
});

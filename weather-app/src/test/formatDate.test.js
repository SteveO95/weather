import { formatDate } from "../utils";

test("formatDate правильно форматирует дату", () => {
  const inputDate = "2024-09-24 15:00:00";
  const formattedDate = formatDate(inputDate);
  expect(formattedDate).toBe("24.09.2024");
});

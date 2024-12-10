const API_KEY = import.meta.env.VITE_APP_TOKEN;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'; // Добавлено /data/2.5/
console.log('API KEY:', API_KEY);
const fetchWithTimeout = (url, options, timeout = 10000) => {
	return new Promise((resolve, reject) => {
		const timer = setTimeout(() => {
			reject(new Error('Тайм-аут'));
		}, timeout);

		fetch(url, options)
			.then(response => {
				clearTimeout(timer);
				resolve(response);
			})
			.catch(err => {
				clearTimeout(timer);
				reject(err);
			});
	});
};

export const getCurrentWeather = async city => {
	const url = `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`;
	const response = await fetchWithTimeout(url, {}, 10000);

	if (!response.ok) {
		if (response.status === 404) {
			throw new Error('Город не найден');
		} else if (response.status === 401) {
			throw new Error('Неавторизованный доступ. Проверьте ваш API ключ.');
		} else if (response.status === 500) {
			throw new Error('Ошибка на сервере. Попробуйте позже.');
		} else {
			throw new Error(`Неизвестная ошибка: ${response.status}`);
		}
	}
	return await response.json();
};

// Функция для получения прогноза на 5 дней
export const getWeatherForecast = async city => {
	const response = await fetch(
		`${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`
	);
	if (!response.ok) {
		if (response.status === 404) {
			throw new Error('Город не найден');
		} else if (response.status === 401) {
			throw new Error('Неавторизованный доступ. Проверьте ваш API ключ.');
		} else if (response.status === 500) {
			throw new Error('Ошибка на сервере. Попробуйте позже.');
		} else {
			throw new Error(`Неизвестная ошибка: ${response.status}`);
		}
	}
	return await response.json();
};

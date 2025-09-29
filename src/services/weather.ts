const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getWeatherByQuery(city: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return response.json();
}

export const getWeather = async ({
  name,
  latitude,
  longitude,
}: {
  name: string;
  latitude: number;
  longitude: number;
}) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
  );
  return response.json();
};

export async function getForecastByQuery(city: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&units=metric&appid=${API_KEY}`
  );
  const data = await response.json();
  const forecast = [];
  for (let i = 0; i < data.list.length; i += 8) {
    forecast.push(data.list.slice(i, i + 8)[0]);
  }
  return forecast;
}
export async function getForecast({ latitude, longitude }: { latitude: number; longitude: number }) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=40&units=metric&appid=${API_KEY}`
  );
  const data = await response.json();
  const forecast = [];
  for (let i = 0; i < data.list.length; i += 8) {
    forecast.push(data.list.slice(i, i + 8)[0]);
  }
  return forecast;
}

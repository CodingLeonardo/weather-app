import { useEffect, useState } from "react";

import Badge from "./components/Badge";
import Highlights from "./components/Highlights";
import Forecast from "./components/Forecast";
import Header from "./components/Header";

import { WeatherI, ForecastDayI } from "./interfaces/weather";
import { getForecast, getWeather } from "./services/weather";

const App = () => {
  const [weather, setWeather] = useState<WeatherI>({
    coord: {
      lon: 0,
      lat: 0,
    },
    weather: [
      {
        id: 0,
        main: "",
        description: "",
        icon: "",
      },
    ],
    base: "",
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
      sea_level: 0,
      grnd_level: 0,
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0,
      gust: 0,
    },
    clouds: {
      all: 0,
    },
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      country: "",
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: "",
    cod: 0,
  } as WeatherI);
  const [forecast, setForecast] = useState<ForecastDayI[]>([]);
  useEffect(() => {
    getWeather("Los Teques").then((dataWeather) => {
      getForecast(dataWeather.name).then((dataForecast) => {
        console.log(dataForecast);
        setForecast(dataForecast);
      });
      setWeather(dataWeather);
    });
  }, []);
  return (
    <main>
      <Header />
      <Badge
        name={weather.name}
        temp={weather.main.temp}
        weather={weather.weather[0]}
      />
      <Forecast list={forecast} />
      <Highlights
        windSpeed={weather.wind.speed}
        windDeg={weather.wind.deg}
        airPressure={weather.main.pressure}
        humidity={weather.main.humidity}
        visibility={weather.visibility}
      />
    </main>
  );
};

export default App;

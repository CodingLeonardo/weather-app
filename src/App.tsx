import { useEffect, useState, useContext } from "react";

import { GlobalContextProvider, GlobalContext } from "./context/globalContext";
import Badge from "./components/Badge";
import Highlights from "./components/Highlights";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
import MyLocation from "./assets/my_location_black_24dp.svg";

import {
  getForecast,
  getForecastByQuery,
  getWeather,
  getWeatherByQuery,
} from "./services/weather";
import { useGeolocation } from "./hooks/useGeolocation";

const App = () => {
  const { query, weather, forecast, setWeather, setForecast } =
    useContext(GlobalContext);
  const { getGeolocation } = useGeolocation();
  const handleSearch = () => {};
  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      getWeather(coords).then((dataWeather) => {
        getForecast(coords).then((dataForecast) => {
          setForecast(dataForecast);
        });
        setWeather(dataWeather);
      });
    });
  };

  const fetchWeather = async () => {
    if (query.lat || query.lon || query.city) {
      getWeather(query).then((dataWeather) => {
        getForecast(query).then((dataForecast) => {
          setForecast(dataForecast);
        });
        setWeather(dataWeather);
      });
    } else {
      getWeatherByQuery("Los Teques").then((dataWeather) => {
        getForecastByQuery(dataWeather.name).then((dataForecast) => {
          setForecast(dataForecast);
        });
        setWeather(dataWeather);
      });
    }
  };

  // useEffect(() => {
  //   getGeolocation();
  // }, []);

  useEffect(() => {
    fetchWeather();
  }, [query]);

  return (
    <main className="grid">
      <Header onSearch={handleSearch} onLocation={handleLocation} />
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

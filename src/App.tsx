import { useEffect, useContext } from "react";

import { GlobalContext } from "./context/globalContext";
import Badge from "./components/Badge";
import Highlights from "./components/Highlights";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
import Search from "./components/Search";

import { getForecast, getWeather } from "./services/weather";
import { useGeolocation } from "./hooks/useGeolocation";

const App = () => {
  const { query, weather, forecast, setWeather, setForecast, isOpenedSearch } =
    useContext(GlobalContext);
  const { getGeolocation } = useGeolocation();

  const fetchWeather = async () => {
    if (query.lat || query.lon || query.city) {
      getWeather(query).then((dataWeather) => {
        getForecast(query).then((dataForecast) => {
          setForecast(dataForecast);
        });
        setWeather(dataWeather);
      });
    }
  };

  useEffect(() => {
    getGeolocation();
  }, []);

  useEffect(() => {
    fetchWeather();
  }, [query]);

  return (
    <main className="grid grid-cols-1 md:grid-cols-layout md:grid-rows-3 md:h-screen">
      <Badge />
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

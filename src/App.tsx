import { useEffect, useContext } from "react";

import { GlobalContext } from "./context/globalContext";
import Badge from "./components/Badge";
import Highlights from "./components/Highlights";
import Forecast from "./components/Forecast";

import { getForecast, getWeather } from "./services/weather";
import { useGeolocation } from "./hooks/useGeolocation";
import Footer from "./components/Footer";

const App = () => {
  const { query, weather, forecast, setWeather, setForecast } =
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
    <main className="h-full grid grid-cols-layout-mobile grid-rows-layout-mobile auto-rows-fr md:grid-cols-layout-desktop md:grid-rows-layout-desktop md:h-screen">
      <Badge />
      <Forecast list={forecast} />
      <Highlights
        windSpeed={weather.wind.speed}
        windDeg={weather.wind.deg}
        airPressure={weather.main.pressure}
        humidity={weather.main.humidity}
        visibility={weather.visibility}
      />
      <Footer />
    </main>
  );
};

export default App;

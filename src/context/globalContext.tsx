import { FC, ReactNode, createContext, useState, useEffect } from "react";
import { ForecastDayI, WeatherI } from "../interfaces/weather";

interface queryProps {
  name: string;
  latitude: number;
  longitude: number;
}

interface globalContextI {
  query: queryProps;
  weather: WeatherI;
  forecast: ForecastDayI[];
  setQuery: (query: queryProps) => void;
  setWeather: (weather: WeatherI) => void;
  setForecast: (forecast: ForecastDayI[]) => void;
  isOpenedSearch: boolean;
  setIsOpenedSearch: (isOpenedSearch: boolean) => void;
}

interface globalContextProviderI {
  children: ReactNode;
}

export const GlobalContext = createContext<globalContextI>(
  {} as globalContextI
);

const weatherInitialState: WeatherI = {
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
};

export const GlobalContextProvider: FC<globalContextProviderI> = ({
  children,
}) => {
  const [query, setQuery] = useState<queryProps>({
    latitude: 0,
    longitude: 0,
    name: "los teques",
  });
  const [weather, setWeather] = useState<WeatherI>(weatherInitialState);
  const [forecast, setForecast] = useState<ForecastDayI[]>([]);
  const [isOpenedSearch, setIsOpenedSearch] = useState<boolean>(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          name: "",
        };
        if (query.latitude === coords.latitude && query.longitude === coords.longitude) return;
        setQuery(coords);
      });
    }
  }, [query]);

  return (
    <GlobalContext.Provider
      value={{
        query,
        weather,
        forecast,
        setQuery,
        setWeather,
        setForecast,
        isOpenedSearch,
        setIsOpenedSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

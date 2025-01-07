import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

export const useGeolocation = () => {
  const { query, setQuery } = useContext(GlobalContext);

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        city: "",
      };
      if (query.lat === coords.lat && query.lon === coords.lon) return;
      setQuery(coords);
      return setQuery;
    });
  };

  return {
    getGeolocation,
  };
};

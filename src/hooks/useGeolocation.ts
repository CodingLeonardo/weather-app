import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

export const useGeolocation = () => {
  const { query, setQuery } = useContext(GlobalContext);

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        name: "",
      };
      if (query.latitude === coords.latitude && query.longitude === coords.longitude) return;
      setQuery(coords);
      return setQuery;
    });
  };

  return {
    getGeolocation,
  };
};

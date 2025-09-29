interface searchCityResponse {
  name: string;
  latitude: number;
  longitude: number;
  code: string;
  continent: {
    code: string;
    name: string;
    nameEs: string;
    latitude: number;
    longitude: number;
  };
  country: {
    code: string;
    name: string;
    nameEs: string;
    latitude: number;
    longitude: number;
  };
  state: {
    code: string;
    latitude: number;
    longitude: number;
    name: string;
  };
  county: {
    code: string;
    name: string;
    nameEs: string;
    latitude: number;
    longitude: number;
  };
}

export const searchCitiesByName = async (
  query: string
): Promise<searchCityResponse[]> => {
  const response = await fetch(
    `https://api.thecompaniesapi.com/v2/locations/cities?search=${query}`
  );
  const { cities } = await response.json();
  return cities;
};

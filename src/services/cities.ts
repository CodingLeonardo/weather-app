export const searchCitiesByName = async (query: string) => {
  const response = await fetch(
    `https://api.thecompaniesapi.com/v2/locations/cities?search=${query}`
  );
  const data = await response.json();
  return data;
};

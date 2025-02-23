export interface City {
  name: string;
  continent: string;
  country: {
    name: string;
    code: string;
  };
  county: string;
  lat: number;
  lon: number;
}

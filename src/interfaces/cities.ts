// export interface City {
//   name: string;
//   lat: number;
//   lon: number;
//   continent: string;
//   country: {
//     name: string;
//     code: string;
//   };
//   county: string;
// }

export interface searchCityResponse {
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
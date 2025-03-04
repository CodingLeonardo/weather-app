import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { City } from "../interfaces/cities";
import { GlobalContext } from "../context/globalContext";
import { searchCitiesByName } from "../services/cities";
import CloseIcon from "../assets/x-icon.svg";
import SearchIcon from "../assets/search-icon.svg";

interface SearchItemProps {
  city: City;
}

const SearchItem: FC<SearchItemProps> = ({ city }) => {
  const { setQuery, setIsOpenedSearch, isOpenedSearch } =
    useContext(GlobalContext);
  const handleClick = () => {
    setQuery({
      city: city.name,
      lat: city.lat,
      lon: city.lon,
    });
    setIsOpenedSearch(!isOpenedSearch);
  };
  return (
    <li
      className="flex gap-4 items-center bg-[#252945] p-4 rounded-lg mt-2 cursor-pointer"
      onClick={handleClick}
    >
      <div>
        <img
          src={`https://flagsapi.com/${city.country.code.toUpperCase()}/flat/64.png`}
        />
      </div>
      <div>
        <h3 className="text-white font-bold">
          {city.name} - {city.county}
        </h3>
        <p className="text-[#616475]">
          {city.country.name} - {city.continent}
        </p>
      </div>
    </li>
  );
};

const Search = () => {
  const { setIsOpenedSearch, isOpenedSearch } = useContext(GlobalContext);

  const [query, setQuery] = useState("");
  const [citiesFound, setCitiesFound] = useState<City[]>([]);

  useEffect(() => {
    if (!query) {
      setCitiesFound([]);
      return;
    }
    const timeout = setTimeout(() => {
      searchCitiesByName(query).then((data) => {
        console.log(data);
        if (data.cities.length === 0) {
          setCitiesFound([]);
          return;
        }
        const cities = data.cities.map((city: any) => {
          return {
            name: city.name,
            continent: city.continent.name,
            country: {
              name: city.country.name,
              code: city.country.code,
            },
            county: city.county?.name,
            lat: city.county?.latitude,
            lon: city.county?.longitude,
          };
        });
        setCitiesFound(cities);
      });
    }, 1200);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleClick = () => {
    setIsOpenedSearch(!isOpenedSearch);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <menu className="background fixed md:absolute z-10 bg-[#1E213A] h-full w-full flex flex-col py-6 px-4">
        <button className="self-end" onClick={handleClick}>
          <img className="w-10" src={CloseIcon} alt="Close" />
        </button>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center w-full">
            <img className="absolute ml-2 w-6" src={SearchIcon} alt="Search" />
            <input
              className="bg-transparent border-2 border-[#616475] text-white py-2 px-4 pl-9 w-full outline-none"
              type="text"
              placeholder="search nearby cities"
              onChange={handleChange}
            />
          </div>
          <button className="bg-[#3C47E9] text-white font-medium text-lg py-2 px-4">
            Search
          </button>
        </div>
        <h2 className="text-white mt-8 font-bold text-xl">Cities found</h2>
        <div className="mt-4 max-h-min overflow-y-scroll">
          <ul>
            {citiesFound.length > 0 &&
              citiesFound.map((city: City, index: number) => (
                <SearchItem key={index} city={city} />
              ))}
          </ul>
        </div>
      </menu>
    </>
  );
};

export default Search;

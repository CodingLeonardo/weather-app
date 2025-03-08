import { FC } from "react";
import MyLocation from "../assets/my_location_black_24dp.svg";
import { useGeolocation } from "../hooks/useGeolocation";

interface HeaderProps {
  onClick: () => void;
}

const Header: FC<HeaderProps> = ({ onClick }) => {
  const { getGeolocation } = useGeolocation();

  const handleLocation = () => getGeolocation();
  return (
    <>
      <header className="w-full flex justify-between items-center text-white py-4 px-2 h-fit">
        <button
          onClick={onClick}
          className="bg-[#6E707A] py-2 px-4 font-medium"
        >
          Search for places
        </button>
        <button
          aria-label="My Location"
          onClick={handleLocation}
          className="bg-[#6e707a] rounded-full p-2"
        >
          <img src={MyLocation} alt="Location Icon" />
        </button>
      </header>
    </>
  );
};

export default Header;

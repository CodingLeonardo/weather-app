import MyLocation from "../assets/my_location_black_24dp.svg";

const Header = () => {
  return (
    <>
      <header className="absolute w-full flex justify-between items-center text-white py-4 px-2">
        <button className="bg-[#6E707A] py-2 px-4 font-medium">
          Search for places
        </button>
        <button className="bg-[#6e707a] rounded-full p-2">
          <img src={MyLocation} alt="" />
        </button>
      </header>
    </>
  );
};

export default Header;

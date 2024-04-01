import ForecastDay from "./ForecastDay";

const Forecast = () => {
  return (
    <div className="bg-[#100E1D] text-white py-14">
      <div className="w-4/6 m-auto grid grid-cols-2 gap-y-6 gap-x-4">
        <ForecastDay />
        <ForecastDay />
        <ForecastDay />
        <ForecastDay />
        <ForecastDay />
      </div>
    </div>
  );
};

export default Forecast;

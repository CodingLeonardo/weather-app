import { FC } from "react";
import ForecastDay from "./ForecastDay";
import { ForecastDayI } from "../interfaces/weather";

interface ForecastProps {
  list: ForecastDayI[];
}

const Forecast: FC<ForecastProps> = ({ list }) => {
  return (
    <div className="bg-[#100E1D] text-white py-14 h-fit grid md:col-start-2 md:h-full">
      <div className="w-4/6 m-auto grid grid-cols-forecast-mobile  justify-center md:w-4/5 md:grid-cols-forecast-desktop gap-y-6 gap-x-4">
        {list.map((day, index) => {
          return <ForecastDay key={index} {...day} />;
        })}
      </div>
    </div>
  );
};

export default Forecast;

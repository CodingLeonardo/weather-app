import { FC } from "react";
import ForecastDay from "./ForecastDay";
import { ForecastDayI } from "../interfaces/weather";

interface ForecastProps {
  list: ForecastDayI[];
}

const Forecast: FC<ForecastProps> = ({ list }) => {
  return (
    <div className="bg-[#100E1D] text-white py-14">
      <div className="w-4/6 m-auto grid grid-cols-2 gap-y-6 gap-x-4">
        {list.map((day, index) => {
          return <ForecastDay key={index} {...day} />;
        })}
      </div>
    </div>
  );
};

export default Forecast;

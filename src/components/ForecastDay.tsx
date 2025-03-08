import { FC } from "react";
import { ForecastDayI } from "../interfaces/weather";
import WeatherIcon from "./WeatherIcon";

interface ForecastDayProps extends ForecastDayI {}

const ForecastDay: FC<ForecastDayProps> = ({
  dt_txt,
  main: { temp_min, temp_max },
  weather,
}) => {
  return (
    <div className="bg-[#1E213A] grid justify-items-center p-4 gap-y-4">
      <h2 className="font-medium">
        {new Intl.DateTimeFormat("en-GB", {
          weekday: "short",
          day: "numeric",
          month: "short",
        }).format(new Date(dt_txt))}
      </h2>
      <div className="w-16">
        <WeatherIcon alt={weather[0].description} code={weather[0].id} />
      </div>
      <div className="flex gap-x-6">
        <p className="font-medium">{temp_max.toFixed(0)}°C</p>
        <p className="font-medium text-[#A09FB1]">{temp_min.toFixed(0)}°C</p>
      </div>
    </div>
  );
};

export default ForecastDay;

import { FC } from "react";
import HighlightsDetail from "./HighlightsDetail";

import Navigation from "../assets/navigation_black_24dp.svg";

interface HighlightsProps {
  windSpeed: number;
  windDeg: number;
  humidity: number;
  visibility: number;
  airPressure: number;
}

const Highlights: FC<HighlightsProps> = ({
  windSpeed,
  windDeg,
  humidity,
  visibility,
  airPressure,
}) => {
  return (
    <section className="bg-[#100E1D] text-white h-fit row-start-3 md:col-start-2 md:row-start-2">
      <div className="w-10/12 m-auto">
        <h1 className="font-bold text-2xl pt-8">Today's Highlights</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
          <HighlightsDetail title="Wind status">
            <div>
              <h2 className="font-bold text-[64px] inline-block">
                {windSpeed.toFixed(1)}
              </h2>
              <span className="font-medium text-[36px]">mph</span>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="bg-white bg-opacity-30 flex items-center justify-center rounded-full w-5 p-1">
                <img
                  className="w-full"
                  style={{ rotate: `-${windDeg.toFixed(0)}deg` }}
                  src={Navigation}
                  alt=""
                />
              </div>
              <p className="font-medium text-sm">WSW</p>
            </div>
          </HighlightsDetail>
          <HighlightsDetail title="Humidity">
            <div>
              <h2 className="font-bold text-[64px] inline-block">{humidity}</h2>
              <span className="font-normal text-[36px]">%</span>
            </div>
            <div className="w-4/5 grid text-[#A09FB1] font-bold">
              <div className="flex justify-between">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
              <div className={`h-2 bg-[#E7E7EB] rounded-full`}>
                <div
                  className="block h-2 rounded-full bg-[#FFEC65]"
                  style={{ width: `${humidity}%` }}
                ></div>
              </div>
              <div className="justify-self-end">
                <span>%</span>
              </div>
            </div>
          </HighlightsDetail>
          <HighlightsDetail title="Visibility">
            <div>
              <h2 className="font-bold text-[64px] inline-block mr-3">
                {(visibility / 1609).toFixed(1)}
              </h2>
              <span className="font-medium text-[36px]">miles</span>
            </div>
          </HighlightsDetail>
          <HighlightsDetail title="Air Pressure">
            <div>
              <h2 className="font-bold text-[64px] inline-block mr-3">
                {airPressure}
              </h2>
              <span className="font-medium text-[36px]">mb</span>
            </div>
          </HighlightsDetail>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

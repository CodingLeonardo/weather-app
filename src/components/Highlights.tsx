import HighlightsDetail from "./HighlightsDetail";

import Navigation from "../assets/navigation_black_24dp.svg";

const Highlights = () => {
  return (
    <section className="bg-[#100E1D] text-white">
      <div className="w-10/12 m-auto">
        <h1 className="font-bold text-2xl pt-8">Today's Highlights</h1>
        <div className="grid gap-y-4 py-8">
          <HighlightsDetail title="Wind status">
            <div>
              <h2 className="font-bold text-[64px] inline-block">7</h2>
              <span className="font-medium text-[36px]">mph</span>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="bg-white bg-opacity-30 flex items-center justify-center rounded-full w-5 p-1">
                <img className="w-full rotate-45" src={Navigation} alt="" />
              </div>
              <p className="font-medium text-sm">WSW</p>
            </div>
          </HighlightsDetail>
          <HighlightsDetail title="Humidity">
            <div>
              <h2 className="font-bold text-[64px] inline-block">84</h2>
              <span className="font-normal text-[36px]">%</span>
            </div>
            <div className="w-4/5 grid text-[#A09FB1] font-bold">
              <div className="flex justify-between">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
              <div className="h-2 bg-[#E7E7EB] rounded-full before:content-[' '] before:block before:h-2 before:rounded-full before:w-5/6 before:bg-[#FFEC65]"></div>
              <div className="justify-self-end">
                <span>%</span>
              </div>
            </div>
          </HighlightsDetail>
          <HighlightsDetail title="Visibility">
            <div>
              <h2 className="font-bold text-[64px] inline-block mr-3">6,4</h2>
              <span className="font-medium text-[36px]">miles</span>
            </div>
          </HighlightsDetail>
          <HighlightsDetail title="Air Pressure">
            <div>
              <h2 className="font-bold text-[64px] inline-block mr-3">998</h2>
              <span className="font-medium text-[36px]">mb</span>
            </div>
          </HighlightsDetail>
          {/* <div className="bg-[#1E213A] text-[#E7E7EB] p-4 flex flex-col items-center">
            <p className="font-medium text-base">Wind status</p>
            <div>
              <h2 className="font-bold text-[64px] inline-block">7</h2>
              <span className="font-medium text-[36px]">mph</span>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="bg-white bg-opacity-30 flex items-center justify-center rounded-full w-5 p-1">
                <img className="w-full rotate-45" src={Navigation} alt="" />
              </div>
              <p className="font-medium text-sm">WSW</p>
            </div>
          </div>
          <div className="bg-[#1E213A] text-[#E7E7EB] p-4 flex flex-col items-center">
            <p className="font-medium text-base">Visibility</p>
            <div>
              <h2 className="font-bold text-[64px] inline-block mr-3">6,4</h2>
              <span className="font-medium text-[36px]">miles</span>
            </div>
          </div>
          <div className="bg-[#1E213A] text-[#E7E7EB] p-4 flex flex-col items-center">
            <p className="font-medium text-base">Air Pressure</p>
            <div>
              <h2 className="font-bold text-[64px] inline-block mr-3">998</h2>
              <span className="font-medium text-[36px]">mb</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Highlights;

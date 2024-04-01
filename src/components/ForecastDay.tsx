import Shower from "../assets/Shower.png";

const ForecastDay = () => {
  return (
    <div className="bg-[#1E213A] grid justify-items-center p-4 gap-y-4">
      <h2 className="font-medium">Tomorrow</h2>
      <div className="w-16">
        <img src={Shower} alt="" />
      </div>
      <div className="flex gap-x-6">
        <p className="font-medium">16°C</p>
        <p className="font-medium text-[#A09FB1]">11°C</p>
      </div>
    </div>
  );
};

export default ForecastDay;

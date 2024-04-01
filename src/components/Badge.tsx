import Shower from "../assets/Shower.png";
import LocationOn from "../assets/location_on_black_24dp.svg";

const Badge = () => {
  return (
    <section
      className="background bg-[#1E213A] before:content-[' '] before:absolute before:block before:left-0 before:top-12 before:w-full before:h-[326px] before:bg-[url(/src/assets/Cloud-background.png)] 
        before:bg-[length:150%] before:bg-no-repeat before:bg-top before:opacity-10 h-screen flex items-center flex-col"
    >
      <div className="mt-32">
        <img className="w-36" src={Shower} alt="" />
      </div>
      <div>
        <h1 className="inline-block font-medium text-[144px] text-white">15</h1>
        <span className="font-medium text-[48px] text-[#A09FB1]">°C</span>
      </div>
      <h3 className="font-semibold text-4xl text-[#A09FB1]">Shower</h3>
      <div className="mt-10 font-medium text-lg text-[#A09FB1] flex gap-x-4">
        <p>Today</p>
        <span>•</span>
        <p>Fri, 5 Jun</p>
      </div>
      <div className="flex gap-x-2 font-semibold text-[#88869D] text-lg mt-6">
        <img src={LocationOn} alt="" />
        <p>Helsinki</p>
      </div>
    </section>
  );
};

export default Badge;

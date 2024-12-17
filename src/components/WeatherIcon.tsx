import { FC, HTMLAttributes } from "react";
import Snow from "../assets/Snow.png";
import Thunderstorm from "../assets/Thunderstorm.png";
import Shower from "../assets/Shower.png";
import HeavyRain from "../assets/HeavyRain.png";
import HeavyCloud from "../assets/HeavyCloud.png";
import LightCloud from "../assets/LightCloud.png";
import Clear from "../assets/Clear.png";

interface WeatherIconProps extends HTMLAttributes<HTMLImageElement> {
  code: number;
}

const icons: Record<string, string> = {
  "13d": Snow,
  "11d": Thunderstorm,
  "10d": Shower,
  "09d": HeavyRain,
  "03d": HeavyCloud,
  "02d": LightCloud,
  "01d": Clear,
};

const WeatherIcon: FC<WeatherIconProps> = ({ code, ...props }) => {
  switch (true) {
    case code >= 200 && code < 300:
      return <img {...props} src={icons["11d"]} />;
    case code >= 300 && code < 400:
      return <img {...props} src={icons["09d"]} />;
    case code >= 500 && code < 505:
      return <img {...props} src={icons["10d"]} />;
    case code === 511:
      return <img {...props} src={icons["13d"]} />;
    case code >= 520 && code < 532:
      return <img {...props} src={icons["09d"]} />;
    case code >= 600 && code < 623:
      return <img {...props} src={icons["13d"]} />;
    case code === 800:
      return <img {...props} src={icons["01d"]} />;
    case code === 801:
      return <img {...props} src={icons["02d"]} />;
    case code >= 802 && code < 805:
      return <img {...props} src={icons["03d"]} />;
  }
};

export default WeatherIcon;

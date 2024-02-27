import { PageBlockLocationModel } from "@/models/PageBlockLocationModel";
import { FaGoogle, FaFacebook, FaStar } from "react-icons/fa";

type PageBlockLocationProps = {
  location: PageBlockLocationModel;
};

export const PageBlockLocation = ({ location }: PageBlockLocationProps) => {
  const Icon =
    location.vender.toLowerCase() === "google" ? (
      <FaGoogle />
    ) : location.vender.toLowerCase() === "facebook" ? (
      <FaFacebook />
    ) : null;
  const starOn = Math.ceil(location.rating);
  const starOff = 5 - starOn;

  return (
    <div className="flex flex-row gap-1 items-center">
      <div>{Icon}</div>
      <div className="flex flex-row justify-center p-1">
        {Array(starOn)
          .fill(0)
          .map((_, index) => (
            <FaStar key={index} className="text-yellow-400 " />
          ))}
        {Array(starOff)
          .fill(0)
          .map((_, index) => (
            <FaStar key={index} className="text-slate-400" />
          ))}
      </div>
      <div>
        <p>{location.rating}</p>
      </div>
    </div>
  );
};

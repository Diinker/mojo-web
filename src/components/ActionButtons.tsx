import { Link } from "react-router-dom";
import whiteArrow from "/assets/images/arrow-white.png";
import blackArrow from "/assets/images/arrow-black.png";

export default function ActionButtons() {
  return (
    <div className="flex flex-row justify-center md:justify-start gap-4 font-nature-regular">
      <Link to="/download">
        <button className="group flex gap-4 bg-white text-black px-7 md:px-10 py-3 rounded-xl text-xl hover:bg-black hover:text-white hover:scale-105 transition duration-300 ease-in-out">
          <p className="font-nature">Purchase</p>
          <div className="relative w-7 h-7">
            <img 
              src={blackArrow} 
              alt="" 
              className="absolute inset-0 w-7 h-7 transition-opacity duration-300 group-hover:opacity-0" 
            />
            <img 
              src={whiteArrow} 
              alt="" 
              className="absolute inset-0 w-7 h-7 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
            />
          </div>
        </button>
      </Link>
      <Link to="/about">
        <button className="group flex gap-4 bg-white text-black px-7 md:px-10 py-3 rounded-xl text-xl hover:bg-black hover:text-white hover:scale-105 transition duration-300 ease-in-out">
          <p className="font-nature">Learn more</p>
          <div className="relative w-7 h-7">
            <img 
              src={blackArrow} 
              alt="" 
              className="absolute inset-0 w-7 h-7 transition-opacity duration-300 group-hover:opacity-0" 
            />
            <img 
              src={whiteArrow} 
              alt="" 
              className="absolute inset-0 w-7 h-7 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
            />
          </div>
        </button>
      </Link>
    </div>
  );
}
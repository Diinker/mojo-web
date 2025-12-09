import { Link } from "react-router-dom";

export default function ActionButtons() {
  return (
    <div className="flex flex-row gap-5 justify-center font-nature-regular">
      <Link to="/download">
        <button className="bg-white text-black px-10 py-3 rounded-xl text-xl hover:bg-black hover:text-white hover:scale-105 transition duration-300 ease-in-out">Download</button>
      </Link>
      <Link to="/about">
        <button className="bg-white text-black px-10 py-3 rounded-xl text-xl hover:bg-black hover:text-white hover:scale-105 transition duration-300 ease-in-out">Learn More</button>
      </Link>
    </div>
  )
}
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="text-white flex flex-row justify-between bg-[#0000007c] h-20 rounded-b-2xl items-center px-10">
      <div className="text-3xl font-bold">
        <p className="font-nature">Diinker</p>
      </div>
      <div className="text-lg flex flex-row gap-8 font-nature-light">
        <Link to="/download" className="hover:scale-105 transition duration-300 ease-in-out">
          <p>Download</p>
        </Link>
        <Link to="/about" className="hover:scale-105 transition duration-300 ease-in-out">
          <p>About</p>
        </Link>
        <Link to="/contact" className="hover:scale-105 transition duration-300 ease-in-out">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  )
}
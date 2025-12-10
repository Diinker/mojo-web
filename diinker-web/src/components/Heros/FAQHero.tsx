// import ActionButtons from "./ActionButtons"
import { Link } from "react-router-dom";

export default function FAQHero() {
  return (
    <div className="text-white flex flex-col items-center md:flex-row mt-30 justify-center md:justify-around">
        
        {/* 🚀 APPLY text-center HERE or to the h1 directly */}
        <div className="text-center"> 
          <h1 className="text-5xl md:text-6xl font-nature pb-5">FAQ</h1>
          <p className="text-lg flex flex-col items-center md:flex-row font-nature-light pb-5">
            These are the most commonly asked questions about diinker.
          </p>
          <Link to="/contact" className="text-lg flex flex-col items-center md:flex-row font-nature-light pb-5 hover:scale-105 transition duration-300">
            Cant find what you're looking for? Chat with our team here.
          </Link>
        </div>
    </div>
  )
}
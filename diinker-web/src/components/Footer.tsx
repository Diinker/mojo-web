import { Link } from "react-router-dom";
import Instagram from "/assets/images/instagram.png";
import Tiktok from "/assets/images/tiktok.png";
import YouTube from "/assets/images/youtube.png";

export default function Footer() {
  return (
    <div className="text-white bg-[#00036667] border-t flex flex-col p-10">
      <div className="flex flex-row justify-evenly">
        {/* BRANDING */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-5xl font-nature">diinker</h1>
          <p className="font-nature-light text-sm md:text-lg">Tulsa, OK | USA</p>
          <div className="flex gap-5 items-center">
            <Link to="https://youtube.com/@diinker">
              <img
                src={YouTube}
                alt="youtube-icon"
                className="w-6.5 h-5 hover:scale-110 transition duration-300 ease-in-out"
              />
            </Link>
            <Link to="https://tiktok.com/@diinkerpb">
              <img
                src={Tiktok}
                alt="youtube-icon"
                className="w-5.5 h-5.5 hover:scale-110 transition duration-300 ease-in-out"
              />
            </Link>
            <Link to="https://instagram.com/diinker">
              <img
                src={Instagram}
                alt="youtube-icon"
                className="w-5 h-5 hover:scale-110 transition duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>
        {/* LEGAL OPTIONS */}
        <div className="">
          <h2 className="text-lg md:text-2xl font-nature">Legal</h2>
          <div className="font-nature-light">
            <Link to="/accessibility">
              <p className="text-sm md:text-lg hover:font-nature hover: transition duration-300 ease-in-out">
                Accessibility
              </p>
            </Link>
            <Link to="/privacy">
              <p className="text-sm md:text-lg hover:font-nature hover: transition duration-300 ease-in-out">
                Privacy Policy
              </p>
            </Link>
            <Link to="/terms">
              <p className="text-sm md:text-lg hover:font-nature hover: transition duration-300 ease-in-out">
                Terms of Service
              </p>
            </Link>
          </div>
        </div>
        {/* SITE MAP OPTIONS */}
        <div className="">
          <h2 className="text-lg md:text-2xl font-nature">Map</h2>
          <div className="font-nature-light">
            <Link to="/about">
              <p className="text-sm md:text-lg hover:font-nature hover: transition duration-300 ease-in-out">
                About
              </p>
            </Link>
            <Link to="/purchase">
              <p className="text-sm md:text-lg hover:font-nature hover: transition duration-300 ease-in-out">
                Purchase
              </p>
            </Link>
            <Link to="/download">
              <p className="text-sm md:text-lg hover:font-nature hover: transition duration-300 ease-in-out">
                Download
              </p>
            </Link>
          </div>
        </div>
        {/* SUPPORT OPTIONS */}
        <div className="flex text-left ml-5 sm:ml-0">
          <div className="">
            <h2 className="text-lg md:text-2xl font-nature">Support</h2>
            <div className="font-nature-light">
              <Link to="/faq">
                <p className="text-sm md:text-lg hover:font-nature hover: transition duration-300 ease-in-out">
                  FAQ's
                </p>
              </Link>
              <Link to="/contact">
                <p className="text-sm md:text-lg hover:font-nature hover: transition duration-300 ease-in-out">
                  Contact
                </p>
              </Link>
              <Link to="/preferences">
                <p className="text-sm md:text-lg hover:font-nature hover: transition duration-300 ease-in-out">
                  Preferences
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* COPYRIGHT STATEMENT */}
      <div className="flex flex-row justify-center pt-10">
        <p>© 2025 Diinker | All Rights Reserved</p>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu after clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { to: "/purchase", text: "Purchase" },
    { to: "/download", text: "Download" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <nav className="text-white bg-[#0000007c] h-20 rounded-b-2xl px-10">
      <div className="flex flex-row justify-between items-center h-full">
        <div className="text-3xl font-bold z-20">
          <Link to="/" onClick={closeMenu}>
            <p className="font-nature">diinker</p>
          </Link>
        </div>

        <div className="hidden text-lg sm:flex flex-row gap-8 font-nature-light">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:font-nature">
              <p>{link.text}</p>
            </Link>
          ))}
        </div>
        <button 
          onClick={toggleMenu} 
          className="sm:hidden p-2 rounded-md hover:bg-[#ffffff20] transition duration-300 focus:outline-none focus:ring-2 focus:ring-white z-20" // z-20 ensures the button is clickable
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            // Close 'X' Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            // Hamburger Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>
      <div 
        id="mobile-menu"
        className={`
          sm:hidden absolute top-20 left-0 w-full rounded-2xl backdrop-blur-lg bg-[#000000c0] shadow-xl transition-all duration-300
          ${isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}
        `}
      >
        <div className="flex flex-col items-center gap-4 text-xl font-nature-light">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={closeMenu} className="hover:font-nature py-2 w-full text-center">
              <p>{link.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
"use client";

import { useState } from "react";
import { Menu, X, } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-row justify-between items-center text-white p-6 z-50 bg-black">
      {/* Logo */}
      <div className="text-md font-bold tracking-tighter">
        <p className="font-beyonders font-light">Mojo</p>
      </div>

      {/* Desktop Links - Hidden on mobile, Flex on md screens and up */}
      <div className="hidden md:flex flex-row items-center gap-8 font-nature">
        <a
          href="auth/login"
          className="bg-white text-black px-10 py-2 rounded-2xl font-medium border border-transparent hover:bg-black hover:border-white hover:text-white transition-all duration-300 ease-in-out"
        >
          Sign In
        </a>
        <a
          href="/auth/register"
          className="bg-white text-black px-5 py-2 rounded-2xl font-medium border border-transparent hover:bg-black hover:border-white hover:text-white transition-all duration-300 ease-in-out"
        >
          Get Started
        </a>
      </div>

      {/* Mobile Menu Icon - Visible on mobile, Hidden on md screens and up */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 md:hidden z-50"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 text-2xl md:hidden font-nature">
          <a href="auth/login" onClick={() => setIsOpen(false)}>
            Sign In
          </a>
          <a href="/auth/register" onClick={() => setIsOpen(false)}>
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

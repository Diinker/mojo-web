"use client";

import { useState } from "react";
import { Menu, Sun, Moon, Send, Bell, SquareUserRound } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const currentMonth = new Date().toLocaleDateString('default', { month: 'long' });
  const currentDay = new Date().getDate();
  const currentYear = new Date().getFullYear();
  const currentDate = `${currentMonth} ${currentDay}, ${currentYear}`;

  return (
    <div className="w-full pt-10 px-10">
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-nature text-5xl">Mojo</h1>

        <div className="flex gap-4">
          {/* Sliding Theme Toggle */}
          <div className="relative flex border-2 border-mojo rounded-2xl p-1 bg-transparent overflow-hidden">
            {/* Animated Slider */}
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-mojo rounded-xl transition-all duration-300 ease-in-out z-0 ${
                theme === "light" ? "left-1" : "left-[calc(50%+1px)]"
              }`}
            />

            <button
              onClick={() => setTheme("light")}
              className={`relative z-10 flex items-center gap-2 py-2 px-5 transition-colors duration-300 ${
                theme === "light" ? "text-black" : "text-white hover:text-mojo"
              }`}
            >
              <Sun size={24} />
              <p className="text-lg font-medium">Light</p>
            </button>

            <button
              onClick={() => setTheme("dark")}
              className={`relative z-10 flex items-center gap-2 py-2 px-5 transition-colors duration-300 ${
                theme === "dark" ? "text-black" : "text-white hover:text-mojo"
              }`}
            >
              <Moon size={24} />
              <p className="text-lg font-medium">Dark</p>
            </button>
          </div>

          {/* Action Buttons */}
          <button className="flex items-center justify-center border-2 border-mojo rounded-2xl p-5 hover:bg-mojo hover:text-black transition-all duration-300 ease-in-out">
            <Send size={24} />
          </button>

          <button className="flex items-center justify-center border-2 border-mojo rounded-2xl p-5 hover:bg-mojo hover:text-black transition-all duration-300 ease-in-out">
            <Bell size={24} />
          </button>

          {/* User Profile */}
          <div className="flex flex-row items-center border-2 border-mojo rounded-2xl pr-5 gap-4 overflow-hidden">
            <div className="flex items-center justify-center h-full">
              <SquareUserRound size={60} strokeWidth={1} className="ml-1" />
            </div>
            <div className="flex flex-col">
              <p className="text-xl leading-tight">Zack Yuan</p>
              <p className="font-nature-light text-sm opacity-70">@zack6yuan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-400/30 h-1 w-full"></div>

      <div className="flex items-center justify-between gap-3 my-5">
        <div className="flex items-center gap-2">
          <Menu size={40} className="text-mojo" />
          <h1 className="font-nature text-5xl">Dashboard</h1>
        </div>
        <div className="">
          <h1 className="text-4xl">{currentDate}</h1>
        </div>
      </div>
    </div>
  );
}

"use client"
import { LayoutDashboard, Calendar, Clock, User, Settings, LogOut } from "lucide-react";
import { useState } from "react";

export default function SideBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const icons = [
    { Icon: LayoutDashboard }, { Icon: Calendar }, { Icon: Clock },
    { Icon: User }, { Icon: Settings }, { Icon: LogOut },
  ];

  const gapHeight = 64; 

  return (
    <div className="flex flex-col items-center justify-center min-h-125 bg-[#161616] rounded-3xl w-20 py-6">
      <div className="relative flex flex-col gap-4">
        <div 
          className="absolute left-0 w-12 h-12 bg-[#cfff04] rounded-full transition-all duration-500 ease-in-out"
          style={{ 
            transform: `translateY(${activeIndex * gapHeight}px)`,
            top: 0
          }}
        />
        {icons.map(({ Icon }, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="relative z-10 flex items-center justify-center w-12 h-12 group focus:outline-none"
            >
              <Icon 
                size={24} 
                className={`transition-colors duration-300 ${
                  isActive ? "text-black" : "text-white group-hover:text-[#cfff04]"
                }`} 
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
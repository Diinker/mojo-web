import { Sparkles, ArrowUpRight } from "lucide-react";

export default function WeeklySummary() {

  // This will change later to be dynamic, just getting the content on the page
  const weeklyData = [
    { day: "SUN", height: "h-30", color: "bg-yellow-500" },
    { day: "MON", height: "h-50", color: "bg-green-500" },
    { day: "TUE", height: "h-40", color: "bg-green-500" },
    { day: "WED", height: "h-45", color: "bg-green-500" },
    { day: "THU", height: "h-50", color: "bg-green-500" },
    { day: "FRI", height: "h-25", color: "bg-yellow-500" },
    { day: "SAT", height: "h-18", color: "bg-red-500" },
  ];

  return (
    <div className="flex flex-col gap-4 p-6 bg-[#161616] rounded-3xl h-full w-full">
      <div className="flex flex-row justify-between items-start">
        <div>
          <div className="flex flex-row gap-2 items-center">
            <Sparkles size={30} className="text-mojo" />
            <h1 className="text-3xl leading-none">Weekly Summary</h1>
          </div>
          <p className="text-lg text-gray-500 mt-1">
            Your performance breakdown, by the numbers
          </p>
        </div>
        <button className="bg-[#373737] p-3 rounded-xl hover:bg-mojo hover:text-black transition duration-300">
          <ArrowUpRight size={24} />
        </button>
      </div>
      <div className="flex flex-row justify-between items-end mt-4 px-2">
        {weeklyData.map((item) => (
          <div key={item.day} className="flex flex-col items-center gap-3 group">
            {/* The Bar */}
            <div className={`${item.color} w-4 ${item.height} rounded-full opacity-100 group-hover:opacity-100 transition-opacity`}></div>
            {/* The Dot */}
            <div className={`${item.color} w-4 h-4 rounded-full`}></div>
            {/* The Label */}
            <p className="text-lg font-medium tracking-widest text-gray-400 group-hover:text-white transition-colors">
              {item.day}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
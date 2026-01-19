import { Sparkles, ArrowUpRight } from "lucide-react";

export default function WeeklySummary() {
  const weeklyData = [
    { day: "SUN", percentage: 60, color: "bg-yellow-500" },
    { day: "MON", percentage: 95, color: "bg-green-500" },
    { day: "TUE", percentage: 80, color: "bg-green-500" },
    { day: "WED", percentage: 85, color: "bg-green-500" },
    { day: "THU", percentage: 95, color: "bg-green-500" },
    { day: "FRI", percentage: 50, color: "bg-yellow-500" },
    { day: "SAT", percentage: 35, color: "bg-red-500" },
  ];

  return (
    <div className="flex flex-col justify-between p-6 bg-[#161616] rounded-3xl h-full w-full text-white">
      {/* Header Section */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <div className="bg-[#222] p-3 rounded-2xl">
            <Sparkles size={28} className="text-mojo" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl leading-tight">Weekly Summary</h1>
            <p className="text-sm text-gray-500">Your performance breakdown</p>
          </div>
        </div>

        <button className="bg-[#373737] p-3 rounded-xl hover:bg-mojo hover:text-black transition duration-300 ease-in-out">
          <ArrowUpRight size={20} />
        </button>
      </div>

      {/* Chart Section */}
      <div className="flex flex-row justify-between items-end mt-8 px-2 h-48">
        {weeklyData.map((item) => (
          <div key={item.day} className="flex flex-col items-center gap-3 group h-full justify-end">
            {/* The Bar - Using inline style for height reliability */}
            <div 
              className={`${item.color} w-3 rounded-full opacity-80 group-hover:opacity-100 transition-all duration-300`}
              style={{ height: `${item.percentage}%` }}
            ></div>
            
            {/* The Label */}
            <p className="text-[10px] font-bold tracking-tighter text-gray-500 group-hover:text-white transition-colors">
              {item.day}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
import { Logs, ArrowUpRight } from "lucide-react";

export default function CurrentTasks() {
  return (
    <div className="flex flex-col items-center p-6 bg-[#161616] rounded-3xl h-full w-full text-white">
      {/* Header Section */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <div className="bg-[#222] p-3 rounded-2xl">
            <Logs size={28} className="text-[#a3e635]" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl  leading-tight">Score</h1>
            <p className="text-sm text-gray-500">
              Today&apos;s productivity score
            </p>
          </div>
        </div>

        <button className="bg-[#373737] p-3 rounded-xl hover:bg-[#a3e635] hover:text-black transition duration-300 ease-in-out">
          <ArrowUpRight size={20} />
        </button>
      </div>
      <div className="bg-[#161616] w-30 h-30 rounded-full flex justify-center items-center border-10 border-green-500 mt-10 shadow-[0_0px_20px_-3px_rgba(0,0,0,0.1)] shadow-green-500">
        <p className="justify-center items-center text-4xl text-green-500">
          93
        </p>
      </div>
      <div className="flex flex-col text-center mt-5 gap-2">
        <p className="text-white font-medium">9% higher than your average</p>
        <p className="text-gray-500 text-sm">
          You&apos;re in the top 5% of users today
        </p>
      </div>
    </div>
  );
}

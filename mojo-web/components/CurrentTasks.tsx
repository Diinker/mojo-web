import { Logs, Plus } from "lucide-react";

export default function CurrentTasks() {
  return (
    <div className="flex flex-row justify-between items-start gap-1 p-4 bg-[#161616] rounded-3xl h-full w-full">
      <div className="">
        <div className="flex flex-row gap-2">
          <Logs size={30} />
          <h1 className="text-3xl leading-none">Current Tasks</h1>
        </div>
        <div className="text-lg text-gray-500">
          <p>What&apos;s the plan for today?</p>
        </div>
      </div>
      <button className="bg-[#373737] p-3 rounded-xl hover:bg-mojo hover:text-black transition duration-300 ease-in-out">
        <Plus size={24} />
      </button>
    </div>
  );
}

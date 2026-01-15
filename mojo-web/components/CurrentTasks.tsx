import { Logs } from 'lucide-react';

export default function CurrentTasks() {
  return (
    <div className="flex flex-col gap-1 p-4 bg-[#161616] rounded-3xl h-full w-full">
      <div className="flex flex-row gap-2">
        <Logs size={30} />
        <h1 className="text-3xl leading-none">Current Tasks</h1>
      </div>
      <div className="text-lg text-gray-500">
        <p>What&apos;s the plan for today?</p>
      </div>
    </div>
  )
}
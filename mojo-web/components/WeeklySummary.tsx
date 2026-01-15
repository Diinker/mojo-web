import { Sparkles } from 'lucide-react';

export default function WeeklySummary() {
  return (
    <div className="flex flex-col gap-1 p-4 bg-[#161616] rounded-3xl h-full w-full">
      <div className="flex flex-row gap-2">
        <Sparkles size={30} />
        <h1 className="text-3xl leading-none">Weekly Summary</h1>
      </div>
      <div className="text-lg text-gray-500">
        <p>Your performance breakdown, by the numbers</p>
      </div>
    </div>
  )
}
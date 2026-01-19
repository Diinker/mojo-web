import { Logs, Plus } from "lucide-react";

export default function CurrentTasks() {
  const tasks = [
    { title: "Fold Laundry", dueDate: "Today", importance: "Low", status: "Complete", color: "bg-green-500" },
    { title: "Walk Dog", dueDate: "Today", importance: "Low", status: "Complete", color: "bg-green-500" },
    { title: "Consultation", dueDate: "Tomorrow", importance: "Low", status: "Complete", color: "bg-green-500" },
    { title: "Design Web App", dueDate: "Tomorrow", importance: "Low", status: "Incomplete", color: "bg-red-500" },
    { title: "Request Time Off", dueDate: "Jan 20, 2026", importance: "Low", status: "Complete", color: "bg-green-500" },
    { title: "Meeting w/ Client", dueDate: "Jan 21, 2026", importance: "Low", status: "Incomplete", color: "bg-red-500" },
  ];

  return (
    <div className="flex flex-col bg-[#161616] rounded-3xl text-white w-full max-w-4xl overflow-hidden border border-white/5 shadow-2xl">
      <div className="flex flex-row justify-between items-center p-6 w-full">
        <div className="flex items-center gap-4">
          <div className="bg-[#222] p-3 rounded-2xl">
            <Logs size={28} className="text-mojo" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl leading-tight">Current Tasks</h1>
            <p className="text-sm text-gray-500">What&apos;s the plan for today?</p>
          </div>
        </div>
        <button className="bg-[#373737] p-3 rounded-xl hover:bg-[#c1ff72] hover:text-black transition-all duration-300 active:scale-95">
          <Plus size={24} className="" />
        </button>
      </div>
      <div className="px-6">
        <div className="grid grid-cols-4 pb-3 text-gray-500 font-bold text-xs uppercase tracking-widest">
          <p>Title</p>
          <p>Importance</p>
          <p>Due Date</p>
          <p>Status</p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent w-full"></div>
      </div>
      <div className="p-4 flex flex-col gap-y-1 max-h-[400px] overflow-y-auto custom-scrollbar">
        {tasks.map((task, index) => (
          <div 
            key={index} 
            className="grid grid-cols-4 items-center text-gray-300 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group"
          >
            <p className="font-medium text-white group-hover:text-[#c1ff72] transition-colors">
              {task.title}
            </p>
            <p className="text-sm">{task.importance}</p>
            <p className="text-sm">{task.dueDate}</p>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full shadow-[0_0_8px] ${task.color === 'bg-green-500' ? 'shadow-green-500' : 'shadow-red-500'} ${task.color}`}></div>
              <p className="text-sm">{task.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
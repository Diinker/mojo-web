import CurrentTasks from "@/components/CurrentTasks";
import SideBar from "@/components/SideBar";
import WeeklySummary from "@/components/WeeklySummary";
import { Menu } from "lucide-react";

export default function dashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <div className="w-full pt-10 px-10 ">
        <h1 className="font-nature text-5xl mb-5">Mojo</h1>
        <div className="bg-gray-400/30 h-1 w-full"></div>
        <div className="flex items-center gap-3 mt-5">
          <Menu size={40} className="text-[#cfff04]" />
          <h1 className="font-nature text-5xl">Dashboard</h1>
        </div>
      </div>
      <div className="flex flex-1 px-10 items-start pb-10"> {/* 1. Use items-start to stop forced stretching */}
  <div className="w-fit"> 
    <SideBar /> 
  </div>

  <main className="flex flex-col pl-5 gap-4 w-full h-[calc(100vh-250px)]"> 
    {/* 2. calc(100vh - 250px) gives it a tall, fixed area based on the screen size */}
    <div className="flex-1"> 
      <WeeklySummary />
    </div>
    <div className="flex-1">
      <CurrentTasks />
    </div>
  </main>
</div>
    </div>
  );
}

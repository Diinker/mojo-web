import CurrentTasks from "@/components/CurrentTasks";
import SideBar from "@/components/SideBar";
import WeeklySummary from "@/components/WeeklySummary";
import MainNav from "@/components/MainNav"; // Import the new component

export default function dashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      <MainNav />
      <div className="flex flex-1 px-10 items-start pb-10">
        <div className="w-fit">
          <SideBar />
        </div>
        
        <main className="flex flex-col pl-5 gap-4 w-1/2 h-[calc(100vh-250px)]">
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
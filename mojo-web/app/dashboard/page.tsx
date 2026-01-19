import CurrentTasks from "@/components/CurrentTasks";
import SideBar from "@/components/SideBar";
import WeeklySummary from "@/components/WeeklySummary";
import MainNav from "@/components/MainNav";
import Score from "@/components/Score";

export default function dashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <MainNav />
      <div className="flex flex-1 px-10 pb-10 gap-5">
        <aside className="w-fit">
          <SideBar />
        </aside>
        <main className="flex flex-1 flex-col gap-4 min-w-0">
          <div className="flex flex-row gap-4">
            <WeeklySummary />
            <Score />
          </div>
          <div className="flex-1">
            <CurrentTasks />
          </div>
        </main>
      </div>
    </div>
  );
}
import SideBar from "@/components/SideBar";

export default function dashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      
      {/* 1. Header Area (Controls how far down the line is) */}
      <div className="w-full pt-24 px-10"> {/* Increased pt-10 to pt-24 */}
        <div className="bg-[#FFFFFF]/20 h-[1px] w-full"></div>
      </div>

      {/* 2. Content Area (Sidebar and Tasks) */}
      <div className="flex flex-1 items-center px-10">
        <div className="-mt-50"> {/* Optional: Nudge sidebar up slightly if needed */}
            <SideBar />
        </div>
        
        <main className="flex-1 p-10">
          {/* Main Task Area */}
        </main>
      </div>
    </div>
  )
}
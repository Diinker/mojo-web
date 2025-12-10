// import ActionButtons from "./ActionButtons"
import checkmark from "/assets/images/check-check.png";
import Apple from "/assets/images/apple-download.png";
import Android from "/assets/images/android-download.png";

export default function DownloadHero() {
  return (
    <div className="text-white flex flex-col items-center md:flex-row mt-30 justify-center md:justify-around">
        
        {/* 🚀 APPLY text-center HERE or to the h1 directly */}
        <div className="text-center"> 
          <h1 className="text-5xl md:text-6xl font-nature pb-2">Download the app</h1>
          <p className="font-nature-light pt-5 text-xl">Coming soon to iOS and Android</p>
          <div className="flex flex-row justify-center items-center">
            <img src={Apple} alt="apple-download" className="w-45 h-30" />
            <img src={Android} alt="android-download" className="w-37 h-11.5" />
          </div>
          {/* <ActionButtons /> */}
        </div>
        
        <div>
          <img src={checkmark} alt="" className="hidden md:block w-40 h-40" />
        </div>
    </div>
  )
}
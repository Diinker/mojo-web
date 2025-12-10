// import ActionButtons from "./ActionButtons"
import checkmark from "/assets/images/check-check.png";

export default function PrivacyHero() {
  return (
    <div className="text-white flex flex-col items-center md:flex-row mt-85 justify-center md:justify-around">
        
        {/* 🚀 APPLY text-center HERE or to the h1 directly */}
        <div className="text-center"> 
          <h1 className="text-5xl md:text-6xl font-nature pb-2">Privacy</h1>
          <p className="text-xl flex flex-col items-center md:flex-row font-nature-light pb-5">
            This is the really cool privacy page
          </p>
          {/* <ActionButtons /> */}
        </div>
        
        <div>
          <img src={checkmark} alt="" className="hidden md:block w-40 h-40" />
        </div>
    </div>
  )
}
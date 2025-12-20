import ActionButtons from "../ActionButtons";
import iphone from "/assets/images/iphone.png";
import diinkerhome from "/assets/images/diinkerhome.png";

export default function HomeHero() {
  return (
    <div className="text-white flex flex-col items-center md:flex-row mt-35 justify-center md:justify-around">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-nature pb-2">
          Scoring, Simplified.
        </h1>
        <p className="text-xl flex flex-col items-center md:flex-row font-nature-light pb-5">
          End the Score Debate. All from your paddle.
        </p>
        <ActionButtons />
      </div>
      <div className="relative hidden md:block w-60 h-[440px] lg:w-[300px] lg:h-[550px] transition-all duration-500"> 
        <img 
          src={iphone} 
          alt="iPhone Frame" 
          className="relative z-10 w-full h-full object-contain pointer-events-none" 
        />
        <div className="absolute top-[2%] left-[6.5%] w-[87%] h-[96%] overflow-hidden rounded-[2.5rem] lg:rounded-[3rem] z-0">
          <img 
            src={diinkerhome} 
            alt="App Screenshot" 
            className="w-full h-[110%] object-cover object-top" 
          />
        </div>
      </div>
    </div>
  );
}
import ActionButtons from "../ActionButtons";
import iphone from "/assets/images/iphone.png";
import diinkerhome from "/assets/images/diinkerhome.png";

export default function HomeHero() {
  return (
    <div className="text-white flex flex-col items-center md:flex-row mt-35 justify-center md:justify-around px-7 sm:px-15">
      {/* Text Content Container */}
      <div className="flex flex-col items-center md:items-center text-center md:text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-nature pb-2">
          Scoring, <span className="italic">Simplified</span>.
        </h1>
        <p className="text-xl sm:text-2xl xl:text-3xl font-nature-light pb-8">
          No More Guesses. No More Disputes. Just Play. End the score debate, right from your paddle.
        </p>
        <div className="w-full flex justify-center md:justify-center">
          <ActionButtons />
        </div>
      </div>
      {/* iPhone Mockup Container */}
      <div className="relative hidden lg:block w-60 h-[480px] lg:w-[300px] lg:h-[600px] transition-all duration-500"> 
        <div className="absolute top-[2%] left-[4%] right-[4%] bottom-[2%] overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] z-0">
          <img 
            src={diinkerhome} 
            alt="App Screenshot" 
            className="w-full h-full object-cover object-top" 
          />
        </div>
        <img 
          src={iphone} 
          alt="iPhone Frame" 
          className="relative z-10 w-full h-full object-contain pointer-events-none" 
        />
      </div>
    </div>
  );
}
export default function AboutHero() {
  return (
    <div className="text-white flex flex-col items-center md:flex-row mt-30 justify-center md:justify-around">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-nature pb-2">
          Built for{" "}
          <span className="text-shadow-md text-shadow-[#aeaeae]">results</span>,
          {/* The break is hidden on md screens and up */}
          <br className="md:hidden" /> Powered by{" "}
          <span className="text-shadow-md text-shadow-[#aeaeae]">
            intelligence
          </span>
          .
        </h1>
        <p className="text-xl md:text-2xl flex flex-col items-center justify-center md:flex-row font-nature-light py-5 px-8">
          We take the hassle out of mental scorekeeping so you can focus on
          mastering your game.
        </p>
      </div>
    </div>
  );
}

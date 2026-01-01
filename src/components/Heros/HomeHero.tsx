import ActionButtons from "../ActionButtons";

export default function HomeHero() {
  return (
    <section className="text-white flex flex-col items-center justify-center min-h-[80vh] px-6 sm:px-15">
      <div className="flex flex-col items-center text-center max-w-4xl">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-nature pb-4 leading-tight">
          Get Your Mojo Back
        </h1>
        <p className="text-lg sm:text-xl xl:text-2xl font-nature-light pb-10 opacity-90 max-w-2xl">
          The habit tracker designed to turn small daily wins into massive momentum.
        </p>
        {/* <div className="w-full flex justify-center">
          <ActionButtons />
        </div> */}
      </div>
    </section>
  );
}
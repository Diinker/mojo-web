export default function CreationReason() {
  return (
    <div className="text-white flex flex-col items-center md:flex-row justify-center md:justify-around">
      <div className="text-center">
        <div className="flex flex-row justify-center items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff6a00"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-flame shadow-[0_-0.5px_10px_rgba(249,115,22,1)] rounded-xl"
          >
            <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
          </svg>
          <h1 className="text-4xl font-nature items-center justify-center">
            Seamless Integration
          </h1>
        </div>
        <p className="text-xl flex flex-col items-center md:flex-row font-nature-light py-5 px-10">
          Compatible with iOS and Android devices via bluetooth. Connect your
          diinker sensor to your device and app, and start your matches.
        </p>
      </div>
    </div>
  );
}

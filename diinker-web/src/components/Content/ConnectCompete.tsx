export default function ConnectAndCompete() {
  return (
    <div className="text-white flex flex-col items-center md:flex-row mt-30 justify-center md:justify-around">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-nature pb-2">
          Connect & Compete
        </h1>
        <p className="text-xl flex flex-col items-center md:flex-row font-nature-light py-5 px-10">
          Diinker isn't just a tool; it's your entry into a global network of
          players.
        </p>
        <div className="text-left">
          <p className="text-xl flex flex-col items-start md:flex-row font-nature py-5 px-10">
            Shared Stats:
            <span className="font-nature-light">
              Easily share your match results and personal bests with friends
            </span>
          </p>
          <p className="text-xl flex flex-col items-start md:flex-row font-nature py-5 px-10">
            Leaderboards:
            <span className="font-nature-light">
              See how your stats stack up against local players and the wider
              diinker community.
            </span>
          </p>
          <p className="text-xl flex flex-col items-start md:flex-row font-nature py-5 px-10">
            Challenge System:
            <span className="font-nature-light">
              Directly challenge friends to a match and track the official score
              using the app.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

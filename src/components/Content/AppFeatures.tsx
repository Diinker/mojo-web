export default function AppFeatures() {
  return (
    <div className="flex flex-row items-center justify-center gap-20">
      <h1 className="font-nature text-white text-4xl">
        Everything you need, all in one place. <br /><span className="text-3xl font-nature-light">Download the app <a href="/download" className="font-nature">here</a></span>
      </h1>
      <div className="bg-[#ffffff11] border border-[#ffffff1c] rounded-xl w-180 h-100 flex flex-row items-center justify-center">
        <div className="flex flex-row gap-10">
          <div className="font-nature text-white">
            <p>[X] Matches Played</p>
          </div>
          <div className="font-nature text-white">
            <p>[X] Points Tracked</p>
          </div>
          <div className="font-nature text-white">
            <p>[X] Downloads</p>
          </div>
          <div className="font-nature text-white">
            <p>[X] Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

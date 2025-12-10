// import ActionButtons from "./ActionButtons"
export default function QuestionsAndAnswers() {
  return (
    <div className="text-white flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl">
          <p className="text-lg font-nature pb-5 text-center">
            How does diinker track the score?
          </p>
          <p className="text-lg font-nature-light pb-5 px-8 text-center md:text-left">
            diinker uses advanced, real-time sensors that fit on the endcap of your pickleball paddle. A simple, distinct tap on the corresponding side of your sensor after winning or losing a point registers the action. The companion app uses this input to accurately track and announce the score in the standard pickleball format (Team Score - Opponent Score - Server Number).
          </p>

          <p className="text-lg font-nature pb-5 text-center">
            Is diinker compatible with my pickleball paddle?
          </p>
          <p className="text-lg font-nature-light pb-5 px-8 text-center md:text-left">
            Yes. diinker is designed with a universal fit system, to securely plug into the vast majority of standard paddle handles, on top of the existing butt-cap. It maintains the original paddle length and grip size.
          </p>

          <p className="text-lg font-nature pb-5 text-center">
            How is diinker charged, and how long does the battery last?
          </p>
          <p className="text-lg font-nature-light pb-5 px-8 text-center md:text-left">
            diinker is charged via a standard USB-C port located on the side of the endcap (accessible when unplugged). A single charge provides up to 20-25 hours of active playtime, enough for a full week of heavy play. A full recharge typically takes about 90 minutes.
          </p>

          <p className="text-lg font-nature pb-5 text-center">
            Is diinker waterproof or rainproof?
          </p>
          <p className="text-lg font-nature-light pb-5 px-8 text-center md:text-left">
            diinker is built to withstand outdoor play. It is rated IPX6 water-resistant, meaning it is protected against powerful jets of water and heavy rain. However, it should not be submerged in water.
          </p>

          <p className="text-lg font-nature pb-5 text-center">
            Do both players need a diinker to track a match?
          </p>
          <p className="text-lg font-nature-light pb-5 px-8 text-center md:text-left">
            No. Only one diinker is required to track the score of an entire doubles match. However, for full, personalized stat tracking and opponent verification, it is recommended that all players use a diinker.
          </p>

          <p className="text-lg font-nature pb-5 text-center">
            How much weight does diinker add to my paddle?
          </p>
          <p className="text-lg font-nature-light pb-5 px-8 text-center md:text-left">
            diinker is engineered to be feather-light. The smart endcap typically adds less than 0.3 ounces (8-10 grams) to the paddle, which is negligible and will not significantly alter your paddle's swing weight or balance.
          </p>

          <p className="text-lg font-nature pb-5 text-center">
            Can I challenge friends to matches using diinker?
          </p>
          <p className="text-lg font-nature-light pb-5 px-8 text-center md:text-left">
            Yes. The companion app features a Connect & Challenge section where you can link up with friends. When playing a challenged match, the app automatically verifies the score and updates your head-to-head records and community leaderboard ranking.
          </p>

          <p className="text-lg font-nature pb-5 text-center">
            What happens if I forget to tap the score?
          </p>
          <p className="text-lg font-nature-light pb-5 px-8 text-center md:text-left">
            The diinker sensor has a "Correction" feature that allows you to quickly undo the last point, side-out, or server change with a single tap.
          </p>
        </div>
    </div>
  )
}
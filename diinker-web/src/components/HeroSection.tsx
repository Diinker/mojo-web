import ActionButtons from "./ActionButtons"

export default function HeroSection() {
  return (
    <div className="text-white flex justify-center mt-40">
      <div className="flex-col">
        <h1 className="text-6xl font-nature pb-2">Scoring, Simplified.</h1>
        <p className="text-xl flex justify-center font-nature-light pb-5">We handle the score, so you can focus on your game.</p>
        <ActionButtons />
      </div>
    </div>
  )
}
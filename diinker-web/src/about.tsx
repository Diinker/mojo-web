import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"

function App() {
  return (
    <div className="min-h-dvh w-full bg-black">
      {/* HEADER */}
      <NavBar />
      {/* MAIN CONTENT */}
      <HeroSection />
    </div>
  )
}

export default App

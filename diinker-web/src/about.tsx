import ConnectAndCompete from "./components/Content/ConnectCompete";
import CreationReason from "./components/Content/CreationReason";
import StatTracking from "./components/Content/StatTracking";
import Footer from "./components/Footer";
import AboutHero from "./components/Heros/AboutHero";
// import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-dvh w-full bg-linear-to-b from-[#1f23d6] to-black">
      {/* HEADER */}
      <NavBar />
      <AboutHero />
      {/* MAIN CONTENT */}
      <CreationReason />
      <StatTracking />
      <ConnectAndCompete />
      <Footer />
    </div>
  )
}

export default App

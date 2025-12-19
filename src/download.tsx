import DownloadHero from "./components/Heros/DownloadHero";
// import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-dvh w-full flex flex-col bg-linear-to-b from-[#1f23d6] to-black">
      {/* HEADER */}
      <NavBar />
      <DownloadHero />
      {/* MAIN CONTENT */}
      {/* <Footer /> */}
    </div>
  )
}

export default App

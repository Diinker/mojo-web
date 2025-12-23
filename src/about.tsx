import BlockOne from "./components/Content/BlockOne";
import BlockThree from "./components/Content/BlockThree";
import BlockTwo from "./components/Content/BlockTwo";
import Footer from "./components/Footer";
import AboutHero from "./components/Heros/AboutHero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex flex-col min-h-dvh w-full bg-linear-to-b from-[#1f23d6] to-black">
      <NavBar />
      <main className="flex-1">
        <AboutHero />
        <div className="flex flex-row mt-15">
          <BlockOne />
          <div className="w-0.5 h-40 bg-white"></div>
          <BlockTwo />
          <div className="w-0.5 h-40 bg-white"></div>
          <BlockThree />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

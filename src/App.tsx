import NavBar from "./components/NavBar";
import HeroSection from "./components/Heros/HomeHero";
import PromoSection from "./components/PromoSection";
import Footer from "./components/Footer";
import HowItWorksSection from "./components/HowItWorks";

export default function App() {
  return (
    <div className="relative min-h-dvh w-full bg-linear-to-b from-[#1f23d6] to-black overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(31,35,214,0.4),transparent_50%)] pointer-events-none" />
      <NavBar />
      <main className="relative z-10 flex flex-col gap-24 md:gap-48 pb-20"> 
        <HeroSection />
        <div className="flex flex-col gap-32">
          <PromoSection /> 
          <HowItWorksSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

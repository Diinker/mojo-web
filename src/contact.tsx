import ContactForm from "./components/Content/ContactForm";
import ContactMethods from "./components/Content/ContactMethods";
import ContactHero from "./components/Heros/ContactHero";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-linear-to-b from-[#1f23d6] to-black">
      {/* HEADER */}
      <NavBar />
      <div className="flex flex-1 flex-col justify-center items-center pb-40 pt-30">
        <ContactHero />
        <div className="flex flex-row">
          <ContactMethods />
          <ContactForm />
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default App;

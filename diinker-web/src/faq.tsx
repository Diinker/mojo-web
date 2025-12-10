import QuestionsAndAnswers from "./components/Content/QuestionsAndAnswers";
import Footer from "./components/Footer";
import FAQHero from "./components/Heros/FAQHero";
// import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-dvh w-full bg-linear-to-b from-[#1f23d6] to-black">
      {/* HEADER */}
      <NavBar />
      <FAQHero />
      {/* MAIN CONTENT */}
      <QuestionsAndAnswers />
      <Footer />
    </div>
  )
}

export default App

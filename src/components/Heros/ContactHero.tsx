export default function ContactHero() {
  // Alert after the form is submitted

  return (
    <div className="text-white flex flex-col items-center md:flex-row justify-center md:justify-around">
      {/* 🚀 APPLY text-center HERE or to the h1 directly */}
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-nature pb-2">Contact Us</h1>
        <p className="text-xl flex flex-col items-center md:flex-row font-nature-light pb-5">
          Have questions, or ready to level up your pickleball games? Drop us a
          line!
        </p>
        {/* <ActionButtons /> */}
      </div>
    </div>
  );
}

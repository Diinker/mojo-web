export default function ContactForm() {
  const submitRequest = () => {
    alert("Success! Thank you for your submission, we will get back to you shortly.")
  }
  return (
    <div className="mt-3">
      {/* Contact Form */}
      <div className="bg-[#ffffff11] border border-[#ffffff1c] text-white flex flex-col gap-2 p-4 rounded-xl lg:w-110 2xl:w-150">
        <div className="font-nature-light">
          <input type="text" placeholder="Name..." className="bg-[#ffffff0c] w-full px-4 py-5 rounded-xl" />
        </div>
        <div className="font-nature-light">
          <input type="text" placeholder="Email..." className="bg-[#ffffff10] w-full px-4 py-5 rounded-xl"/>
        </div>
        <div className="font-nature-light">
          <input type="text" placeholder="Message..." className="bg-[#ffffff10] w-full px-4 py-5 rounded-xl"/>
        </div>
      </div>
      <button onClick={submitRequest} className="bg-[#ffffff11] border border-[#ffffff1c] w-full text-white font-nature rounded-xl p-3 md:py-5 mt-3 hover:text-black hover:bg-[#FFFFFF] transition duration-300">
        <p className="md:text-xl">Submit</p>
      </button>
    </div>
  )
}
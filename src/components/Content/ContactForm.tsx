export default function ContactForm() {
  const submitRequest = () => {
    alert("Success! Thank you for your submission, we will get back to you shortly.")
  }
  return (
    <div className="mt-3">
      {/* Contact Form */}
      <div className="bg-[#ffffff11] border border-[#ffffff1c] text-white flex flex-col gap-2 p-2 rounded-xl 2xl:w-150">
        <div className="font-nature-light">
          <input type="text" placeholder="Name" className="bg-[#ffffff0c] w-full px-4 py-3 rounded-xl" />
        </div>
        <div className="font-nature-light">
          <input type="text" placeholder="Email" className="bg-[#ffffff10] w-full px-4 py-3 rounded-xl"/>
        </div>
        <div className="font-nature-light">
          <input type="text" placeholder="Message" className="bg-[#ffffff10] w-full px-4 pb-30 pt-2 rounded-xl"/>
        </div>
      </div>
      <button onClick={submitRequest} className="bg-white w-full text-black font-nature rounded-xl p-3 mt-2 hover:text-white hover:bg-black transition duration-400">
        <p>Submit</p>
      </button>
    </div>
  )
}
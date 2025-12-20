export default function ContactForm() {
  return (
    <div className="p-3 flex flex-col gap-2 2xl:w-120">
      {/* Contact Form */}
      <div className="bg-[#ffffff11] border border-[#ffffff1c] text-white rounded-xl h-1/4 flex flex-row items-center justify-start px-4 gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="border border-[#ffffff4b] rounded-xl pt-2 pb-2 lucide lucide-mail-icon lucide-mail hover:stroke-[#00a2ff] transition duration-400"
        >
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
        <p className="font-nature text-xl">Email us</p>
      </div>
      <div className="bg-[#ffffff11] border border-[#ffffff1c] text-white rounded-xl h-1/4 flex flex-row items-center justify-start px-4 gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="border border-[#ffffff4b] rounded-xl pt-2 pb-2 lucide lucide-github-icon lucide-github hover:stroke-[#00a2ff] transition duration-400"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
        <p className="font-nature text-xl">Follow us on GitHub</p>
      </div>
      <div className="bg-[#ffffff11] border border-[#ffffff1c] text-white rounded-xl h-1/4 flex flex-row items-center justify-start px-4 gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="border border-[#ffffff4b] rounded-xl pt-2 pb-2 lucide lucide-instagram-icon lucide-instagram hover:stroke-[#00a2ff] transition duration-400"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
        <p className="font-nature text-xl">Find us on Social Media</p>
      </div>
    </div>
  );
}

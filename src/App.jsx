function InputField({ label, children }) {
  return (
    <div className="flex flex-col gap-0.5 w-full">
      <label className="font-bold text-sm text-[#3f3f46]">{label}</label>
      {children}
    </div>
  )
}

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
      <div className="flex flex-col gap-6 bg-white rounded-lg p-8 w-[500px] shadow-md">
        <h2 className="font-bold text-xl text-[#464646]">Regular Text</h2>

        <div className="flex flex-col gap-4">
          <InputField label="Start date">
            <input
              type="text"
              placeholder="Name"
              className="h-10 w-full border border-[#a1a1aa] rounded px-3 text-sm text-[#3f3f46] outline-none focus:border-[#1d2f5d]"
            />
          </InputField>

          <InputField label="Renewal type">
            <div className="relative">
              <select
                className="h-10 w-full border border-[#a1a1aa] rounded px-3 text-sm text-[#3f3f46] outline-none focus:border-[#1d2f5d] appearance-none bg-white"
                defaultValue=""
              >
                <option value="" disabled>Name</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 9L12 15L18 9" stroke="#3f3f46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </InputField>
        </div>

        <div className="flex gap-3 py-5">
          <button className="bg-[#af0075] text-white border border-[#af0075] rounded px-4 py-2 text-base min-w-[120px] cursor-pointer uppercase">
            Continue
          </button>
          <button className="bg-white text-[#af0075] border border-[#af0075] rounded px-4 py-2 text-base min-w-[120px] cursor-pointer uppercase">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { FaEnvelope, FaLock, FaShieldAlt } from 'react-icons/fa';

export default function layout({ children}: {children: React.ReactNode}) {


    const features = [
      { key: 1, title: "Email Verification", icon: FaEnvelope },
      { key: 2, title: "Secure Reset", icon: FaShieldAlt },
      { key: 3, title: "Encrypted", icon: FaLock },
    ];
  return (
    <>
      {/* keyframes for the three dots (dark <-> light green, one after another) */}
      <style>{`
          @keyframes dotPulse {
            0%, 100% { background-color: #86EFAC; }
            50%      { background-color: #16A34A; }
          }
        `}</style>

      <div className="  container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 p-4 items-center">
        {/* ================= LEFT SIDE ================= */}
        <div className="hidden md:block ">
          {/* illustration card */}
          <div className="  relative overflow-hidden rounded-2xl h-75 bg-linear-to-br from-[#F0FDF4] to-[#F9FAFB] shadow-lg">
            {/* decorative circles */}
            <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-[#DCFCE7]/70" />
            <div className="absolute top-10 right-20 w-10 h-10 rounded-full bg-[#DCFCE7]/70" />
            <div className="absolute bottom-4 right-14 w-28 h-28 rounded-full bg-[#DCFCE7]/70" />

            {/* icons */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <div className="flex items-center gap-3">
                {/* envelope */}
                <div className="w-12 h-12 mt-4 rounded-xl bg-white shadow-md flex items-center justify-center text-[#16A34A]  transition-transform duration-300 hover:rotate-5">
                  <FaEnvelope />
                </div>

                {/* lock (main) */}
                <div className="w-24 h-24 rounded-3xl bg-white shadow-xl flex items-center justify-center  transition-transform duration-300 hover:rotate-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] text-3xl">
                    <FaLock />
                  </div>
                </div>

                {/* shield */}
                <div className="w-12 h-12 mt-6 rounded-xl bg-white shadow-md flex items-center justify-center text-[#16A34A]  transition-transform duration-300 hover:rotate-5">
                  <FaShieldAlt />
                </div>
              </div>

              {/* three animated dots */}
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#86EFAC]"
                    style={{
                      animation: "dotPulse 1.5s ease-in-out infinite",
                      animationDelay: `${i * 0.25}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* text */}
          <div className="text-center mt-6">
            <h1 className="font-bold text-3xl text-[#364153]">
              Reset Your Password
            </h1>
            <p className="font-medium text-base text-[#4A5565] mt-3 max-w-md mx-auto">
              Don&apos;t worry, it happens to the best of us. We&apos;ll help
              you get back into your account in no time.
            </p>
          </div>

          {/* features (mapped) */}
          <div className="flex items-center justify-center gap-6 mt-5">
            {features.map((item) => (
              <div
                key={item.key}
                className="flex items-center gap-2 text-sm text-[#4A5565]"
              >
                <span className="text-[#16A34A]">
                  <item.icon />
                </span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

       {/* ================= RIGHT SIDE ================= */}
        <div className="bg-white rounded-2xl shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] p-8">
       
        {children}
        
        </div>
      
      </div>
    </>
  )
}

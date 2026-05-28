import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [showBlessing, setShowBlessing] = useState(false)

  return (
    <div className="min-h-screen bg-pink-50 text-slate-800 font-sans flex flex-col antialiased selection:bg-pink-200">
      {/* ส่วนหัว (Navbar) */}
      <Navbar />

      {/* ส่วนเนื้อหาหลัก */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        
        {/* การ์ดอวยพรหลัก */}
        <div className="bg-white rounded-3xl shadow-xl shadow-pink-100 p-8 max-w-md w-full border border-pink-100 transform transition duration-500 hover:scale-[1.02]">
          
          {/* อิโมจิหรือรูปภาพน่ารักๆ */}
          <div className="text-6xl my-4 animate-bounce">
            🎂
          </div>

          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r reduction bg-pink-500 to-rose-400 tracking-tight mb-2">
            Happy Birthday! 🎉
          </h1>
          
          <p className="text-lg text-pink-600 font-medium mb-6">
            ถึงเพื่อนรักสุดน่ารัก 💕
          </p>

          {/* กล่องข้อความอวยพร (จะปรากฏเมื่อกดปุ่ม) */}
          <div className={`transition-all duration-700 overflow-hidden ${showBlessing ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-pink-50 rounded-2xl p-4 text-slate-700 text-base leading-relaxed mb-6 border border-pink-100 italic">
              "ขอให้แกมีความสุขมากๆ ในปีนี้ คิดอะไรก็ขอให้สมปรารถนา 
              น่ารักสดใสแบบนี้ตลอดไปเลยนะ! ขอบคุณที่เป็นเพื่อนที่ดีต่อกันเสมอมา 
              รักแกนะ! 💖✨"
            </div>
          </div>

          {/* ปุ่มกดสุดคิวท์ */}
          <button
            onClick={() => setShowBlessing(!showBlessing)}
            className="cursor-pointer bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-semibold py-3 px-6 rounded-full shadow-md shadow-pink-200 transition duration-300 transform active:scale-95"
          >
            {showBlessing ? 'ซ่อนคำอวยพร 🌸' : 'คลิกเพื่อดูคำอวยพร ✉️'}
          </button>

        </div>

        {/* ตกแต่งพื้นหลังเพิ่มเติมด้วยหัวใจดวงเล็กๆ */}
        <div className="flex gap-4 mt-8 text-pink-300 text-xl animate-pulse">
          <span>💖</span>
          <span>✨</span>
          <span>🎀</span>
          <span>✨</span>
          <span>💖</span>
        </div>
      </main>

      {/* ส่วนท้ายเว็บ */}
      <footer className="text-center py-4 text-xs text-pink-400">
        Made with 💖 for a special friend
      </footer>
    </div>
  )
}

export default App
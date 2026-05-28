function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-pink-100 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold text-pink-500 tracking-wider flex items-center gap-2">
        <span>💝</span> HBD.MILK
      </div>
      <div className="text-sm bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-medium animate-pulse">
        Special Day ✨
      </div>
    </nav>
  )
}

export default Navbar
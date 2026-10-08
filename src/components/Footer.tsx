export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] border-t border-[#27272A] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF00FF]">
          Crushi
        </div>
        <div className="text-gray-400 text-sm flex items-center gap-2">
          Swiss made 🇨🇭
        </div>
        <div className="text-gray-500 text-sm">
          © 2026 Crushi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

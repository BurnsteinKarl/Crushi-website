"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#27272A]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF00FF]">
            Crushi
          </motion.div>
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
          <button className="bg-[#FF00FF] text-white px-6 py-2 rounded-full font-bold hover:bg-[#FF00FF]/80 transition-all">
            Get the App
          </button>
        </div>
      </div>
    </nav>
  );
}

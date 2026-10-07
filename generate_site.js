const fs = require('fs');
const path = require('path');

const write = (p, content) => {
  const full = path.join(__dirname, p);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content.trim() + '\n');
};

write('src/app/globals.css', `
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #0a0a0a;
  --foreground: #ededed;
  --primary: #00F0FF;
  --secondary: #FF00FF;
  --surface: #1C1C1E;
}
body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}
`);

write('src/app/layout.tsx', `
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Crushi - Meet In Real Life",
  description: "Cure dating fatigue with Crushi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
`);

write('src/components/Navbar.tsx', `
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
`);

write('src/components/Footer.tsx', `
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
          © {new Date().getFullYear()} Crushi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
`);

write('src/app/page.tsx', `
"use client";
import { motion } from 'framer-motion';
import { Smartphone, Heart, Sparkles, MapPin } from 'lucide-react';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0b1a] to-[#0a1a1a] -z-10" />
        
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
          >
            Meet In <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF00FF]">Real Life</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Cure dating fatigue. Discover your ideal matches nearby and start a conversation instantly. No more endless swiping.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
              <Sparkles size={24} />
              Download on App Store
            </button>
            <button className="flex items-center gap-3 bg-[#1C1C1E] text-white border border-[#27272A] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
              <Smartphone size={24} />
              Get it on Google Play
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="bg-[#1C1C1E] p-8 rounded-3xl border border-[#27272A] hover:border-[#00F0FF] transition-colors">
              <div className="w-14 h-14 bg-[#00F0FF]/10 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-[#00F0FF]" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nearby Radar</h3>
              <p className="text-gray-400 leading-relaxed">Instantly spot compatible people in your vicinity and connect on the spot.</p>
            </div>
            <div className="bg-[#1C1C1E] p-8 rounded-3xl border border-[#27272A] hover:border-[#FF00FF] transition-colors">
              <div className="w-14 h-14 bg-[#FF00FF]/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-[#FF00FF]" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ideal Match AI</h3>
              <p className="text-gray-400 leading-relaxed">Describe exactly what you want via voice or text. Our AI filters the noise.</p>
            </div>
            <div className="bg-[#1C1C1E] p-8 rounded-3xl border border-[#27272A] hover:border-white transition-colors">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">No Endless Chatting</h3>
              <p className="text-gray-400 leading-relaxed">Skip the tedious small talk. Match, meet up instantly, and see if there's a real spark.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
`);

write('src/app/blog/page.tsx', `
import Link from 'next/link';

export default function BlogIndex() {
  return (
    <div className="pt-32 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-5xl font-black mb-12">Blog</h1>
      <div className="grid gap-8">
        <Link href="/blog/dating-fatigue-and-crushi">
          <div className="bg-[#1C1C1E] p-8 rounded-3xl border border-[#27272A] hover:border-[#FF00FF] transition-all group">
            <h2 className="text-3xl font-bold mb-4 group-hover:text-[#FF00FF] transition-colors">Dating Fatigue: Why We Need to Start Talking in Real Life Again</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Swiping has become a chore. It's time to put the phone down, step outside, and let serendipity take over.
            </p>
            <span className="text-[#00F0FF] font-semibold">Read more →</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
`);

write('src/app/blog/dating-fatigue-and-crushi/page.tsx', \`
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  return (
    <div className="pt-32 px-6 max-w-3xl mx-auto min-h-screen pb-20">
      <Link href="/blog" className="flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors">
        <ArrowLeft size={20} /> Back to Blog
      </Link>
      <h1 className="text-5xl font-black mb-8 leading-tight">Dating Fatigue: Why We Need to Start Talking in Real Life Again</h1>
      <div className="prose prose-invert prose-lg max-w-none text-gray-300">
        <p className="lead text-xl text-white font-medium">
          Let's be honest. Modern dating apps were supposed to make finding love easier, but instead, they've turned romance into a repetitive, exhausting game. 
        </p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-white">The Swiping Epidemic</h2>
        <p>
          We've all been there: endlessly scrolling through highly curated profiles, sending a generic "Hey", and either getting ghosted or engaging in three weeks of tedious small talk that ultimately leads nowhere. This phenomenon, widely known as <strong>dating fatigue</strong>, is burning out an entire generation.
        </p>
        <p>
          We are more connected digitally than ever before, yet feelings of isolation are at an all-time high. We hide behind our screens, curating the perfect persona, but missing out on the raw, authentic chemistry that only happens face-to-face.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-white">The Crushi Philosophy</h2>
        <p>
          At Crushi, we believe that the smartphone should be a bridge to the real world, not a barrier. We built Crushi to shatter the infinite swiping loop.
        </p>
        <p>
          Instead of keeping you glued to your screen, Crushi actively works to get you off it. Using our Ideal Match AI and Nearby Radar, we instantly alert you when someone who perfectly matches your exact criteria is standing just a few feet away—whether you're at a coffee shop, a music festival, or walking down the street.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Real Chemistry Happens in Real Time</h2>
        <p>
          Body language, eye contact, the sound of a laugh—these are the things that ignite genuine attraction. You can't capture that in a text message. Crushi eliminates the hesitation and the small talk by facilitating a warm, immediate introduction in the real world.
        </p>
        <p>
          It's time to stop texting. It's time to start talking. 
        </p>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-[#00F0FF]/10 to-[#FF00FF]/10 border border-[#27272A] rounded-3xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to meet in real life?</h3>
          <p className="mb-8">Download Crushi and step out into the world. Your next great connection is waiting just around the corner.</p>
          <Link href="/" className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            Get Crushi Now
          </Link>
        </div>
      </div>
    </div>
  );
}
\`);

console.log("Files generated successfully!");

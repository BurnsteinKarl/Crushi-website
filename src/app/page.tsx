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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0b1a] to-[#0a1a1a] -z-10" />
        
        <div className="max-w-5xl mx-auto text-center mt-12">
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

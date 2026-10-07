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
        <p className="mt-4">
          We are more connected digitally than ever before, yet feelings of isolation are at an all-time high. We hide behind our screens, curating the perfect persona, but missing out on the raw, authentic chemistry that only happens face-to-face.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-white">The Crushi Philosophy</h2>
        <p>
          At Crushi, we believe that the smartphone should be a bridge to the real world, not a barrier. We built Crushi to shatter the infinite swiping loop.
        </p>
        <p className="mt-4">
          Instead of keeping you glued to your screen, Crushi actively works to get you off it. Using our Ideal Match AI and Nearby Radar, we instantly alert you when someone who perfectly matches your exact criteria is standing just a few feet away—whether you're at a coffee shop, a music festival, or walking down the street.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Real Chemistry Happens in Real Time</h2>
        <p>
          Body language, eye contact, the sound of a laugh—these are the things that ignite genuine attraction. You can't capture that in a text message. Crushi eliminates the hesitation and the small talk by facilitating a warm, immediate introduction in the real world.
        </p>
        <p className="mt-4">
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

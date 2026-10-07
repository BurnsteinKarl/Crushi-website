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

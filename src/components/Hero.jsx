import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full flex items-end md:items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-2xl">
            <p className="text-white/80 uppercase tracking-[0.35em] text-xs md:text-sm mb-4">A Modern Chapter in Urban Living</p>
            <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Space that tells your story
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              Discover residences where light, texture, and skyline come together. Crafted for those who see a home as a canvas for a life well lived.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#featured" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-gray-900 font-medium shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition">Explore Residences</a>
              <a href="#story" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition">Our Story</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Story() {
  return (
    <section id="story" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">Every detail has a narrative</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              For over a decade, we have curated spaces that breathe with the city. Our approach is simple: design with empathy, build with integrity, and finish with soul. Each line, material, and view is considered to create an atmosphere that feels inevitable.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We collaborate with architects, artists, and craftspeople to shape environments that elevate daily rituals—morning light across oak floors, a quiet corner for a thought, the skyline unfolding beyond glass.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop" alt="Timeless interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

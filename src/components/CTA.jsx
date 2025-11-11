export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">Book a private viewing</h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Tell us what home means to you. Our team will curate residences that match your rhythm and arrange a private tour.
            </p>
            <ul className="text-white/70 space-y-2 mb-8">
              <li>• Downtown penthouses</li>
              <li>• Riverside lofts</li>
              <li>• Garden maisonettes</li>
            </ul>
          </div>
          <form className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
            <div className="grid md:grid-cols-2 gap-4">
              <input className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none" placeholder="Full name" />
              <input className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none" placeholder="Email" />
              <input className="md:col-span-2 w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none" placeholder="Phone" />
              <textarea className="md:col-span-2 w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none" rows="4" placeholder="What are you looking for?" />
            </div>
            <button type="button" className="mt-5 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-gray-900 font-medium shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition">Request viewing</button>
          </form>
        </div>
      </div>
    </section>
  );
}

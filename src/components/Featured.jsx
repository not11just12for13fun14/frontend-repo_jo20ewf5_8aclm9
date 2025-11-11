import { BedDouble, Bath, Maximize2 } from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Skyline Penthouse",
    location: "Downtown East",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop",
    specs: { beds: 3, baths: 3, area: 2450 },
  },
  {
    id: 2,
    title: "Terrace Loft",
    location: "Riverside District",
    image: "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?q=80&w=1600&auto=format&fit=crop",
    specs: { beds: 2, baths: 2, area: 1680 },
  },
  {
    id: 3,
    title: "Garden Maisonette",
    location: "West End",
    image: "https://images.unsplash.com/photo-1669732038680-fc22a0dbb8e8?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI4ODEzNTZ8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    specs: { beds: 4, baths: 3, area: 2890 },
  },
];

export default function Featured() {
  return (
    <section id="featured" className="relative py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-900">Featured Residences</h3>
            <p className="text-gray-600 mt-2">Thoughtfully selected homes ready to be experienced.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-black transition">Request a private tour</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {listings.map((home) => (
            <article key={home.id} className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={home.image} alt={home.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs bg-black/40 backdrop-blur px-3 py-1 rounded-full">{home.location}</div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-gray-900">{home.title}</h4>
                <div className="mt-3 flex items-center gap-4 text-gray-600">
                  <span className="inline-flex items-center gap-1 text-sm"><BedDouble size={16} /> {home.specs.beds} bd</span>
                  <span className="inline-flex items-center gap-1 text-sm"><Bath size={16} /> {home.specs.baths} ba</span>
                  <span className="inline-flex items-center gap-1 text-sm"><Maximize2 size={16} /> {home.specs.area.toLocaleString()} sq ft</span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <button className="text-gray-900 font-medium">See details</button>
                  <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition">Book</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

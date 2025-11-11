export default function Values() {
  const values = [
    {
      title: "Human-centered design",
      desc: "Homes that feel like they were made just for you—because they are.",
    },
    {
      title: "Enduring materials",
      desc: "Stone, wood, glass, and steel—curated for elegance and longevity.",
    },
    {
      title: "Light as a feature",
      desc: "Floor-to-ceiling windows framing the city with warmth and clarity.",
    },
  ];

  return (
    <section id="values" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">{v.title}</h4>
              <p className="text-gray-600 text-lg leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Testimonials() {
  const quotes = [
    {
      quote:
        "Our home feels like a quiet pause above the city—a place where evenings have a softness to them.",
      author: "Elena & Marco",
    },
    {
      quote:
        "Every corner feels intentional. The architecture makes the simplest moments feel cinematic.",
      author: "Priya S.",
    },
    {
      quote:
        "From first viewing to moving day, the experience was thoughtful and seamless.",
      author: "Daniel K.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 text-center mb-12">What residents say</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure key={i} className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <blockquote className="text-gray-700 text-lg leading-relaxed">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-gray-900 font-medium">— {q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

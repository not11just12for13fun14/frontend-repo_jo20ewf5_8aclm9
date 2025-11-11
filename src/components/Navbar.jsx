import { Menu, Phone, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg flex items-center justify-between px-5 py-3">
          <a href="#home" className="text-white text-lg font-semibold tracking-wide">Aurelia Estates</a>
          <nav className="hidden md:flex items-center gap-6 text-white/90">
            <a href="#story" className="hover:text-white transition">Story</a>
            <a href="#featured" className="hover:text-white transition">Residences</a>
            <a href="#values" className="hover:text-white transition">Philosophy</a>
            <a href="#testimonials" className="hover:text-white transition">Voices</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-xl transition">
              <Phone size={16} /> <span className="text-sm">Book a viewing</span>
            </a>
          </div>
          <button className="md:hidden text-white/90 p-2 rounded-lg hover:bg-white/10">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}

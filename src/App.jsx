import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Featured from './components/Featured';
import Values from './components/Values';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Story />
      <Featured />
      <Values />
      <Testimonials />
      <CTA />
      <footer className="py-10 text-center text-sm text-gray-500 bg-white border-t">© {new Date().getFullYear()} Aurelia Estates. All rights reserved.</footer>
    </div>
  );
}

export default App;

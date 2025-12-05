import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-charcoal-800 antialiased selection:bg-gold-400 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <PracticeAreas />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Áreas', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Scale className={`h-8 w-8 ${isScrolled ? 'text-gold-500' : 'text-gold-400'}`} />
            <div className={`font-serif font-bold text-xl leading-none ${isScrolled ? 'text-charcoal-900' : 'text-charcoal-900 md:text-white'}`}>
              <span className="block">TOMIELLO &</span>
              <span className="block">SOLDAINI</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm tracking-wide uppercase transition-colors hover:text-gold-500 ${isScrolled ? 'text-charcoal-800' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gold-500 hover:bg-gold-600 text-white px-5 py-2 rounded-sm font-semibold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-charcoal-800' : 'text-gold-500'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-charcoal-800 font-medium hover:text-gold-500 text-lg border-b border-gray-50 pb-2"
              >
                {link.name}
              </a>
            ))}
             <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-gold-500 text-center text-white px-5 py-3 rounded-sm font-semibold mt-4"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
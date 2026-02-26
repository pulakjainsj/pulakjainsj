import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('hero')}
            className="font-semibold hover:text-primary/80 transition-colors text-[20px]"
          >
            Portfolio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary/80 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary/80 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('photography')} className="hover:text-primary/80 transition-colors">
              Photography
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-primary/80 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary/80 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary/80 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-left hover:text-primary/80 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('photography')} className="text-left hover:text-primary/80 transition-colors">
              Photography
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-left hover:text-primary/80 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary/80 transition-colors">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useTheme from '@/hooks/use-theme';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, setTheme } = useTheme();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
        const scrollY = window.scrollY;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id') || 'hero');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];
  
  const socialLinks = [
    { href: 'https://github.com/developersection', icon: <Github size={18} />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/muhammad-ahmad-bse', icon: <Linkedin size={18} />, label: 'LinkedIn' },
    { href: 'mailto:ahmadshahbaz1214@gmail.com', icon: <Mail size={18} />, label: 'Email' },
  ];
  
  return (
    <header className={cn(
      'fixed w-full top-0 z-50 transition-all duration-300',
      scrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold relative group">
          <span className="font-mono text-primary">
            <span className="text-accent">{'{'}</span>
            <span className="animate-pulse">Ahmad</span>
            <span className="text-accent">{'}'}</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-muted-foreground hover:text-primary transition-colors relative group",
                activeSection === link.href.replace('#', '') ? 'text-accent' : ''
              )}
            >
              {link.label}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                activeSection === link.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
              )}></span>
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform duration-200"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
          <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10 hover:text-accent-foreground">
            <a href="#contact">Get in touch</a>
          </Button>
          <Button variant="ghost" size="sm" className="text-accent hover:bg-accent/10 flex items-center gap-1" asChild>
            <a href="https://drive.google.com/file/d/13FmY-Dlvn68aV08SkihnepMUhjE63SwD" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Download size={16} />
              <span>Resume</span>
            </a>
          </Button>
        </div>
        
        <button onClick={toggleMenu} className="md:hidden text-primary">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 flex flex-col animate-fade-in">
          <nav className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="text-primary text-2xl font-medium p-2"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center space-x-6 pt-6 border-t border-border">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors p-2"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/13FmY-Dlvn68aV08SkihnepMUhjE63SwD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors p-2 flex items-center gap-1"
              >
                <Download size={18} /> Resume
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const RESUME_URL = 'https://drive.google.com/file/d/17VxqvtY1mTkhKWBXiGnl23cAjEoeGoLr/view';

const navLinks = [
  { href: '#about', label: 'About', n: '01' },
  { href: '#skills', label: 'Skills', n: '02' },
  { href: '#experience', label: 'Work', n: '03' },
  { href: '#projects', label: 'Projects', n: '04' },
  { href: '#certifications', label: 'Credentials', n: '05' },
  { href: '#contact', label: 'Contact', n: '06' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/60' : 'bg-transparent'
      )}
    >
      <div className="container-narrow flex h-16 items-center justify-between">
        <a href="#hero" className="group flex items-center gap-2" aria-label="Home">
          <span className="font-display text-xl font-medium tracking-tight">Ahmad</span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-125" />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex items-baseline gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="font-mono text-[10px] text-accent-foreground/50 group-hover:text-accent">{l.n}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            Resume
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 top-16 bottom-0 bg-background border-t border-border transition-all duration-300',
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        )}
      >
        <nav className="container-narrow py-8 flex flex-col">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline justify-between border-b border-border py-5"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span className="font-display text-3xl font-medium">{l.label}</span>
              <span className="font-mono text-xs text-muted-foreground">{l.n}</span>
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-base font-medium text-background"
          >
            Download Resume
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

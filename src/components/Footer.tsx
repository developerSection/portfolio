import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  const links = [
    { href: 'https://github.com/developersection', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/muhammadahmad-bse', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:ahmadshahbaz1214@gmail.com', icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="border-t border-border py-10">
      <div className="container-narrow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg">Ahmad</span>
          <span className="h-1 w-1 rounded-full bg-accent" />
          <span className="text-xs text-muted-foreground">© {year} · Crafted with care</span>
        </div>
        <div className="flex items-center gap-4">
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={l.label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

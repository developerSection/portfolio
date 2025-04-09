
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { 
      href: 'https://github.com/developersection', 
      icon: <Github size={18} />, 
      label: 'GitHub' 
    },
    { 
      href: 'https://linkedin.com/in/muhammad-ahmad-bse', 
      icon: <Linkedin size={18} />, 
      label: 'LinkedIn' 
    },
    { 
      href: 'mailto:ahmadshahbaz1214@gmail.com', 
      icon: <Mail size={18} />, 
      label: 'Email' 
    },
  ];

  return (
    <footer className="py-8 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {year} Muhammad Ahmad. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>
            Built with modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

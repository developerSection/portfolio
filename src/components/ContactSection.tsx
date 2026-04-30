import React from 'react';
import Reveal from './Reveal';
import { Mail, Github, Linkedin, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const channels = [
  { label: 'Email', value: 'ahmadshahbaz1214@gmail.com', href: 'mailto:ahmadshahbaz1214@gmail.com', icon: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/muhammadahmad-bse', href: 'https://linkedin.com/in/muhammadahmad-bse', icon: Linkedin },
  { label: 'GitHub', value: 'github.com/developersection', href: 'https://github.com/developersection', icon: Github },
  { label: 'Phone', value: '+92 305 5373599', href: 'tel:+923055373599', icon: Phone },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-border">
      <div className="container-narrow">
        <Reveal className="section-kicker">
          <span className="section-num">— 07</span>
          <span className="eyebrow">Contact</span>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[1] tracking-tight text-balance">
            Have a system worth <em className="text-accent-foreground/90">building</em>?
            <br />
            <a
              href="mailto:ahmadshahbaz1214@gmail.com"
              className="inline-flex items-center gap-3 mt-3 group"
            >
              <span className="border-b-2 border-foreground/30 group-hover:border-foreground transition-colors">
                Let's talk.
              </span>
              <ArrowUpRight className="h-12 w-12 sm:h-16 sm:w-16 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" strokeWidth={1.5} />
            </a>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group bg-card p-6 sm:p-7 flex items-center justify-between gap-4 hover:bg-accent/10 transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shrink-0">
                      <Icon size={16} />
                    </span>
                    <div className="min-w-0">
                      <p className="eyebrow">{c.label}</p>
                      <p className="font-medium truncate">{c.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="shrink-0 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin size={14} /> Based in Islamabad, Pakistan · Open to remote
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;

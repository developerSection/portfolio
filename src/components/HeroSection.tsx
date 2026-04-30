import React, { useEffect, useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';

const lines = [
  { prompt: '~/ahmad', cmd: 'whoami', out: 'Muhammad Ahmad — Senior Backend Engineer' },
  { prompt: '~/ahmad', cmd: 'cat about.md', out: '5+ yrs building production fintech & e-commerce systems' },
  { prompt: '~/ahmad', cmd: 'ls stack/', out: 'node.js  python  postgres  aws  kafka  redis  ai/' },
  { prompt: '~/ahmad', cmd: 'status --now', out: 'Available for senior backend & staff roles' },
];

const HeroSection = () => {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (step >= lines.length) return;
    const cmd = lines[step].cmd;
    let i = 0;
    setTyped('');
    const id = setInterval(() => {
      i++;
      setTyped(cmd.slice(0, i));
      if (i >= cmd.length) {
        clearInterval(id);
        setTimeout(() => setStep((s) => s + 1), 550);
      }
    }, 55);
    return () => clearInterval(id);
  }, [step]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden grain"
    >
      {/* Soft warm gradient backdrop */}
      <div className="absolute inset-0 -z-10" style={{ background: 'var(--gradient-warm)' }} />
      <div className="absolute -top-40 -right-32 -z-10 h-[420px] w-[420px] rounded-full blur-3xl"
           style={{ background: 'hsl(var(--accent) / 0.18)' }} />

      <div className="container-narrow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left — typographic statement */}
          <div className="lg:col-span-7 space-y-7">
            <div className="flex items-center gap-3 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="eyebrow">Available for new roles · 2026</span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,7.5vw,5rem)] font-medium leading-[1] tracking-tight text-balance animate-fade-in" style={{ animationDelay: '80ms' }}>
              Backend systems,
              <br />
              <span className="italic text-foreground/80">crafted</span> with{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">care.</span>
                <span className="absolute inset-x-0 bottom-1 h-3 -z-0" style={{ background: 'hsl(var(--accent) / 0.45)' }} />
              </span>
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed text-pretty animate-fade-in" style={{ animationDelay: '160ms' }}>
              I'm <span className="text-foreground font-medium">Muhammad Ahmad</span>, a Senior Backend Engineer
              shipping production fintech, e-commerce and AI-driven platforms for thousands of users —
              with Node.js, Python and AWS.
            </p>

            <div className="flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: '240ms' }}>
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
              >
                See my work
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="#contact" className="link-arrow text-sm">
                Get in touch →
              </a>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin size={12} /> Islamabad, Pakistan
              </span>
            </div>
          </div>

          {/* Right — terminal card */}
          <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: '320ms' }}>
            <div className="terminal text-[13px] sm:text-sm">
              <div className="terminal-bar">
                <span className="terminal-dot" style={{ background: '#ff5f57' }} />
                <span className="terminal-dot" style={{ background: '#febc2e' }} />
                <span className="terminal-dot" style={{ background: '#28c840' }} />
                <span className="ml-3 font-mono text-xs text-white/40">ahmad@portfolio — zsh</span>
              </div>
              <div className="p-5 sm:p-6 font-mono text-white/85 space-y-3 min-h-[280px]">
                {lines.slice(0, step).map((l, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex gap-2">
                      <span className="text-accent">➜</span>
                      <span className="text-white/50">{l.prompt}</span>
                      <span className="text-white">{l.cmd}</span>
                    </div>
                    <div className="pl-6 text-white/70">{l.out}</div>
                  </div>
                ))}
                {step < lines.length && (
                  <div className="flex gap-2">
                    <span className="text-accent">➜</span>
                    <span className="text-white/50">{lines[step].prompt}</span>
                    <span className="text-white">
                      {typed}
                      <span className="inline-block w-2 h-4 align-middle bg-accent ml-0.5 animate-caret-blink" />
                    </span>
                  </div>
                )}
                {step >= lines.length && (
                  <div className="flex gap-2">
                    <span className="text-accent">➜</span>
                    <span className="text-white/50">~/ahmad</span>
                    <span className="inline-block w-2 h-4 align-middle bg-accent ml-0.5 animate-caret-blink" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

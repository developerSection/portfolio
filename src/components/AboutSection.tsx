import React from 'react';
import Reveal from './Reveal';

const focus = [
  'Backend Architecture',
  'Distributed Systems',
  'Fintech & Ledgers',
  'Event-Driven Workflows',
  'AI / RAG Integrations',
  'AWS & DevOps',
];

const stats = [
  { k: '5+', v: 'years shipping production' },
  { k: '50%', v: 'AWS infra cost reduction' },
  { k: '1.2k+', v: 'suppliers onboarded' },
  { k: '<100ms', v: 'avg API latency' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-narrow">
        <Reveal className="section-kicker">
          <span className="section-num">— 01</span>
          <span className="eyebrow">About</span>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8 space-y-6">
            <Reveal>
              <p className="font-display text-2xl sm:text-3xl md:text-[2.25rem] leading-[1.2] text-foreground text-balance">
                I take complex requirements from <em className="text-accent-foreground/90">design to deployment</em> —
                building reliable, secure backends that scale with the business.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Over the past five years I've led backend architecture for ledger-based financial systems,
                AI-driven workflows and real-time integrations. I'm happiest when designing service
                boundaries, optimising hot paths, and turning messy product specs into clean, observable
                systems.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-wrap gap-2 pt-2">
                {focus.map((f) => (
                  <span key={f} className="pill">{f}</span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={160}>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
                {stats.map((s) => (
                  <div key={s.v}>
                    <dt className="font-display text-3xl sm:text-4xl font-medium tracking-tight">{s.k}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground leading-snug">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

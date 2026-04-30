import React from 'react';
import Reveal from './Reveal';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 sm:py-32 border-t border-border bg-secondary/40">
      <div className="container-narrow">
        <Reveal className="section-kicker">
          <span className="section-num">— 06</span>
          <span className="eyebrow">Education</span>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline">
            <div className="md:col-span-3">
              <span className="font-mono text-xs text-muted-foreground tabular-nums">2016 — 2020</span>
            </div>
            <div className="md:col-span-9 space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl font-medium leading-tight">
                BSc, Software Engineering
                <span className="text-muted-foreground"> · </span>
                <span className="italic text-foreground/85">COMSATS University Islamabad</span>
              </h3>
              <p className="text-muted-foreground text-pretty max-w-2xl">
                Foundation in software engineering principles, distributed systems and algorithms —
                with a final year project on drone-based object detection using a self-trained AI model.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="pill">CGPA 3.30 / 4.00</span>
                <span className="pill">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EducationSection;

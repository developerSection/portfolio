import React from 'react';
import Reveal from './Reveal';

interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

const experiences: Experience[] = [
  {
    position: 'Senior Backend Engineer',
    company: 'RFZ Digital',
    period: 'Jan 2025 — Present',
    location: 'Islamabad, PK',
    summary:
      'Leading backend for a fintech platform, an AI-powered driver assistant and a personal finance app.',
    bullets: [
      'Built Rewoa, a fintech platform for fractional real-estate investment with fiat & crypto, using Node.js, Express and PostgreSQL with a double-entry ledger.',
      'Deployed on AWS ECS with Docker, ALB and Auto Scaling Groups; integrated Kafka for event-driven notifications and portfolio lifecycle.',
      'Built Money Right (NestJS + PostgreSQL) with Open Banking integration for transaction aggregation and AI-driven expense categorisation via OpenAI + AWS SQS.',
      'Created Universal Navigation — an AI driver assistance system with real-time traffic, road rules and route optimisation using Node.js, WebSockets and Redis with sub-100ms latency.',
      'Developed a serverless accounting platform (Python, FastAPI, AWS SAM) supporting expenses, invoices and automated monthly reporting.',
    ],
    stack: ['Node.js', 'NestJS', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Kafka', 'AWS ECS', 'AWS SAM', 'OpenAI'],
  },
  {
    position: 'Software Engineer',
    company: 'Markaz Technologies (YC W22)',
    period: 'Jun 2023 — Dec 2024',
    location: 'Islamabad, PK',
    summary:
      'Owned backend architecture for a GCC dropshipping platform serving thousands of concurrent users.',
    bullets: [
      'Led backend on AWS Lambda + Python + GraphQL + MongoDB with a microservices architecture.',
      'Reduced AWS infrastructure cost by 50% through rightsizing and code-level optimisations.',
      'Delivered production system in 3 months with 95% operational efficiency.',
      'Built a Shopify integration (Node.js) automating inventory sync and order management — saving 20+ hours/week per user.',
      'Implemented event-driven workflows with Lambda + SQS, scaling to 1,200+ suppliers.',
      'Developed compression algorithm reducing media size 5× and load times by 75%.',
    ],
    stack: ['AWS Lambda', 'Python', 'GraphQL', 'MongoDB', 'SQS', 'Node.js', 'Shopify API'],
  },
  {
    position: 'Software Engineer (MERN)',
    company: 'Neuron Solutions',
    period: 'Jun 2022 — May 2023',
    location: 'Islamabad, PK',
    summary: 'Built NVNTRI, a multi-channel inventory platform for Shopify, WooCommerce & Daraz.',
    bullets: [
      'Implemented real-time stock sync across channels with optimised queries and Redis caching, reducing discrepancies by 30%.',
    ],
    stack: ['Node.js', 'MongoDB', 'Redis', 'Shopify', 'WooCommerce'],
  },
  {
    position: 'Software Engineer (MEAN)',
    company: 'ePatronus IT Solutions',
    period: 'Sep 2020 — Jun 2022',
    location: 'Islamabad, PK',
    summary: 'Built NICOP Facilitation App and Textilion tailoring management system.',
    bullets: [
      'Implemented secure authentication, authorisation and data validation for sensitive user information.',
    ],
    stack: ['Angular', 'Node.js', 'MongoDB', 'Express'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-border">
      <div className="container-narrow">
        <Reveal className="section-kicker">
          <span className="section-num">— 03</span>
          <span className="eyebrow">Experience</span>
        </Reveal>

        <Reveal>
          <h2 className="section-title mb-14 text-balance max-w-3xl">
            Where I've shipped <em className="text-accent-foreground/90">real systems</em>.
          </h2>
        </Reveal>

        <ol className="space-y-px">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 80}>
              <li className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-border">
                {/* Period */}
                <div className="md:col-span-3 flex md:flex-col md:items-start items-center justify-between gap-2">
                  <span className="font-mono text-xs text-muted-foreground tabular-nums">{exp.period}</span>
                  <span className="font-mono text-[11px] text-muted-foreground/70">{exp.location}</span>
                </div>

                {/* Body */}
                <div className="md:col-span-9 space-y-4">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-medium leading-tight">
                      {exp.position}
                      <span className="text-muted-foreground"> · </span>
                      <span className="italic text-foreground/85">{exp.company}</span>
                    </h3>
                    <p className="mt-2 text-muted-foreground text-pretty">{exp.summary}</p>
                  </div>

                  <ul className="space-y-2 text-sm text-foreground/80 leading-relaxed">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="relative pl-5">
                        <span className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.stack.map((s) => (
                      <span key={s} className="pill text-[11px]">{s}</span>
                    ))}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;

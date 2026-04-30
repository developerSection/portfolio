import React from 'react';
import Reveal from './Reveal';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  domain: string;
  description: string;
  stack: string[];
  link?: string;
  highlight?: boolean;
}

const projects: Project[] = [
  {
    title: 'Rewoa',
    domain: 'Fintech',
    description:
      'Fractional real-estate investment platform with fiat & crypto, double-entry ledger, JWT/RBAC and Kafka-driven portfolio lifecycle.',
    stack: ['Node.js', 'PostgreSQL', 'AWS ECS', 'Kafka'],
    highlight: true,
  },
  {
    title: 'Money Right',
    domain: 'Personal Finance',
    description:
      'Open Banking aggregator with AI-driven expense categorisation and goal-based savings recommendations, async-processed via SQS.',
    stack: ['NestJS', 'PostgreSQL', 'OpenAI', 'AWS SQS'],
    highlight: true,
  },
  {
    title: 'Universal Navigation',
    domain: 'AI / Mobility',
    description:
      'AI-powered driver assistance — real-time traffic, road rules and context-aware routing with sub-100ms latency over WebSockets.',
    stack: ['Node.js', 'WebSockets', 'Redis', 'AI Models'],
  },
  {
    title: 'Accounting Platform',
    domain: 'SaaS',
    description:
      'Serverless accounting suite for expenses, invoices and automated monthly reporting on a fully event-driven architecture.',
    stack: ['Python', 'FastAPI', 'AWS SAM', 'Lambda'],
  },
  {
    title: 'Markaz Dropshipping',
    domain: 'E-commerce (GCC)',
    description:
      'Microservices backend serving thousands of concurrent users; reduced AWS infra cost by 50% through architecture and code-level wins.',
    stack: ['AWS Lambda', 'Python', 'GraphQL', 'MongoDB'],
  },
  {
    title: 'NVNTRI',
    domain: 'Inventory',
    description:
      'Multi-channel inventory platform syncing stock across Shopify, WooCommerce and Daraz with Redis-cached queries.',
    stack: ['Node.js', 'MongoDB', 'Redis'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-border bg-secondary/40">
      <div className="container-narrow">
        <Reveal className="section-kicker">
          <span className="section-num">— 04</span>
          <span className="eyebrow">Selected Projects</span>
        </Reveal>

        <Reveal>
          <h2 className="section-title mb-14 text-balance max-w-3xl">
            Things I've designed, built and shipped.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="card-warm group p-6 sm:p-7 h-full flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="eyebrow">{p.domain}</span>
                    <h3 className="mt-1 font-display text-2xl font-medium leading-tight">{p.title}</h3>
                  </div>
                  {p.highlight && (
                    <span className="pill-accent">★ Featured</span>
                  )}
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="pill text-[11px]">{s}</span>
                  ))}
                </div>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                  >
                    Visit <ArrowUpRight size={14} />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

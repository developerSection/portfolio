import React from 'react';
import Reveal from './Reveal';
import { Award, ExternalLink, Clock } from 'lucide-react';

interface Cert {
  title: string;
  issuer: string;
  status: 'Issued' | 'In Progress';
  detail: string;
  topics: string[];
  link?: string;
  year: string;
}

const certs: Cert[] = [
  {
    title: 'MongoDB Skill Badges',
    issuer: 'MongoDB University · Verified on Credly',
    status: 'Issued',
    year: '2026',
    detail: '7 professional skill badges covering AI, search and data modelling.',
    topics: [
      'RAG Apps with MongoDB & LangChain',
      'AI-Powered Search (Atlas Vector Search)',
      'MongoDB Design Patterns & Anti-Patterns',
      'AI Agents in MongoDB',
    ],
    link: 'https://credly.com/users/muhammad.ahmad',
  },
  {
    title: 'AWS Certified Solutions Architect — Associate',
    issuer: 'Amazon Web Services',
    status: 'In Progress',
    year: 'Q3 2026',
    detail: 'Resilient, performant, secure and cost-optimised architectures on AWS.',
    topics: [
      'High availability & fault tolerance',
      'Compute, storage & database design',
      'IAM, VPC & encryption',
      'Cost optimisation',
    ],
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 sm:py-32 border-t border-border">
      <div className="container-narrow">
        <Reveal className="section-kicker">
          <span className="section-num">— 05</span>
          <span className="eyebrow">Credentials</span>
        </Reveal>

        <Reveal>
          <h2 className="section-title mb-14 text-balance max-w-3xl">
            Always learning, always <em className="text-accent-foreground/90">certifying</em>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className="card-warm p-6 sm:p-8 h-full flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                      style={{ background: 'hsl(var(--accent) / 0.2)' }}
                    >
                      <Award size={18} className="text-foreground" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium leading-tight">{c.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{c.issuer}</p>
                    </div>
                  </div>
                  <span
                    className={
                      c.status === 'Issued'
                        ? 'pill-accent'
                        : 'pill inline-flex items-center gap-1'
                    }
                  >
                    {c.status === 'In Progress' && <Clock size={11} />}
                    {c.status} · {c.year}
                  </span>
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.detail}</p>

                <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                  {c.topics.map((t) => (
                    <li key={t} className="relative pl-4">
                      <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent" />
                      {t}
                    </li>
                  ))}
                </ul>

                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium link-arrow"
                  >
                    View on Credly <ExternalLink size={13} />
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

export default CertificationsSection;

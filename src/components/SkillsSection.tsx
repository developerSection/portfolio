import React from 'react';
import Reveal from './Reveal';

interface Group {
  title: string;
  items: string[];
}

const groups: Group[] = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'SQL'] },
  { title: 'Backend & APIs', items: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'REST', 'GraphQL', 'WebSockets'] },
  { title: 'Cloud & DevOps', items: ['AWS (EC2, ECS, RDS, Lambda, S3, ALB, API GW)', 'Docker', 'Kubernetes', 'CI/CD', 'Serverless Framework', 'AWS SAM', 'CloudFormation'] },
  { title: 'Messaging & Eventing', items: ['Kafka', 'AWS SQS', 'AWS SNS', 'EventBridge'] },
  { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'Schema Design', 'Indexing'] },
  { title: 'Architecture & Security', items: ['Microservices', 'Event-Driven', 'System Design', 'OAuth2', 'JWT', 'RBAC'] },
  { title: 'AI & ML', items: ['RAG Apps', 'Vector Search', 'AI Agents', 'LangChain', 'OpenAI API'] },
  { title: 'Testing & Tools', items: ['Jest', 'pytest', 'Git', 'Postman', 'Swagger', 'Jira', 'Agile/Scrum'] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-border bg-secondary/40">
      <div className="container-narrow">
        <Reveal className="section-kicker">
          <span className="section-num">— 02</span>
          <span className="eyebrow">Skills</span>
        </Reveal>

        <Reveal>
          <h2 className="section-title mb-12 text-balance max-w-3xl">
            A toolkit chosen for <em className="text-accent-foreground/90">reliability</em> and reach.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <div className="bg-card p-6 sm:p-8 h-full">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="font-display text-lg font-medium">{g.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span key={s} className="pill text-[11px]">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


import React, { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Server, Database, Cloud, ShoppingBag } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isInView } = useInView(ref, { once: true, threshold: 0.1 });

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python"],
      icon: <Code className="h-6 w-6 text-accent" />
    },
    {
      title: "Frameworks",
      skills: ["NodeJS", "ExpressJS", "Angular", "React", "NestJS"],
      icon: <Server className="h-6 w-6 text-accent" />
    },
    {
      title: "Database and ORM/ODMs",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose", "Sequelize"],
      icon: <Database className="h-6 w-6 text-accent" />
    },
    {
      title: "Other Technologies",
      skills: ["AWS Serverless", "REST APIs", "GraphQL", "Git", "GitHub", "CI/CD Pipelines"],
      icon: <Cloud className="h-6 w-6 text-accent" />
    },
    {
      title: "Software and Integrations",
      skills: ["WooCommerce", "Shopify", "Daraz/Lazada", "Stripe", "Mamopay", "Fireblocks", "BLANK Ledger", "IDWise", "Mapbox", "FFmpeg"],
      icon: <ShoppingBag className="h-6 w-6 text-accent" />
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-secondary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="section-heading">Technical Skills</h2>
        
        <div 
          ref={ref} 
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
            isInView ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`}
        >
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`p-6 glass-card overflow-hidden hover-lift ${
                isInView ? 'animate-slide-up' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 p-2 rounded-lg bg-accent/10">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-accent/20 transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

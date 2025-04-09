
import React, { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageSquare, Brain, Clock } from 'lucide-react';

interface SoftSkill {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SoftSkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const softSkills: SoftSkill[] = [
    {
      title: "Leadership & Collaboration",
      description: "Effectively drive team success through clear direction and fostering a collaborative environment.",
      icon: <Users className="h-8 w-8 text-accent" />
    },
    {
      title: "Communication",
      description: "Articulate technical concepts clearly in discussions and presentations to both technical and non-technical stakeholders.",
      icon: <MessageSquare className="h-8 w-8 text-accent" />
    },
    {
      title: "Problem Solving",
      description: "Tackle complex problems with analytical and strategic thinking to develop elegant solutions.",
      icon: <Brain className="h-8 w-8 text-accent" />
    },
    {
      title: "Adaptability",
      description: "Quickly adapt to new technologies and changing requirements to maintain project momentum.",
      icon: <Clock className="h-8 w-8 text-accent" />
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-secondary/5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">Soft Skills</h2>
        
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
            isInView ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`}
        >
          {softSkills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className={`glass-card ${
                isInView ? 'animate-slide-up' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="shrink-0 mt-1">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;

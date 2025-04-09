
import React, { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Star, ExternalLinkIcon } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  highlight?: boolean;
  url?: string;
}

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isInView } = useInView(ref, { once: true, threshold: 0.1 });

  const projects: Project[] = [
    {
      title: "Fintech Real Estate Investment App",
      description: "Enabling users to invest in real estate using crypto and earn profits. Features secure blockchain transactions and real-time reporting.",
      technologies: ["Node.js", "MongoDB", "AWS", "Blockchain", "BLANK Ledger"],
      url: "https://rewoa.com",
      highlight: true
    },
    {
      title: "Universal Navigation App",
      description: "Real-time traffic alerts, road condition warnings, and speed camera notifications for drivers with focus on performance.",
      technologies: ["WebSockets", "MongoDB", "AWS", "Mapbox", "Real-time APIs"],
    },
    {
      title: "Smile App",
      description: "Sends uplifting messages and reminders to smile, focusing on user experience and clean code architecture.",
      technologies: ["Node.js", "Express", "MongoDB", "RESTful API"]
    },
    {
      title: "Dropshipping Platform",
      description: "Web app for dropshippers in GCC region with integrations to various suppliers and marketplaces.",
      technologies: ["AWS", "GraphQL", "MongoDB", "WebSockets"],
      highlight: true,
      url: "dropshipping.markaz.app"
    },
    {
      title: "Inventory Management System",
      description: "All-in-one solution integrating with Shopify, WooCommerce, and Daraz for streamlined stock management.",
      technologies: ["MongoDB", "Node.js", "Express", "Integration APIs"],
      // githubLink: "https://github.com/developersection/nvntrl-demo",
      url: "nvntri.com"
    },
    {
      title: "NICOP Facilitation App",
      description: "Facilitation application for overseas identification with streamlined user experience.",
      technologies: ["Angular", "Node.js", "MongoDB"],
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-secondary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-40 w-72 h-72 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="section-heading">Notable Projects</h2>
        
        <div 
          ref={ref} 
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
            isInView ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`}
        >
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`overflow-hidden hover:shadow-xl transition-all hover-lift ${
                project.highlight 
                  ? 'border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent' 
                  : 'glass-card'
              } ${
                isInView ? 'animate-slide-up' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-semibold flex items-center">
                    {project.highlight && <Star className="h-4 w-4 mr-2 text-accent fill-accent" />}
                    <a href={project.url} target='_blank'>{project.title}</a> {project.url && <ExternalLinkIcon className="h-4 w-4 mr-2 ml-2 text-accent" />}
                  </CardTitle>
                  <div className="flex space-x-2">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map(tech => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs bg-secondary/50 hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

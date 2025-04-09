
import React, { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isInView } = useInView(ref, { once: true, threshold: 0.1 });

  const experiences: Experience[] = [
    {
      position: "Senior Backend Engineer",
      company: "RFZ Digital",
      location: "Islamabad, Pakistan",
      period: "January 2025 – Present",
      description: [
        "Developed a fintech app enabling users to invest in real estate using crypto and earn profits, ensuring scalability and secure transactions.",
        "Built a driver tracking and communication app with real-time traffic alerts, road condition warnings, and speed camera notifications, focusing on performance and reliability.",
        "Created a wellness app that sends reminders to smile and uplifting messages, emphasizing clean code, scalability, and user experience."
      ],
      technologies: ["Node.js", "AWS", "MongoDB", "Blockchain", "WebSockets"]
    },
    {
      position: "Software Engineer",
      company: "Markaz Technologies Pvt. Ltd",
      location: "Islamabad, Pakistan",
      period: "June 2023 – December 2024",
      description: [
        "Led backend development for a dropshipping web app in GCC, using AWS, WebSockets, GraphQL, and MongoDB to achieve 95% operational efficiency.",
        "Built a Shopify integration app for dropshippers, streamlining inventory sync and order handling, saving 20+ hours per week.",
        "Automated product listing, cutting time by 50%, enabling 1200+ suppliers to onboard efficiently.",
        "Developed a lossless compression algorithm, reducing file sizes 5x and load times by 75% for better UX."
      ],
      technologies: ["AWS Lambda", "GraphQL", "MongoDB", "WebSockets", "Shopify API"]
    },
    {
      position: "Full Stack Developer (MERN)",
      company: "Neuron Solutions",
      location: "Islamabad, Pakistan",
      period: "June 2022 – May 2023",
      description: [
        "NVNTRL Inventory Management Tool: Developed and maintained NVNTRL, an all-in-one inventory management solution that integrates seamlessly with Shopify, WooCommerce, and Daraz. Built using MongoDB and Node.js, the tool streamlines stock management, increasing multi-channel efficiency by 30% and unlocking the capability to manage multiple e-commerce stores with a single login."
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js", "Shopify", "WooCommerce"]
    },
    {
      position: "Full Stack Developer (MEAN)",
      company: "ePatronus IT Solutions",
      location: "Islamabad, Pakistan",
      period: "September 2020 – June 2022",
      description: [
        "Built robust, scalable applications, including NICOP Facilitation App for overseas identification and Textilion for tailoring order management. Utilized Angular and Node.js for seamless user experiences and deployed to Digital ocean, achieving a 90% client satisfaction rate."
      ],
      technologies: ["Angular", "Node.js", "MongoDB", "ExpressJS", "DigitalOcean"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-6 relative">
      {/* Background elements */}
      <div className="absolute top-40 right-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-56 h-56 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="section-heading">Work Experience</h2>
        
        <div 
          ref={ref} 
          className={`relative space-y-12 pl-6 before:absolute before:left-0 before:top-2 before:h-[calc(100%-2rem)] before:w-px before:-ml-0.5 before:bg-gradient-to-b before:from-accent before:via-accent/50 before:to-transparent ${
            isInView ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`}
        >
          {experiences.map((exp, index) => (
            <div 
              key={`${exp.company}-${index}`}
              className={`relative ${
                isInView ? 'animate-slide-up' : ''
              }`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <span className="absolute -left-[22px] flex h-4 w-4 items-center justify-center rounded-full bg-accent shadow-[0_0_10px_4px_rgba(139,92,246,0.3)] -mt-2 z-10"></span>
              
              <Card className="glass-card p-6 transition-all hover:shadow-glow hover:border-accent/30 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                  <h3 className="text-lg font-semibold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                    {exp.position} <span className="text-accent">@</span> {exp.company}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs font-normal">
                      {exp.location}
                    </Badge>
                    <Badge variant="secondary" className="text-xs font-normal">
                      {exp.period}
                    </Badge>
                  </div>
                </div>
                
                <ul className="space-y-3 ml-4 list-disc text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="skill" 
                        className="text-xs bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

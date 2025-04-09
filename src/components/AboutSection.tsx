
import React, { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isInView } = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section id="about" className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-secondary/5 z-0"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="section-heading">About Me</h2>
        
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 ${
            isInView ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`}
        >
          <div className="md:col-span-2 space-y-4">
            <p className="leading-relaxed">
              I'm Muhammad Ahmad, a Software Engineer based in Islamabad, Pakistan with 5 years of experience
              in developing scalable backend systems. I specialize in Ecommerce and Fintech application development.
            </p>
            <p className="leading-relaxed">
              My approach to software development is focused on solving complex challenges collaboratively, 
              building features that enhance user experience and drive growth. I lead teams with a focus on innovation,
              delivering strategic solutions in dynamic environments.
            </p>
            
            <div className="py-4">
              <h3 className="text-lg font-semibold mb-2 text-primary">Core Focus Areas</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-accent/20 hover:bg-accent/30 text-primary">Backend Systems</Badge>
                <Badge className="bg-accent/20 hover:bg-accent/30 text-primary">API Design</Badge>
                <Badge className="bg-accent/20 hover:bg-accent/30 text-primary">Database Optimization</Badge>
                <Badge className="bg-accent/20 hover:bg-accent/30 text-primary">Payment Integrations</Badge>
                <Badge className="bg-accent/20 hover:bg-accent/30 text-primary">E-commerce Systems</Badge>
              </div>
            </div>
            
            <p className="leading-relaxed">
              I'm passionate about writing clean, efficient code and actively participate in code reviews
              to ensure quality and best practices. My work spans across multiple domains including fintech,
              e-commerce, dropshipping solutions, and inventory management systems.
            </p>
          </div>
          
          <div className="flex justify-center items-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent/50 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/uploads/MUHAMMAD-AHMAD-DP.jpg" 
                  alt="Muhammad Ahmad" 
                  className="rounded-lg w-full max-w-[240px] border-2 border-accent/20 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

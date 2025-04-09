
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedName, setTypedName] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullName = 'Muhammad Ahmad';
  
  useEffect(() => {
    setIsVisible(true);
    
    // Typing effect for the name - more gradual
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setTypedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 200);
    
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  // Skill pills data
  const skills = [
    { name: 'JavaScript', color: 'yellow' },
    { name: 'TypeScript', color: 'blue' },
    { name: 'Python', color: 'green' },
    { name: 'MongoDB', color: 'green' },
    { name: 'AWS Serverless', color: 'orange' },
    { name: 'Microservices', color: 'purple' }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-16 relative overflow-hidden">
      {/* Wavy dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-wave-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {/* First wave layer */}
          <svg className="absolute w-full min-w-[1200px] h-[80vh] top-[15vh] animate-wave1" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
            <path 
              fill="#2e224f"
              d="M0,192 C220,100 440,100 660,192 C880,290 1100,290 1320,192 L1320,500 L0,500 Z" 
            />
          </svg>
          
          {/* Second wave layer */}
          <svg className="absolute w-full min-w-[1200px] h-[80vh] top-[20vh] animate-wave2" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
            <path 
              fill="#251c41" 
              d="M0,150 C320,50 480,150 640,120 C800,90 960,20 1200,150 L1200,500 L0,500 Z" 
            />
          </svg>
          
          {/* Third wave layer */}
          <svg className="absolute w-full min-w-[1200px] h-[80vh] top-[25vh] animate-wave3" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
            <path 
              fill="#1A1F2C" 
              d="M0,180 C170,220 270,180 370,80 C470,0 570,100 670,150 C770,200 870,180 970,110 C1070,40 1170,100 1270,180 L1200,500 L0,500 Z" 
            />
          </svg>
        </div>
        
        {/* Gradient overlay to blend with content */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="w-full max-w-4xl mx-auto z-10">
        <div className={`space-y-8 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          <p className="text-accent font-mono animate-fade-in tracking-wider">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in animate-delay-100 flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-glow">
              {typedName}
            </span>
            <span className={`inline-block w-1 h-12 bg-accent ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}></span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground animate-fade-in animate-delay-200">
            I build scalable backend systems.
          </h2>
          <p className="max-w-2xl text-muted-foreground animate-fade-in animate-delay-300">
            I'm a software engineer with 5 years of experience in Ecommerce and Fintech App Development,
            solving complex challenges collaboratively and building scalable features that enhance UX and drive growth.
          </p>
          
          {/* Skill Pills */}
          <div className="flex flex-wrap gap-2 animate-fade-in animate-delay-350">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant={skill.color as "yellow" | "blue" | "green" | "orange" | "purple"}
                className="py-1.5 px-3 text-sm font-medium rounded-full"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in animate-delay-400">
            <Button className="group relative overflow-hidden bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-white" asChild>
              <a href="#experience" className="flex items-center">
                View my work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" className="border-accent/20 hover:bg-accent/10 hover:text-accent" asChild>
              <a href="#contact">Contact me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import SoftSkillsSection from '@/components/SoftSkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import useTheme from '@/hooks/use-theme';

const Index = () => {
  // Set dark mode by default
  const { setTheme } = useTheme();
  
  useEffect(() => {
    setTheme('dark');
    // Set the page title
    document.title = 'Muhammad Ahmad | Software Engineer';
  }, [setTheme]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SoftSkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

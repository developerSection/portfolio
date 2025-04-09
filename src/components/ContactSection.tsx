
import React, { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Github, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-accent" />,
      label: "Email",
      value: "ahmadshahbaz1214@gmail.com",
      link: "mailto:ahmadshahbaz1214@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-accent" />,
      label: "Phone",
      value: "+92 305 5373599",
      link: "tel:+923055373599"
    },
    {
      icon: <MapPin className="h-5 w-5 text-accent" />,
      label: "Location",
      value: "Islamabad, Pakistan",
      link: null
    },
    {
      icon: <Github className="h-5 w-5 text-accent" />,
      label: "GitHub",
      value: "github.com/developersection",
      link: "https://github.com/developersection"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-accent" />,
      label: "LinkedIn",
      value: "linkedin.com/in/muhammad-ahmad-bse",
      link: "https://linkedin.com/in/muhammad-ahmad-bse"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
            isInView ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`}
        >
          <div>
            <Card className="glass-card h-full">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Contact Information</h3>
                  <p className="text-muted-foreground">
                    Feel free to reach out for collaborations, opportunities, or just to say hello!
                  </p>
                </div>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={item.label} 
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-sm hover:text-accent transition-colors"
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className={`glass-card ${isInView ? 'animate-slide-up animate-delay-200' : ''}`}>
              <CardContent className="p-6 flex flex-col items-center justify-center h-full space-y-6">
                <div className="text-center space-y-3">
                  <h3 className="text-lg font-medium">Let's Work Together</h3>
                  <p className="text-muted-foreground">
                    I'm currently available for new opportunities and collaborations.
                  </p>
                </div>
                
                <Button asChild>
                  <a href="mailto:ahmadshahbaz1214@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send an Email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

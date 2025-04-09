
import React, { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scroll } from 'lucide-react';

const EducationSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section id="education" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">Education</h2>
        
        <div 
          ref={ref}
          className={`${
            isInView ? 'opacity-100 animate-slide-up' : 'opacity-0'
          } transition-opacity duration-700`}
        >
          <Card className="glass-card">
            <CardHeader className="flex flex-col md:flex-row justify-between">
              <div>
                <CardTitle className="text-lg font-semibold">
                  Bachelor of Science in Software Engineering
                </CardTitle>
                <CardDescription>
                  Comsats University Islamabad, Wah Campus
                </CardDescription>
              </div>
              <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                2016-2020
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium flex items-center">
                    <Scroll className="h-4 w-4 mr-2 text-accent" />
                    Final Year Project
                  </h4>
                  <p className="text-muted-foreground mt-1">
                    Object Detection with self-trained AI Model using Drone
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Academic Achievement</h4>
                  <p className="text-muted-foreground mt-1">
                    CGPA: 3.30/4.00
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

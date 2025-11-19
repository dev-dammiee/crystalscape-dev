import { Code2, Palette, Zap, Smartphone, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Progress } from '@/components/ui/progress';
import { useState, useEffect } from 'react';

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [progressValues, setProgressValues] = useState<Record<string, number>>({});

  const skills = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following SOLID principles and best practices',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating pixel-perfect, user-friendly interfaces with attention to every detail',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for blazing-fast load times and smooth 60fps experiences',
    },
    {
      icon: Smartphone,
      title: 'Responsive',
      description: 'Building seamless experiences across all devices from mobile to 4K displays',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technologies and modern frameworks',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with designers, developers, and stakeholders',
    },
  ];

  const technicalSkills = [
    { name: 'React & TypeScript', level: 95 },
    { name: 'HTML5 & CSS3', level: 98 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Bootstrap', level: 90 },
    { name: 'Responsive Design', level: 96 },
    { name: 'Web Performance', level: 88 },
  ];

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const values: Record<string, number> = {};
        technicalSkills.forEach(skill => {
          values[skill.name] = skill.level;
        });
        setProgressValues(values);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden" ref={ref as any}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className={`text-5xl sm:text-6xl font-black gradient-text mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            About Me
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
             style={{ animationDelay: '0.1s' }}>
            Passionate about creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className={`glass ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 lg:p-10">
              <h3 className="text-3xl font-bold mb-6 gradient-text">My Journey</h3>
              <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
                <p>
                  I'm a passionate frontend developer dedicated to crafting beautiful, high-performance web applications 
                  that users love. With years of experience in modern web technologies, I specialize in turning complex 
                  problems into elegant, intuitive solutions.
                </p>
                <p>
                  My expertise spans across <span className="text-primary font-semibold">HTML5, CSS3, Bootstrap, 
                  Tailwind CSS, React, and TypeScript</span>. I'm committed to writing clean, maintainable code and 
                  creating seamless user experiences that work flawlessly across all devices.
                </p>
                <p>
                  When I'm not coding, I'm exploring new web technologies, contributing to open-source projects, 
                  and sharing knowledge with the developer community.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
               style={{ animationDelay: '0.3s' }}>
            <h3 className="text-3xl font-bold mb-8 gradient-text">Technical Proficiency</h3>
            {technicalSkills.map((skill, index) => (
              <div 
                key={skill.name}
                className="space-y-3"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-sm text-muted-foreground font-mono">{progressValues[skill.name] || 0}%</span>
                </div>
                <Progress 
                  value={progressValues[skill.name] || 0} 
                  className="h-3"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.title}
                className={`glass group hover:scale-105 hover:glow transition-all duration-500 perspective-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center space-y-5 relative">
                  <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-500" />
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 glow">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className={`mt-20 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
             style={{ animationDelay: '1.1s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-5xl font-black gradient-text">50+</div>
              <div className="text-muted-foreground font-medium">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black gradient-text">30+</div>
              <div className="text-muted-foreground font-medium">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black gradient-text">5+</div>
              <div className="text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black gradient-text">99%</div>
              <div className="text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

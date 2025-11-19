import { ExternalLink, Github, Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'Full-featured e-commerce platform with React, TypeScript, and Tailwind CSS. Features include cart management, payment integration, real-time inventory, and advanced filtering.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      stars: 124,
      featured: true,
    },
    {
      title: 'Analytics Dashboard',
      category: 'Dashboard',
      description: 'Interactive real-time analytics dashboard built with React and TypeScript. Features data visualization, custom charts, and responsive design for monitoring key metrics.',
      tech: ['React', 'TypeScript', 'Chart.js', 'CSS'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      stars: 89,
      featured: true,
    },
    {
      title: 'Social Media App',
      category: 'Web Application',
      description: 'Modern social media application with Bootstrap and React. Includes user profiles, real-time updates, messaging system, and media sharing capabilities.',
      tech: ['React', 'Bootstrap', 'HTML5', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      stars: 156,
      featured: true,
    },
    {
      title: 'Task Management Tool',
      category: 'Productivity',
      description: 'Collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      stars: 67,
      featured: false,
    },
    {
      title: 'Weather Forecast App',
      category: 'Utility',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather information.',
      tech: ['React', 'CSS3', 'API Integration'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      stars: 45,
      featured: false,
    },
    {
      title: 'Portfolio CMS',
      category: 'CMS',
      description: 'Content management system for creative portfolios with easy customization and responsive templates.',
      tech: ['React', 'TypeScript', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      stars: 92,
      featured: false,
    },
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
    <Card
      className={`glass overflow-hidden group hover:scale-105 hover:glow transition-all duration-500 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full group-hover:scale-125 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="flex gap-2">
            <Button asChild size="sm" className="glow">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </a>
            </Button>
            <Button asChild variant="secondary" size="sm">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-accent text-accent-foreground">Featured</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{project.category}</Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span>{project.stars}</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold group-hover:gradient-text transition-all">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline" className="font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref as any}>
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl font-black gradient-text mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Featured Projects
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
             style={{ animationDelay: '0.1s' }}>
            Showcasing my latest work and experiments in modern web development
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className={`grid w-full max-w-2xl mx-auto mb-12 glass ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: '0.15s', gridTemplateColumns: `repeat(${categories.length}, 1fr)` }}>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter(p => category === 'All' || p.category === category)
                  .map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

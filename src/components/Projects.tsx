import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Star, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isMobile, setIsMobile] = useState(false);
  const tabsListRef = useRef<HTMLDivElement>(null);
  const projectsPerPage = 6;

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'Full-featured e-commerce platform with React, TypeScript, and Tailwind CSS. Features include cart management, payment integration, real-time inventory, and advanced filtering.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      github: 'https://github.com/dev-dammiee/shop-ease',
      demo: 'https://shop-ease-web.vercel.app/index.html',
      stars: 124,
      featured: true,
    },
    {
      title: 'Cloudlytics',
      category: 'Dashboard',
      description: ' A cloud security and compliance dashboard providing real‑time monitoring, analytics, and asset insights for multi‑cloud environments.',
      tech: ['React', 'TypeScript', 'CSS'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      github: 'https://github.com/dev-dammiee/Cloudlytics',
      demo: 'https://cloudlytics.vercel.app/',
      stars: 89,
      featured: true,
    },
    {
      title: 'Chic Lighting & Design',
      category: 'Dashboard',
      description: ' A stylish product landing site showcasing modern lighting solutions and interior design services with a sleek, responsive UI.',
      tech: ['React', 'TypeScript', 'CSS'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      github: 'https://github.com/dev-dammiee/chic-lighting-and-design',
      demo: 'https://chic-lighting-and-design.vercel.app/',
      stars: 89,
      featured: true,
    },
    {
      title: 'Caligigs ',
      category: 'Web Application',
      description: ' A talent marketplace platform for booking local creatives and professionals, showcasing talent profiles and enabling users to discover and hire services.',
      tech: ['React', 'Bootstrap', 'HTML5', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      github: 'https://github.com/dev-dammiee/Caligigs',
      demo: 'https://caligig.vercel.app/',
      stars: 156,
      featured: true,
    },
    {
      title: 'Task Management Tool',
      category: 'Productivity',
      description: 'Collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      github: 'https://github.com/dev-dammiee/Task-Flow',
      demo: 'https://task-flow-five-zeta.vercel.app/',
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
      title: 'CampusConnect',
      category: 'CMS',
      description: 'CampusConnect: Role-based campus platform for events, galleries, and community engagement.',
      tech: ['HTML', 'CSS', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
      github: 'https://github.com/dev-dammiee/CampusConnect',
      demo: 'https://campus-connect-opal.vercel.app/',
      stars: 92,
      featured: false,
    },
    {
  title: 'LumiPOS',
  category: 'Web Application',
  description: 'Modern and responsive Point-of-Sale (POS) system for retail and restaurants, featuring sales dashboard, product catalog, inventory management, and checkout interface.',
  tech: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
  image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
  github: 'https://github.com/dev-dammiee/LumiPOS-POS-UI-Mockup#',
  demo: 'https://lumi-pos.vercel.app/',
  stars: 78,
  featured: false,
}
,
    {
      title: 'Fitness App',
      category: 'Mobile',
      description: 'Mobile fitness application with workout plans, progress tracking, and nutrition guidance.',
      tech: ['React Native', 'TypeScript', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      stars: 112,
      featured: true,
    },
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Get current page projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Pagination handlers
  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

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

        {/* Mobile Filter Dropdown */}
        <div className="md:hidden mb-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full glass justify-between">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filter: {activeCategory}</span>
                </div>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[calc(100vw-2rem)] max-w-sm mx-auto glass">
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  className={`cursor-pointer ${activeCategory === category ? 'bg-accent' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                  {activeCategory === category && (
                    <span className="ml-auto text-primary">✓</span>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Active filter indicator */}
          <div className="mt-4 text-center">
            <Badge variant="secondary" className="text-sm">
              {filteredProjects.length} projects found
            </Badge>
          </div>
        </div>

        <Tabs value={activeCategory} className="w-full" onValueChange={setActiveCategory}>
          {/* Desktop Tabs - Hidden on mobile */}
          <div className="hidden md:block">
            <TabsList 
              ref={tabsListRef}
              className={`w-full max-w-2xl mx-auto mb-12 glass overflow-x-auto ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.15s' }}
            >
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category} 
                  className="text-sm px-4 py-2 whitespace-nowrap"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="space-y-8">
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {currentProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>

            {/* No Projects Message */}
            {currentProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="text-muted-foreground text-lg">
                  No projects found in this category
                </div>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setActiveCategory('All')}
                >
                  View All Projects
                </Button>
              </div>
            )}

            {/* Pagination Controls - Only show if there's more than 1 page */}
            {totalPages > 1 && filteredProjects.length > 0 && (
              <div className={`flex flex-col sm:flex-row items-center justify-between pt-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                   style={{ animationDelay: '0.3s' }}>
                <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
                  <span className="md:hidden">
                    Page {currentPage} of {totalPages}
                  </span>
                  <span className="hidden md:inline">
                    Showing <span className="font-semibold">{indexOfFirstProject + 1}-{Math.min(indexOfLastProject, filteredProjects.length)}</span> of{' '}
                    <span className="font-semibold">{filteredProjects.length}</span> projects
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Previous Button */}
                  <Button
                    variant="outline"
                    size={isMobile ? "default" : "icon"}
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={isMobile ? "px-4" : "h-10 w-10"}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    {isMobile && <span className="ml-2">Prev</span>}
                    <span className="sr-only">Previous page</span>
                  </Button>

                  {/* Page Numbers - Hidden on mobile, shown on tablet/desktop */}
                  <div className="hidden sm:flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      // Show limited page numbers for better UX
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            className="h-10 w-10"
                            onClick={() => goToPage(page)}
                          >
                            {page}
                          </Button>
                        );
                      }
                      
                      // Show ellipsis for skipped pages
                      if (
                        (page === currentPage - 2 && currentPage > 3) ||
                        (page === currentPage + 2 && currentPage < totalPages - 2)
                      ) {
                        return (
                          <span key={page} className="px-2 text-muted-foreground">
                            ...
                          </span>
                        );
                      }
                      
                      return null;
                    })}
                  </div>

                  {/* Mobile page indicator */}
                  <div className="sm:hidden flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {currentPage} / {totalPages}
                    </span>
                  </div>

                  {/* Next Button */}
                  <Button
                    variant="outline"
                    size={isMobile ? "default" : "icon"}
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={isMobile ? "px-4" : "h-10 w-10"}
                  >
                    {isMobile && <span className="mr-2">Next</span>}
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next page</span>
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
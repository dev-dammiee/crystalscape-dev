import { ArrowRight, Github, Linkedin, Twitter, Mail, Code2, Terminal, Braces } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(52, 211, 153, 0.5)';
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.2)';

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-30" />

      {/* Floating 3D Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-24 h-24 border-2 border-primary/40 rounded-lg animate-float preserve-3d glow" 
             style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Code2 className="w-10 h-10 text-primary" />
          </div>
        </div>
        <div className="absolute top-40 right-[15%] w-20 h-20 border-2 border-accent/40 rounded-lg animate-float-slow preserve-3d" 
             style={{ animationDelay: '1s', transform: 'rotateX(-30deg) rotateY(60deg)' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Terminal className="w-8 h-8 text-accent" />
          </div>
        </div>
        <div className="absolute bottom-32 left-[20%] w-28 h-28 border-2 border-primary/30 rounded-lg animate-float" 
             style={{ animationDelay: '2s', transform: 'rotateX(60deg) rotateY(-45deg)' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Braces className="w-12 h-12 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-20 right-[25%] w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg animate-float-slow backdrop-blur-sm" 
             style={{ animationDelay: '0.5s', transform: 'rotateX(30deg) rotateZ(15deg)' }} />
        <div className="absolute top-1/3 left-[5%] w-20 h-20 border border-accent/30 rounded-full animate-float" 
             style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-[8%] w-24 h-24 border border-primary/30 rotate-45 animate-float-slow" 
             style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-10">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block px-6 py-2 glass rounded-full text-sm font-medium mb-4">
              <span className="gradient-text">Available for freelance work</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black gradient-text leading-tight">
              Frontend Developer
            </h1>
            <p className="text-2xl sm:text-3xl text-foreground/90 font-light max-w-3xl mx-auto">
              Transforming ideas into stunning digital experiences with cutting-edge web technologies
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="text-lg text-muted-foreground">Specializing in:</span>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-semibold">React</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-semibold">TypeScript</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-semibold">Tailwind</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-3xl mx-auto animate-fade-in-up" 
               style={{ animationDelay: '0.2s' }}>
            {['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'React', 'TypeScript'].map((tech) => (
              <div
                key={tech}
                className="group p-4 glass rounded-xl hover:scale-110 hover:glow transition-all duration-300 cursor-pointer"
              >
                <span className="text-sm font-bold gradient-text block">{tech}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up" 
               style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="group text-lg px-8 py-6 glow hover:scale-105 transition-all">
              <a href="#projects">
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-all">
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-5 pt-4 animate-fade-in-up" 
               style={{ animationDelay: '0.6s' }}>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-125 transition-all w-12 h-12">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-125 transition-all w-12 h-12">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-125 transition-all w-12 h-12">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-125 transition-all w-12 h-12">
              <a href="mailto:your.email@example.com" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto relative">
              <div className="w-1.5 h-2 bg-primary rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
      </div>
    </section>
  );
};

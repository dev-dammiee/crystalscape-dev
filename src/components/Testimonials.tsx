import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Tech Corp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      content: 'Outstanding work! The website exceeded all our expectations. Not only was it delivered on time, but the attention to detail and professional approach made the entire process smooth and enjoyable.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      content: 'Incredible expertise in modern web technologies! The performance optimizations and clean code architecture have made our platform scale beautifully. Highly recommend for any serious project.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Digital Agency',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      content: 'The best developer we have worked with! Creative problem-solving, excellent communication, and a genuine passion for creating beautiful user experiences. Our conversion rates increased by 40%!',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'CTO',
      company: 'Innovation Labs',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      content: 'Exceptional technical skills combined with great design sense. The responsive design works flawlessly across all devices, and the code quality is top-notch. A true professional!',
      rating: 5,
    },
    {
      name: 'Lisa Wang',
      role: 'UX Designer',
      company: 'Creative Studio',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
      content: 'Wonderful collaboration experience! Transformed our designs into pixel-perfect implementations. The attention to animations and micro-interactions made our product stand out.',
      rating: 5,
    },
    {
      name: 'James Miller',
      role: 'Founder',
      company: 'E-Commerce Plus',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      content: 'Game-changer for our business! The new website not only looks amazing but performs incredibly well. Fast load times, smooth animations, and excellent mobile experience.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30 relative overflow-hidden" ref={ref as any}>
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl font-black gradient-text mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Client Testimonials
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
             style={{ animationDelay: '0.1s' }}>
            What clients say about working with me
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className={`max-w-4xl mx-auto mb-16 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
             style={{ animationDelay: '0.2s' }}>
          <Card className="glass glow">
            <CardContent className="p-10 lg:p-12">
              <Quote className="h-16 w-16 text-primary/30 mb-6" />
              <p className="text-2xl lg:text-3xl font-light leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].content}"
              </p>
              <div className="flex items-center gap-6">
                <Avatar className="w-20 h-20 border-4 border-primary/20">
                  <AvatarImage src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
                  <AvatarFallback>{testimonials[activeIndex].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xl font-bold">{testimonials[activeIndex].name}</p>
                  <p className="text-muted-foreground">
                    {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                  </p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 p-0 rounded-full transition-all ${
                  index === activeIndex ? 'bg-primary w-8' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`glass hover:scale-105 hover:glow transition-all duration-500 cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              } ${index === activeIndex ? 'ring-2 ring-primary' : ''}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              onClick={() => setActiveIndex(index)}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3 pt-4 border-t">
                  <Avatar className="border-2 border-primary/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

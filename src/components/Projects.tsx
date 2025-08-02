
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Codex AI",
      description: "AI-powered code editor built with Next.js and TypeScript, featuring Monaco Editor integration and Gemini API for intelligent code suggestions and chatbot assistance.",
      technologies: ["Next.js", "TypeScript", "Monaco Editor", "Firebase", "Gemini API", "AI"],
      github: "https://github.com/akshitjain1264/codex-ai",
      live: "https://codex-ai-demo.com",
      featured: true
    },
    {
      title: "Real Time Tracker",
      description: "Advanced real-time location tracking application using Node.js and Leaflet.js, displaying user and peer locations with high accuracy through Geolocation API.",
      technologies: ["Node.js", "Leaflet.js", "Geolocation API", "Socket.io", "Real-time"],
      github: "#",
      live: "https://realtime-tracker-demo.com",
      featured: true
    },
    {
      title: "Booking App",
      description: "Comprehensive booking management system built with the MERN stack, featuring user authentication, booking management, and real-time availability updates.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST API"],
      github: "https://github.com/akshitjain1264/booking-app",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`shadow-lg hover:shadow-xl transition-all duration-300 hover-scale ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                    {project.title}
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        Featured
                      </Badge>
                    )}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {project.github !== '#' && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live !== '#' && (
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/akshitjain1264" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

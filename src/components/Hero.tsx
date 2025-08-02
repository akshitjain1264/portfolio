
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Text Content */}
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
              👋 Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Akshit Jain
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-fade-in">
            Full Stack Developer & DSA Instructor
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in">
            Passionate about building scalable web applications and mentoring the next generation of developers. 
            Experienced in MERN stack, cloud technologies, and competitive programming.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 animate-fade-in">
            <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8">
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" asChild className="px-8">
              <a href="#projects" className="no-underline">View My Work</a>
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in">
            <a
              href="https://github.com/akshitjain1264"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-all duration-200 hover-scale hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/akshitjain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-all duration-200 hover-scale hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.leetcode.com/u/codewithakshit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-all duration-200 hover-scale hover:shadow-lg"
              aria-label="LeetCode"
            >
              <Code className="h-5 w-5" />
            </a>
            <a
              href="mailto:toakshit2004@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-accent transition-all duration-200 hover-scale hover:shadow-lg"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            <div className="relative bg-card rounded-2xl p-2 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center"
                alt="Programming workspace with code on monitor"
                className="w-full h-auto rounded-xl object-cover max-w-md lg:max-w-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl shadow-lg animate-bounce">
              <Code className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-xl shadow-lg" style={{animationDelay: '1s'}}>
              💻
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

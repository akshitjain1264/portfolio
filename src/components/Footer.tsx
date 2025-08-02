
import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Akshit Jain
          </div>
          
          <p className="text-muted-foreground max-w-md mx-auto">
            Full Stack Developer passionate about creating innovative solutions and mentoring the next generation of developers.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/akshitjain1264"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors duration-200 hover-scale"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/akshitjain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors duration-200 hover-scale"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.leetcode.com/u/codewithakshit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors duration-200 hover-scale"
              aria-label="LeetCode"
            >
              <Code className="h-5 w-5" />
            </a>
            <a
              href="mailto:toakshit2004@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors duration-200 hover-scale"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="border-t border-border pt-6 text-sm text-muted-foreground">
            <p>&copy; {currentYear} Akshit Jain. All rights reserved.</p>
            <p className="mt-2">Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

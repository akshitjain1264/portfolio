
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-card rounded-2xl p-2 shadow-xl">
                <img
                  src="/about_me.avif"
                  alt="Developer working on laptop"
                  className="w-full h-auto rounded-xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer and DSA Instructor with a strong foundation in computer science. 
                Currently pursuing my B.Tech from Maharaja Agrasen Institute of Technology, I bring both academic 
                excellence and practical industry experience to every project.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech started during my diploma, where I discovered my love for problem-solving through 
                programming. Since then, I've been dedicated to mastering the art of building scalable web applications 
                and sharing knowledge with fellow developers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-0">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Students Mentored</div>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-0">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">8.67</div>
                  <div className="text-sm text-muted-foreground">Current CGPA</div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What Drives Me</h3>
              <div className="grid gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-muted-foreground">Building user-centric applications that solve real problems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-muted-foreground">Mentoring aspiring developers and sharing knowledge</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-muted-foreground">Continuous learning and staying updated with tech trends</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

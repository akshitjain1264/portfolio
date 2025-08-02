
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["HTML5", "CSS3", "React.js", "React Native", "Next.js", "Bootstrap", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
      icon: "🎨",
      description: "Creating beautiful and responsive user interfaces"
    },
    {
      category: "Backend Development", 
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT", "OAuth"],
      color: "from-green-500 to-emerald-500",
      icon: "⚙️",
      description: "Building robust server-side applications"
    },
    {
      category: "Database Management",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
      color: "from-purple-500 to-violet-500",
      icon: "🗄️",
      description: "Designing and managing data storage solutions"
    },
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Java", "C++", "SQL"],
      color: "from-orange-500 to-red-500",
      icon: "💻",
      description: "Proficient in multiple programming paradigms"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Firebase", "Git", "GitHub"],
      color: "from-indigo-500 to-blue-500",
      icon: "☁️",
      description: "Deploying and scaling applications in the cloud"
    },
    {
      category: "Problem Solving",
      skills: ["Data Structures", "Algorithms", "System Design", "Competitive Programming", "LeetCode"],
      color: "from-pink-500 to-rose-500",
      icon: "🧠",
      description: "Analytical thinking and optimization expertise"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <span className="text-2xl">🚀</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning the entire development stack, from frontend design to backend architecture and cloud deployment.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                      {category.category}
                    </CardTitle>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105 text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-0 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-muted-foreground">Students Trained</div>
          </Card>
          <Card className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-0 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </Card>
          <Card className="text-center p-8 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border-0 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </Card>
        </div>

        {/* Learning Section */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 border-0 shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Continuous Learning Journey
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
              Currently exploring advanced React patterns, microservices architecture, and AI/ML integration in web applications.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="px-4 py-2 text-sm">Next.js 14</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">AI Integration</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Microservices</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">GraphQL</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

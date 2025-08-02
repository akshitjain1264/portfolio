
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Rapisoft Solutions Pvt. Ltd.",
      location: "Remote",
      duration: "Oct – Nov 2024",
      description: [
        "Built scalable web applications using the MERN stack",
        "Improved API response time by 30% through optimization",
        "Developed responsive UI and backend services in collaborative team environment",
        "Implemented modern development practices and code reviews"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript"]
    },
    {
      title: "Web Development & DSA Instructor",
      company: "Jain Info Solutions",
      location: "New Delhi",
      duration: "Feb 2024 – Present",
      description: [
        "Trained 100+ students in web development and data structures & algorithms",
        "Designed comprehensive curriculum with assignments and project-based learning",
        "Conducted live coding sessions and provided one-on-one mentorship",
        "Developed educational content and assessment materials"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Java", "C++", "DSA"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl font-bold text-primary">{exp.title}</CardTitle>
                    <div className="text-lg font-semibold text-foreground">{exp.company}</div>
                    <div className="text-muted-foreground">{exp.location}</div>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {exp.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

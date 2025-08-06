
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Maharaja Agrasen Institute of Technology, Delhi",
      duration: "2023 – 2026",
      cgpa: "8.7",
      status: "Ongoing"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Guru Nanak Dev Institute of Engineering",
      duration: "2020 – 2023",
      cgpa: "8.8",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl font-bold text-primary">{edu.degree}</CardTitle>
                    <div className="text-lg font-semibold text-foreground">{edu.institution}</div>
                    <div className="text-muted-foreground">{edu.duration}</div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge 
                      variant={edu.status === 'Ongoing' ? 'default' : 'secondary'}
                      className={edu.status === 'Ongoing' ? 'bg-green-100 text-green-800 border-green-200' : ''}
                    >
                      {edu.status}
                    </Badge>
                    <div className="text-2xl font-bold text-primary">
                      CGPA: {edu.cgpa}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    {edu.status === 'Ongoing' 
                      ? 'Currently pursuing computer science engineering with focus on software development, algorithms, and system design.'
                      : 'Completed foundational studies in computer engineering with emphasis on programming fundamentals and software development.'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

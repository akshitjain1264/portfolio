
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      title: "Runner-Up – Hack for Impact",
      organization: "IIIT Delhi",
      description: "Created an innovative AI-driven healthcare portal utilizing FaceAPI.js, Gemini API, and pdf-parse for intelligent document processing and facial recognition.",
      technologies: ["FaceAPI.js", "Gemini API", "pdf-parse", "AI/ML", "Healthcare Tech"],
      type: "Hackathon",
      year: "2025"
    },
    {
      title: "Smart India Hackathon 2024 Finalist",
      organization: "Government of India",
      description: "Developed a comprehensive backend system for contract farming application, enabling efficient farmer-buyer connections and agricultural management.",
      technologies: ["Node.js", "MongoDB", "Express.js", "Multer.js", "Agriculture Tech"],
      type: "National Competition",
      year: "2024"
    }
  ];

  const positions = [
    {
      title: "DSA Head",
      organization: "IOSD MAIT",
      description: "Led data structures and algorithms initiatives, mentoring students in competitive programming and algorithmic thinking.",
      duration: "2024 - Present"
    },
    {
      title: "Head – Magazine Club (SPANDAN)",
      organization: "Guru Nanak Dev Institute",
      description: "Managed publications and organized various college events during diploma studies, developing leadership and organizational skills.",
      duration: "2021 - 2023"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Achievements & Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Achievements Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">🏆 Competition Achievements</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-primary mb-2">
                          {achievement.title}
                        </CardTitle>
                        <div className="text-lg font-semibold text-foreground">
                          {achievement.organization}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                          {achievement.type}
                        </Badge>
                        <Badge variant="outline">
                          {achievement.year}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {achievement.technologies.map((tech, i) => (
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

          {/* Leadership Positions Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">👥 Leadership Positions</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {positions.map((position, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-primary mb-2">
                          {position.title}
                        </CardTitle>
                        <div className="text-lg font-semibold text-foreground">
                          {position.organization}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-sm">
                        {position.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {position.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

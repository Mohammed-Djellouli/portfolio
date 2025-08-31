import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { getIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { Code, Globe, Users, Mail, MapPin, Calendar, GraduationCap, Download } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {personalInfo.bio.short}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Bio Section */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Who I Am</h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  {personalInfo.bio.long.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Skills Section */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Skills & Technologies</h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    
                    {/* Frontend Skills */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Code className="w-5 h-5 mr-2 text-[var(--primary-600)]" />
                        Frontend Development
                      </h3>
                      <div className="space-y-4">
                        {personalInfo.skills.frontend.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                              <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-600)] h-2 rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Backend Skills */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Globe className="w-5 h-5 mr-2 text-[var(--primary-600)]" />
                        Backend Development
                      </h3>
                      <div className="space-y-4">
                        {personalInfo.skills.backend.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                              <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-600)] h-2 rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Additional Skills */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-[var(--primary-600)]" />
                      Tools & Others
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.skills.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-[var(--primary-100)] text-[var(--primary-800)] dark:bg-[var(--primary-900)]/70 dark:text-[var(--primary-300)] rounded-full text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Experience Section */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <div className="space-y-8">
                    {personalInfo.experience.map((exp, index) => (
                      <div key={index} className="border-l-4 border-[var(--primary-500)] pl-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                        </div>
                        <p className="text-[var(--primary-600)] dark:text-[var(--primary-400)] font-medium mb-2">{exp.company}</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <div className="space-y-8">
                    {personalInfo.education.map((edu, index) => (
                      <div key={index} className="border-l-4 border-[var(--primary-500)] pl-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                        </div>
                        <p className="text-[var(--primary-600)] dark:text-[var(--primary-400)] font-medium mb-2">{edu.school}</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{edu.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Interests Section */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Interests & Hobbies</h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    {personalInfo.interests.map((interest, index) => {
                      const IconComponent = getIcon(interest.icon);
                      return (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div className="text-[var(--primary-600)] dark:text-[var(--primary-400)]">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{interest.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{interest.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Quick Info */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[var(--primary-600)]" />
                    <span className="text-gray-600 dark:text-gray-300">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-[var(--primary-600)]" />
                    <span className="text-gray-600 dark:text-gray-300">{personalInfo.availability}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 text-[var(--primary-600)]" />
                    <span className="text-gray-600 dark:text-gray-300">{personalInfo.educationStatus}</span>
                  </div>
                </div>
              </div>

              {/* Download CV */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Resume</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Download my latest resume to learn more about my experience and skills.
                </p>
                <Button asChild className="w-full">
                  <Link href="/resume" className="inline-flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Link>
                </Button>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-br from-[var(--primary-500)] to-[var(--primary-600)] rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
                <p className="mb-4 text-[var(--primary-100)]">
                  Interested in working together or just want to chat? Feel free to reach out!
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/contact" className="inline-flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

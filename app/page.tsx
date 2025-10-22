"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

const Portfolio = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Real Property Tax Information System (Client Side)",
      description:
        "Calculate your taxes and view your property information - no account required.",
      stack: ["React", "Materual UI", "EmailJS"],
      videoUrl: "/videos/rpt-client.mp4",
      demoLink: "https://realpropertytax.sanpablocity.gov.ph",
      githubLink: "",
    },
    {
      id: 2,
      title: "Real Property Tax Management System (Employees)",
      description:
        "Modern, role-based, with automated computations and simplified FAAS forms.  ",
      stack: ["React", "PostgreSQL", "Node.js", "Express"],
      videoUrl: "/videos/rpt-employee.mp4",
      demoLink: "",
      githubLink: "",
    },
    {
      id: 3,
      title: "Tricycle Franchising & Violation Management System",
      description:
        "Full-stack MERN system for managing tricycle permits and violations with real-time tracking",
      stack: ["React", "Node.js", "MongoDB", "Express"],
      videoUrl: "/videos/tric.mp4",
      demoLink: "",
      githubLink: "",
    },

    {
      id: 4,
      title: "PPPLearning - E-Learning Platform for SLD",
      description:
        "Web + mobile system combining classroom management and game-based learning for children with SLD",
      stack: ["React", "Node.js", "MongoDB", "Mobile"],
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      demoLink: "https://youtube.com",
      githubLink: "https://github.com/jimuelbaraero",
    },

    {
      id: 5,
      title: "Tricycle Franchising & Violation Management System",
      description:
        "Full-stack MERN system for managing tricycle permits and violations with real-time tracking",
      stack: ["React", "Node.js", "MongoDB", "Express"],
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      demoLink: "https://github.com/jimuelbaraero",
      githubLink: "https://github.com/jimuelbaraero",
    },
    {
      id: 6,
      title: "Real Property Tax Information System (Client Side)",
      description:
        "React-based tax system for citizens with automated computation and payment tracking",
      stack: ["React", "Tailwind CSS", "REST API"],
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      demoLink: "https://youtube.com",
      githubLink: "https://github.com/jimuelbaraero",
    },
    {
      id: 7,
      title: "PPPLearning - E-Learning Platform for SLD",
      description:
        "Web + mobile system combining classroom management and game-based learning for children with SLD",
      stack: ["React", "Node.js", "MongoDB", "Mobile"],
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      demoLink: "https://youtube.com",
      githubLink: "https://github.com/jimuelbaraero",
    },

    {
      id: 8,
      title: "Tricycle Franchising & Violation Management System",
      description:
        "Full-stack MERN system for managing tricycle permits and violations with real-time tracking",
      stack: ["React", "Node.js", "MongoDB", "Express"],
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      demoLink: "https://github.com/jimuelbaraero",
      githubLink: "https://github.com/jimuelbaraero",
    },
    {
      id: 9,
      title: "Real Property Tax Information System (Client Side)",
      description:
        "React-based tax system for citizens with automated computation and payment tracking",
      stack: ["React", "Tailwind CSS", "REST API"],
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      demoLink: "https://youtube.com",
      githubLink: "https://github.com/jimuelbaraero",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = parseInt(entry.target.dataset.id);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

        * {
          font-family: "Inter", sans-serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
        }

        video {
          object-fit: cover;
        }

        .stack-badge {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Header Section */}
      <header className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 left-20 animate-float"></div>
          <div
            className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-20 right-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative z-10 text-center space-y-6 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient mb-4">
            JIMUEL BARAERO
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light mb-8">
            Full-Stack Web Developer | React, Node.js, MongoDB, Express
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4">
            <a
              href="mailto:jimuelbaraero00@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110 px-4 py-2 rounded-lg hover:bg-white/5"
            >
              <Mail size={20} />
              <span className="text-sm sm:text-base">
                jimuelbaraero00@gmail.com
              </span>
            </a>
            <a
              href="https://github.com/jimuelbaraero"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/5"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/jimuelbaraero"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/5"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <button
            onClick={scrollToProjects}
            className="mt-12 inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 animate-float"
            aria-label="Scroll to projects"
          >
            <span className="text-sm">View Projects</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">
              Showcasing full-stack solutions with modern technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (projectRefs.current[index] = el)}
                data-id={project.id}
                className={`card-hover group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm transition-all duration-500 ${
                  visibleCards.has(project.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Video Preview */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
                  <video
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="stack-badge px-3 py-1 text-xs font-medium text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    {project.demoLink ? (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        View Demo
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-700/50 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Private
                      </button>
                    )}
                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
                        aria-label="GitHub repository"
                      >
                        <Github size={16} />
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex items-center justify-center gap-2 bg-slate-700/50 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed"
                        aria-label="GitHub repository unavailable"
                      >
                        <Github size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/jimuelbaraero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jimuelbaraero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:jimuelbaraero00@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm text-center">
              © 2025 Jimuel Baraero. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

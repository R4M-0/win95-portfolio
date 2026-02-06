
import React from 'react';

const ProjectsWindow = () => {
  const projects = [
    {
      name: "The Phishinator",
      description: "An AI-powered phishing detection tool",
      tech: "Python, Flask, React",
      repo: "https://github.com/R4M-0/the-phishinator"
    },
    {
      name: "TalkEz",
      description: "You talk, I translate. A real-time translation app for conversations",
      tech: "Python, React",
      repo: "https://github.com/R4M-0/TalkEz"
    },
    {
      name: "E-commerce Website",
      description: "Full-stack e-commerce application",
      tech: "Symfony, JavaScript, MySQL",
      repo: "https://github.com/R4M-0/SymfonyProject"
    },
    {
      name: "Flappy Bird Clone",
      description: "A simple clone of the classic Flappy Bird game",
      tech: "Java",
      repo: "https://github.com/R4M-0/Flappy_Bird_Java"
    },
    {
      name: "Java Command-Line",
      description: "A simple command-line application in Java with AWT",
      tech: "Java, AWT",
      repo: "https://github.com/R4M-0/Java-CLI"
    }
  ];

  return (
    <div className="p-4 bg-white h-full">
      <h2 className="text-lg font-bold mb-4 text-win95-blue-title">My Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="win95-window p-3">
            <h3 className="font-bold text-sm text-win95-blue-title">{project.name}</h3>
            <p className="text-xs mt-1">{project.description}</p>
            <p className="text-xs text-win95-gray-darker mt-2"><strong>Tech:</strong> {project.tech}</p>
            <button className="win95-button mt-2 text-xs"> <a href={project.repo} >View Project</a></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsWindow;

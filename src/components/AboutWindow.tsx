
import React from 'react';
import { User, Code, Coffee } from 'lucide-react';

const AboutWindow = () => {
  return (
    <div className="p-4 bg-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <User size={16} />
        <h2 className="text-lg font-bold text-win95-blue-title">About Me</h2>
      </div>
      
      <div className="space-y-4">
        <div className="win95-window p-3">
          <h3 className="font-bold text-sm flex items-center gap-2 mb-2">
            <Code size={14} />
            Omar Chiboub
          </h3>
          <p className="text-xs leading-relaxed">
            Welcome to my retro desktop! I'm a passionate software engineering student who loves creating 
            unique experiences. This Windows 95-inspired interface showcases my projects 
            and personality with a nostalgic twist.
          </p>
        </div>

        <div className="win95-window p-3">
          <h3 className="font-bold text-sm flex items-center gap-2 mb-2">
            <Coffee size={14} />
            Skills & Interests
          </h3>
          <div className="text-xs space-y-1">
            <div>• Cyber Security Enthusiast</div>
            <div>• React & TypeScript Development</div>
            <div>• Creative Problem Solving</div>
            
          </div>
        </div>

        <div className="flex gap-2">
          <button className="win95-button"><a href="https://drive.google.com/file/d/1BENe96isIDsIRc3YKiEHe0fNm1tvGjN-/view?usp=drive_link">View Resume</a></button>
          <a href="/Omar_Chiboub_CV.pdf" download>
            <button className="win95-button">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;

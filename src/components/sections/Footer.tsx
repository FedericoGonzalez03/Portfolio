'use client';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-black text-neutral-300 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4">&copy; {new Date().getFullYear()} • Federico González Salomón</p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:federico.gonzalez.salomon@example.com"
            className="cursor-target cursor-none text-neutral-400 hover:text-green-400 transition-colors duration-200"
            aria-label="Email address"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/03-federico-gonzalez/"
            target="_blank"
            rel="noopener noreferrer" 
            className="cursor-target cursor-none text-neutral-400 hover:text-blue-400 transition-colors duration-200"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/FedericoGonzalez03"
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-target cursor-none text-neutral-400 hover:text-purple-400 transition-colors duration-200"
            aria-label="GitHub profile" 
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

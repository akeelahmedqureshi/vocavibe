
import React from "react";
import { Motion } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <Motion className="w-5 h-5 text-primary" />
              <span className="font-semibold text-lg">SpeakFluent</span>
            </div>
            <p className="text-muted-foreground text-sm mt-2">
              Improve your English pronunciation with AI
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4 mb-6 md:mb-0">
            <Link to="/" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/practice" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              Practice
            </Link>
            <Link to="/vocabulary" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              Vocabulary
            </Link>
            <Link to="/progress" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              Progress
            </Link>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} SpeakFluent. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

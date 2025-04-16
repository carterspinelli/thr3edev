import React from "react";
import { Mail, X, Instagram, Facebook, Linkedin, Github, ArrowUp, Sun, Moon, Youtube } from "lucide-react";

export const FooterIcons = {
  Mail: (props: React.SVGProps<SVGSVGElement>) => <Mail {...props} />,
  X: (props: React.SVGProps<SVGSVGElement>) => <X {...props} />,
  Instagram: (props: React.SVGProps<SVGSVGElement>) => <Instagram {...props} />,
  Facebook: (props: React.SVGProps<SVGSVGElement>) => <Facebook {...props} />,
  Linkedin: (props: React.SVGProps<SVGSVGElement>) => <Linkedin {...props} />,
  Github: (props: React.SVGProps<SVGSVGElement>) => <Github {...props} />,
  ArrowUp: (props: React.SVGProps<SVGSVGElement>) => <ArrowUp {...props} />,
  Sun: (props: React.SVGProps<SVGSVGElement>) => <Sun {...props} />,
  Moon: (props: React.SVGProps<SVGSVGElement>) => <Moon {...props} />,
  Youtube: (props: React.SVGProps<SVGSVGElement>) => <Youtube {...props} />,
  Heart: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  ),
  Designali: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z" 
        fill="currentColor"
      />
    </svg>
  )
};
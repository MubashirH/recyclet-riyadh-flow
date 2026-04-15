import { Linkedin, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <img
              src="https://media.base44.com/images/public/69d355fa8049589838ea7988/fcd0ba61a_RS-png.png"
              alt="Recyclet Saudi"
              className="h-10 w-auto brightness-0 invert opacity-80"
            />
            <p className="font-inter text-xs text-primary-foreground/50 italic">Your Sustainability Partner</p>
            <p className="font-inter text-xs text-primary-foreground/40">Founded in 2026</p>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://www.linkedin.com/company/recyclet-saudi/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/recycletsaudi?igsh=aWI4NzY2eGNqbnlr" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/966543103077" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {['About', 'Services', 'Founder', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-inter text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Recyclet Saudi. All rights reserved.
          </p>
          <p className="font-inter text-xs text-primary-foreground/40">
            Riyadh, Kingdom of Saudi Arabia
          </p>
        </div>
      </div>
    </footer>
  );
}
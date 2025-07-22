import { Badge } from "@/components/ui/badge";
import logo from "../assets/SPRAYFOAMREMOVALWHITE.svg"
import { Button } from "@/components/ui/button";
const navigationItems = [
  { name: "Home", href: "#hero" },
  { name: "Process", href: "#process" },
  { name: "Insulation Removal", href: "#InsulationInfo" },
  { name: "Check Offer", href: "#offer" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
];

import React, { useState } from "react";
import HamburgerMenu from "@/components/HamburgerMenu";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu after navigation
    }
  };

  return (
    <header className="bg-primary text-primary-foreground py-2 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between min-h-[56px]">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-24 w-auto object-contain" style={{ maxHeight: '48px' }} />
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-center gap-1 flex-wrap pb-2">
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                {item.name}
              </Button>
            ))}
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <HamburgerMenu open={menuOpen} onToggle={() => setMenuOpen((v) => !v)}>
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="lg"
                  onClick={() => scrollToSection(item.href)}
                  className="w-full justify-start text-lg text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                >
                  {item.name}
                </Button>
              ))}
              <a href="#offer" onClick={() => scrollToSection('#offer')}>
                <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold px-3 py-2 text-base rounded shadow w-full block text-center mt-4">
                  Get 20% OFF Spray Foam Insulation Removal
                </Badge>
              </a>
            </HamburgerMenu>
          </div>
          {/* Desktop CTA Badge */}
          <div className="hidden md:block">
            <a href="#offer" onClick={() => scrollToSection('#offer')}>
              <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold px-3 py-1 text-xs rounded shadow">
                Get 20% OFF Spray Foam Insulation Removal
              </Badge>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
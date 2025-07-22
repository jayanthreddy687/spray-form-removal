import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type HamburgerMenuProps = {
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ open, onToggle, children }) => {
  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={onToggle}
        className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      {/* Overlay menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-50 transition-opacity duration-200 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onToggle}
      ></div>
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-primary text-primary-foreground z-50 shadow-lg transform transition-transform duration-200 ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ willChange: "transform" }}
      >
        <div className="flex flex-col gap-4 p-6 pt-16">
          {children}
        </div>
      </nav>
    </div>
  );
};

export default HamburgerMenu;

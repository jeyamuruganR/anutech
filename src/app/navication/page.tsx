"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, Layers, DollarSign, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const navItems = [
    { href: "/", label: "Home", icon: <Home className="inline-block mr-2 mb-1" size={20} /> },
    { href: "/work", label: "Work", icon: <Layers className="inline-block mr-2 mb-1" size={20} /> },
    { href: "/pricing", label: "Pricing", icon: <DollarSign className="inline-block mr-2 mb-1" size={20} /> },
    { href: "/about", label: "About", icon: <User className="inline-block mr-2 mb-1" size={20} /> },
  ];

  // Choose one active indicator style:
  const activeIndicatorStyle = "underline"; // Options: "underline", "highlight", "glow", "pulse"

  const getDesktopActiveClass = (active: boolean, style: string) => {
    const baseClass = "transition-all duration-200 ";
    const activeClass = "text-primary font-semibold ";
    
    switch(style) {
      case "underline":
        return baseClass + (active ? activeClass + "underline underline-offset-4 decoration-2" : "text-white/90 hover:text-primary");
      case "highlight":
        return baseClass + (active ? activeClass + "bg-primary/10 px-3 py-1 rounded-full" : "text-white/90 hover:text-primary hover:bg-primary/5 px-3 py-1 rounded-full");
      case "glow":
        return baseClass + (active ? activeClass + "text-primary drop-shadow-[0_0_8px_rgba(0,112,243,0.5)]" : "text-white/90 hover:text-primary");
      case "pulse":
        return baseClass + (active ? activeClass + "animate-pulse" : "text-white/90 hover:text-primary");
      default:
        return baseClass + (active ? activeClass : "text-white/90 hover:text-primary");
    }
  };

  const getMobileActiveClass = (active: boolean) => {
    return `text-3xl font-medium transition-all duration-200 ${
      active
        ? "text-primary border-l-4 border-primary pl-4"
        : "text-white hover:text-primary pl-4"
    }`;
  };

  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-8 py-4 max-w-7xl mx-auto backdrop-blur-md bg-background/80 border-b border-zinc-800/50">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center gap-2">
            <Image
              src="/TechmuruganLogo.png" 
              alt="TechMurugan Logo" 
              width={70} 
              height={70} 
              className="w-16 h-16 text-primary border-2 rounded-full object-cover" 
            />

            <span className="relative text-2xl font-bold text-white tracking-tight">
              Tech<span className="text-primary">Murugan</span>
            </span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-lg">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={getDesktopActiveClass(isActive(item.href), activeIndicatorStyle)}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <button className="hidden md:block relative group bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
          <Link href="/contect" className="relative z-10">Contact</Link>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-white"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center md:hidden">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
          
          <nav className="flex flex-col items-start gap-8 w-full px-8">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={getMobileActiveClass(isActive(item.href))}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            
            <Link
              href="/contect"
              className="relative group bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 mt-8 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
              {/* Optionally add an icon here */}
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
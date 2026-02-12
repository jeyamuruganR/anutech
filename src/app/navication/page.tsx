"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Home, Layers, User, Mail, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const navItems = [
    { href: "/", label: "Home", icon: <Home size={18} /> },
    { href: "/work", label: "Work", icon: <Layers size={18} /> },
    { href: "/about", label: "About", icon: <User size={18} /> },
  ];

  const getDesktopActiveClass = (active: boolean) => {
    return `relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
      active
        ? "text-primary"
        : "text-gray-300 hover:text-primary"
    }`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500"></div>
              <Image
                src="/logogif.gif"
                alt="TechMurugan Logo"
                width={45}
                height={45}
                className="relative w-11 h-11 rounded-full object-cover border-2 border-transparent group-hover:border-primary/50 transition-all duration-500"
              />
            </div>
            <span className="relative text-xl font-bold">
              <span className="text-white">Tech</span>
              <span className="text-primary ml-0.5">Murugan</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-2xl p-1.5 border border-white/10">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={getDesktopActiveClass(active)}
                  >
                    <div className="relative flex items-center gap-2 px-3 py-2">
                      {/* Active indicator */}
                      {active && (
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl border border-primary/30 shadow-lg shadow-primary/5"></span>
                      )}
                      
                      {/* Icon with hover effect */}
                      <span className={`relative transition-transform duration-300 group-hover:scale-110 ${
                        active ? "text-primary" : "text-gray-400"
                      }`}>
                        {item.icon}
                      </span>
                      
                      {/* Label */}
                      <span className="relative">{item.label}</span>
                      
                      {/* Hover effect */}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Desktop Contact Button */}
          <Link href="/contact">
            <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 hover:from-primary/90 hover:to-primary group">
              <Mail size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Contact</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
            aria-label="Open menu"
          >
            <Menu size={20} className="text-white" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-xl md:hidden transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative h-full flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/logogif.gif"
                alt="TechMurugan Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-xl font-bold">
                <span className="text-white">Tech</span>
                <span className="text-primary">Murugan</span>
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              aria-label="Close menu"
            >
              <X size={20} className="text-white" />
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <nav className="flex-1 flex flex-col p-6">
            <div className="space-y-3">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                      active
                        ? "bg-gradient-to-r from-primary/20 to-transparent border border-primary/30"
                        : "hover:bg-white/5 border border-transparent hover:border-white/10"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        active
                          ? "bg-primary text-white"
                          : "bg-white/5 text-gray-400 group-hover:bg-primary/20 group-hover:text-primary"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span
                      className={`text-lg font-medium ${
                        active ? "text-primary" : "text-white"
                      }`}
                    >
                      {item.label}
                    </span>
                    {active && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"></span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Contact Button */}
            <div className="mt-auto pt-6 border-t border-white/10">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] group">
                  <Mail size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Get in Touch</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
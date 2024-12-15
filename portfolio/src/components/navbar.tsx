"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemeSwitch } from "./theme-switch";
const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex h-14 items-center justify-between">
          <div className="w-[100px]" /> {/* Spacer */}
          <nav className="flex items-center justify-center space-x-6 text-base font-medium">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className={`${
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
                asChild
              >
                <Link href={item.href}>
                  {item.name === "Home" && (
                    <Image
                      src="/favicon.ico"
                      alt="Logo"
                      width={20}
                      height={20}
                      className="rounded-full mr-2"
                    />
                  )}
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="w-[100px] flex justify-end">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}

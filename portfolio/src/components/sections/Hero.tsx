"use client";

import { Button } from "../ui/button";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "CS @ University of Waterloo",
        "Software Engineer Intern @ Wambi",
        "Computer Vision + Back-End @ Martinrea",
        "Software Engineer Intern @ Finastra",
        "Co-Founder, Director of Tech @ Wat Street",
      ],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto min-h-[85vh] flex items-center justify-center px-4">
      <div className="flex max-w-5xl w-full h-full">
        <div className="flex flex-col items-center md:items-start justify-center space-y-6 pr-12 flex-1">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold flex items-center gap-4">
              What's up <span className="animate-wave inline-block">👋🏼</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">
              I'm <span className="text-[#0BECE5]">Jaimil Dalwadi</span>
            </h2>
            <div className="h-16 mt-4">
              <span ref={el} className="text-xl text-muted-foreground"></span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform"
            >
              <Link href="mailto:jaimil.dalwadi@uwaterloo.ca">
                <EnvelopeClosedIcon className="h-4 w-4" />
              </Link>
            </Button>
            {/* <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform"
            >
              <Link href="tel:+16479820821">
                <MobileIcon className="h-4 w-4" />
              </Link>
            </Button> */}
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform"
            >
              <Link href="https://github.com/theDe-bugger" target="_blank">
                <GitHubLogoIcon className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform"
            >
              <Link
                href="https://linkedin.com/in/jaimil-dalwadi"
                target="_blank"
              >
                <LinkedInLogoIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-1">
          <div className="relative w-full h-[500px]">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#0BECE5]/30 hover:border-[#0BECE5]/50 transition-all duration-300 h-full">
              <Image
                src="/img/portrait.jpg"
                alt="Jaimil Dalwadi"
                fill
                className="object-cover object-center scale-120 hover:scale-135 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

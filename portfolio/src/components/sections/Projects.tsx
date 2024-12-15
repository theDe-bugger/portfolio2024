"use client";

import { useState, useEffect } from "react";
import { Projects as ProjectsData } from "../../data/projects/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset interval whenever currentIndex changes
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === ProjectsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]); // Add currentIndex as dependency to reset interval

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ProjectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ProjectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="container py-16 space-y-8">
      <h2 className="text-3xl font-bold text-center">Things I Built For Fun</h2>

      <div className="relative mx-auto max-w-3xl">
        {/* Navigation Buttons */}
        <button
          onClick={previousProject}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-background/80 border border-primary/20 hover:border-primary transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-6 w-6 text-primary" />
        </button>
        <button
          onClick={nextProject}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-background/80 border border-primary/20 hover:border-primary transition-colors"
          aria-label="Next project"
        >
          <ChevronRight className="h-6 w-6 text-primary" />
        </button>

        <div className="relative">
          {ProjectsData.map((project, index) => (
            <div
              key={project.name}
              className={`${currentIndex === index ? "block" : "hidden"}`}
            >
              <Card className="transition-all duration-500 border-primary/20 hover:border-primary">
                <CardContent className="p-6 space-y-6">
                  <div className="relative h-64 rounded-lg overflow-hidden border border-primary/20">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{project.name}</h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-primary text-primary"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {ProjectsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index
                ? "bg-primary"
                : "bg-muted hover:bg-muted/80"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

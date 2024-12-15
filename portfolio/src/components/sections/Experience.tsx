"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
} from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLinkIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Experiences } from "@/data/experiences/experiences";

export function Experience() {
  // Sort experiences by date (latest first)
  const sortByDate = (experiences: any[]) => {
    return [...experiences].sort((a, b) => {
      const dateA = new Date(a.dates.split(" - ")[0]);
      const dateB = new Date(b.dates.split(" - ")[0]);
      return dateB - dateA;
    });
  };

  const professionalRoles = sortByDate(
    Experiences.filter((exp) =>
      [
        "Software Engineer Intern",
        "Machine Learning Intern",
        "Full Stack Developer",
      ].some((role) => exp.role.includes(role))
    )
  );

  const leadershipRoles = sortByDate(
    Experiences.filter((exp) =>
      ["Co-Founder", "Project Manager", "Instructor"].some((role) =>
        exp.role.includes(role)
      )
    )
  );

  // Logos that need white background
  const logosNeedingBackground = ["martinrea.jpeg", "finastra.webp"];

  const LogoContainer = ({ image, name }: { image: string; name: string }) => {
    const needsBackground = logosNeedingBackground.some((logo) =>
      image.includes(logo)
    );

    return (
      <div className="shrink-0">
        <div
          className={`h-12 w-12 rounded-lg border border-[#0BECE5]/20 overflow-hidden flex items-center justify-center bg-white`}
        >
          <Image
            src={image}
            alt={name.split("@")[1]?.trim() || name}
            width={40}
            height={40}
            className={`${
              needsBackground ? "object-contain p-1" : "object-cover"
            }`}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-3xl font-bold text-center">Places I've Worked</h2>

      <Tabs defaultValue="professional" className="w-full max-w-4xl">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger
            value="professional"
            className="data-[state=active]:bg-[#0BECE5] data-[state=active]:text-[#0E1111] data-[state=active]:font-semibold"
          >
            Professional
          </TabsTrigger>
          <TabsTrigger
            value="leadership"
            className="data-[state=active]:bg-[#0BECE5] data-[state=active]:text-[#0E1111] data-[state=active]:font-semibold"
          >
            Leadership
          </TabsTrigger>
        </TabsList>

        <TabsContent value="professional">
          <ScrollArea
            className="h-[70vh] w-full rounded-md border border-[#0BECE5]/20"
            style={
              {
                "--scrollbar-size": "8px",
              } as React.CSSProperties
            }
          >
            <div className="space-y-2 p-4">
              {professionalRoles.map((exp, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="flex justify-between items-start p-4 hover:border-[#0BECE5] transition-colors cursor-pointer">
                      <div className="flex gap-4 flex-grow">
                        <LogoContainer image={exp.image} name={exp.name} />
                        <div className="space-y-2 min-w-0">
                          <div>
                            <CardTitle className="text-[#FFFBFC] text-lg">
                              {exp.role}
                            </CardTitle>
                            <CardDescription className="text-[#0BECE5] text-sm font-medium">
                              {exp.name.split("@")[1]?.trim() || exp.name}
                            </CardDescription>
                            <CardDescription className="text-muted-foreground text-xs">
                              {exp.location} | {exp.dates}
                            </CardDescription>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {exp.skills.slice(0, 3).map((skill, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="border-[#0BECE5] text-[#0BECE5] text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#0BECE5] text-[#0BECE5] hover:bg-[#0BECE5] hover:text-[#0E1111] ml-4 shrink-0"
                        >
                          <ExternalLinkIcon className="h-4 w-4 mr-2" />
                          Details
                        </Button>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-[#0E1111] text-[#FFFBFC]">
                    <DialogHeader>
                      <div className="flex items-center gap-4">
                        <LogoContainer image={exp.image} name={exp.name} />
                        <div>
                          <DialogTitle className="text-[#0BECE5]">
                            {exp.role}
                          </DialogTitle>
                          <DialogDescription>
                            {exp.name.split("@")[1]?.trim() || exp.name} |{" "}
                            {exp.location} | {exp.dates}
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>
                    <div className="space-y-4">
                      {exp.bullets.map((bullet, i) => (
                        <p key={i} className="text-sm">
                          {bullet}
                        </p>
                      ))}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="border-[#0BECE5] text-[#0BECE5]"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      {exp.link && (
                        <Button
                          variant="outline"
                          className="border-[#0BECE5] text-[#0BECE5] hover:bg-[#0BECE5] hover:text-[#0E1111]"
                          onClick={() => window.open(exp.link, "_blank")}
                        >
                          Visit Website
                        </Button>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="leadership">
          <ScrollArea
            className="h-[70vh] w-full rounded-md border border-[#0BECE5]/20"
            style={
              {
                "--scrollbar-size": "8px",
              } as React.CSSProperties
            }
          >
            <div className="space-y-2 p-4">
              {leadershipRoles.map((exp, index) => (
                <Card
                  key={index}
                  className="p-4 hover:border-[#0BECE5] transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <LogoContainer image={exp.image} name={exp.name} />
                      <div className="space-y-2">
                        <div>
                          <CardTitle className="text-[#FFFBFC] text-lg">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="text-[#0BECE5] text-sm font-medium">
                            {exp.name.split("@")[1]?.trim() || exp.name}
                          </CardDescription>
                          <CardDescription className="text-muted-foreground text-xs">
                            {exp.location} | {exp.dates}
                          </CardDescription>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                    {exp.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#0BECE5] text-[#0BECE5] hover:bg-[#0BECE5] hover:text-[#0E1111] ml-4 shrink-0"
                        onClick={() => window.open(exp.link, "_blank")}
                      >
                        <ExternalLinkIcon className="h-4 w-4 mr-2" />
                        Visit
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}

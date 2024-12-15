"use client";

import { Card, CardDescription, CardTitle } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
  // @ts-expect-error - Experiences array type is not yet defined in the codebase and needs proper typing
  const sortByDate = (experiences: Experience[]) => {
    return [...experiences].sort((a, b) => {
      const dateA = new Date(a.dates.split(" - ")[0]);
      const dateB = new Date(b.dates.split(" - ")[0]);
      return dateB.getTime() - dateA.getTime();
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

  const LogoContainer = ({ image, name }: { image: string; name: string }) => {
    return (
      <div className="shrink-0">
        <div className="h-12 w-12 rounded-lg border border-primary/20 overflow-hidden flex items-center justify-center bg-white">
          <Image
            src={image}
            alt={name.split("@")[1]?.trim() || name}
            width={40}
            height={40}
            className="object-cover"
            priority={true}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-3xl font-bold text-center">
        Places I&apos;ve Worked
      </h2>

      <Tabs defaultValue="professional" className="w-full max-w-4xl">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="leadership">Leadership</TabsTrigger>
        </TabsList>

        <TabsContent value="professional">
          <ScrollArea
            className="h-[70vh] w-full rounded-md border border-primary/20"
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
                    <Card className="flex justify-between items-start p-4 hover:border-primary transition-colors cursor-pointer">
                      <div className="flex gap-4 flex-grow">
                        <LogoContainer image={exp.image} name={exp.name} />
                        <div className="space-y-2 min-w-0">
                          <div>
                            <CardTitle className="text-foreground text-lg">
                              <span className="text-foreground">
                                {exp.role}
                                <span className="text-primary">
                                  {" "}
                                  @ {exp.name.split("@")[1]?.trim() || exp.name}
                                </span>
                              </span>
                            </CardTitle>
                            <CardDescription className="text-muted-foreground text-xs">
                              {exp.location} | {exp.dates}
                            </CardDescription>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {exp.skills
                              .slice(0, 5)
                              .map((skill: string, i: number) => (
                                <Badge
                                  key={i}
                                  variant="outline"
                                  className="border-primary text-primary text-xs"
                                >
                                  {skill}
                                </Badge>
                              ))}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground ml-4 shrink-0"
                        >
                          <ExternalLinkIcon className="h-4 w-4 mr-2" />
                          Details
                        </Button>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <div className="flex items-center gap-4">
                        <LogoContainer image={exp.image} name={exp.name} />
                        <div>
                          <DialogTitle className="text-primary">
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
                      {exp.bullets.map((bullet: string, i: number) => (
                        <p key={i} className="text-sm">
                          {bullet}
                        </p>
                      ))}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill: string, i: number) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="border-primary text-primary"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      {exp.link && (
                        <Button
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
            className="h-[70vh] w-full rounded-md border border-primary/20"
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
                  className="p-4 hover:border-primary transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <LogoContainer image={exp.image} name={exp.name} />
                      <div className="space-y-2">
                        <div>
                          <CardTitle className="text-foreground text-lg">
                            <span className="text-foreground">
                              {exp.role}
                              <span className="text-primary">
                                {" "}
                                @ {exp.name.split("@")[1]?.trim() || exp.name}
                              </span>
                            </span>
                          </CardTitle>
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
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground ml-4 shrink-0"
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

import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-muted-foreground text-sm">
            Designed & Developed by Jaimil Dalwadi © 2024
          </p>
          <p className="text-muted-foreground text-sm max-w-xl">
            I'm always happy to have a chat and discuss opportunities to grow,
            make an impact, or collaborate on interesting projects! Check out my{" "}
            <Link
              href="/resume.pdf"
              target="_blank"
              className="text-primary hover:text-primary/80"
            >
              resume <ExternalLinkIcon className="inline h-4 w-4" />
            </Link>
          </p>
          <div className="flex gap-4">
            {/* <Button
              variant="link"
              className="text-muted-foreground hover:text-[#0BECE5]"
              asChild
            >
              <Link
                href="https://github.com/theDe-bugger/portfolio"
                target="_blank"
              >
                Source <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

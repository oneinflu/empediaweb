/* eslint-disable @next/next/no-html-link-for-pages */
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="relative mx-auto max-w-container px-4">
        <NavbarComponent>
          <NavbarLeft>
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              Empedia
            </a>
            <div className="hidden md:flex items-center space-x-6 ml-10">
              <a href="/" className="text-sm font-medium hover:text-primary">
                Internships
              </a>
              <a href="/" className="text-sm font-medium hover:text-primary">
                Jobs
              </a>
              <a href="/" className="text-sm font-medium hover:text-primary">
                Courses
              </a>
              <a href="/" className="text-sm font-medium hover:text-primary">
                Mentorships
              </a>
              <a href="/" className="text-sm font-medium hover:text-primary">
                Blogs
              </a>
            </div>
          </NavbarLeft>
          <NavbarRight>
            <Button variant="outline" className="hidden md:inline-flex">
              For Business
            </Button>
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              Login/Signup
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>Empedia</span>
                  </a>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Internships
                  </a>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Jobs
                  </a>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Courses
                  </a>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Mentorships
                  </a>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blogs
                  </a>
                  <Button variant="outline" className="justify-start">
                    For Business
                  </Button>
                  <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                    Login/Signup
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}

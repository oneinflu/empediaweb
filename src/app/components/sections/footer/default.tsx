/* eslint-disable @next/next/no-html-link-for-pages */
import { ModeToggle } from "../../ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../../ui/footer";
import LaunchUI from "../../logos/launch-ui";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

export default function FooterSection() {
  return (
    <footer className="w-full bg-gradient-to-b from-white to-gray-50  pt-12">
      <div className="mx-auto max-w-container">
        {/* Newsletter Subscription */}
        <div className="mb-12 rounded-xl bg-blue-50 p-6 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-xl font-bold text-blue-800">Stay Updated</h3>
              <p className="text-sm text-blue-700">Subscribe to our newsletter for career opportunities and updates</p>
            </div>
            <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow border-blue-200 focus-visible:ring-blue-500" 
              />
              <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div>
          </div>
        </div>
 </div>
        <Footer>
           <div className="mx-auto max-w-container">
          <FooterContent className="gap-y-10">
            {/* Brand Column */}
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <LaunchUI />
                <h3 className="text-xl font-bold">Empedia</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Empowering careers through opportunities, learning, and connections.
                Your one-stop platform for professional growth.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="https://twitter.com" className="rounded-full bg-blue-100 p-2 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
                  <FaTwitter size={18} />
                </a>
                <a href="https://linkedin.com" className="rounded-full bg-blue-100 p-2 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://instagram.com" className="rounded-full bg-blue-100 p-2 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
                  <FaInstagram size={18} />
                </a>
                <a href="https://github.com" className="rounded-full bg-blue-100 p-2 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
                  <FaGithub size={18} />
                </a>
                <a href="https://discord.com" className="rounded-full bg-blue-100 p-2 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
                  <FaDiscord size={18} />
                </a>
              </div>
            </FooterColumn>

            {/* Explore Column */}
            <FooterColumn>
              <h3 className="text-md font-semibold">Explore</h3>
              <div className="mt-2 flex flex-col gap-3">
                <a
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Internships
                </a>
                <a
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Jobs
                </a>
                <a
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Courses
                </a>
                <a
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Mentorships
                </a>
              </div>
            </FooterColumn>

            {/* Company Column */}
            <FooterColumn>
              <h3 className="text-md font-semibold">Company</h3>
              <div className="mt-2 flex flex-col gap-3">
                <a
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  About Us
                </a>
                <a
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Careers
                </a>
                <a
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Blog
                </a>
                <a
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Press Kit
                </a>
              </div>
            </FooterColumn>

            {/* Resources Column */}
            <FooterColumn>
              <h3 className="text-md font-semibold">Resources</h3>
              <div className="mt-2 flex flex-col gap-3">
                <a
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Documentation
                </a>
                <a
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Help Center
                </a>
                <a
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Community
                </a>
                <a
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Webinars
                </a>
              </div>
            </FooterColumn>

            {/* Contact Column */}
            <FooterColumn>
              <h3 className="text-md font-semibold">Contact</h3>
              <div className="mt-2 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <MdEmail className="text-blue-600" />
                  <span className="text-sm text-muted-foreground">support@empedia.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdPhone className="text-blue-600" />
                  <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdLocationOn className="text-blue-600" />
                  <span className="text-sm text-muted-foreground">123 Career Street, Tech City</span>
                </div>
              </div>
            </FooterColumn>
          </FooterContent>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          <FooterBottom className="pb-6">
            <div className="text-sm">© 2025 Empedia. All rights reserved</div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a href="/" className="transition-colors hover:text-blue-600">Privacy Policy</a>
              <a href="/" className="transition-colors hover:text-blue-600">Terms of Service</a>
              <a href="/" className="transition-colors hover:text-blue-600">Cookies</a>
              <ModeToggle />
            </div>
          </FooterBottom>
          </div>
        </Footer>
     
    </footer>
  );
}

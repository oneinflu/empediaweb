import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { StarIcon, Terminal } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import Figma from "../logos/figma";
import Github from "../logos/github";

export function SocialStats() {
  const avatars = [
    {
      name: "Marcin Zaremski",
      image: "/avatars/marcin.jpg",
    },
    {
      name: "Paulina Szalasz",
      image: "/avatars/paulina.jpg",
    },
    {
      name: "Mikolaj Dobrucki",
      image: "/avatars/mikolaj.jpg",
    },
  ];

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex items-center rounded-md p-2 hover:bg-accent/5">
            {avatars.map((avatar) => (
              <Avatar key={avatar.name} className="-mr-2 h-8 w-8 shadow-md">
                <AvatarImage src={avatar.image} />
                <AvatarFallback>{avatar.name.charAt(0)}</AvatarFallback>
              </Avatar>
            ))}
            <div className="ml-4 flex flex-col gap-1">
              <div className="flex gap-1">
                <StarIcon className="h-3 w-3 fill-foreground" />
                <StarIcon className="h-3 w-3 fill-foreground" />
                <StarIcon className="h-3 w-3 fill-foreground" />
                <StarIcon className="h-3 w-3 fill-foreground" />
                <StarIcon className="h-3 w-3 fill-foreground" />
              </div>
              <p className="text-left text-xs font-medium text-muted-foreground">
                Used by x designers and developers
              </p>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="flex w-64 flex-col gap-2 p-4 text-xs">
          <div className="flex">
            <p className="flex grow items-center gap-0.5">
              <Figma className="mr-2 h-3 w-3" /> Figma users
            </p>
            <p className="text-muted-foreground">x</p>
          </div>
          <div className="flex">
            <p className="flex grow items-center gap-0.5">
              <Github className="mr-2 h-3 w-3" /> Github clones
              <span className="italic text-muted-foreground">unique</span>
            </p>
            <p className="text-muted-foreground">x</p>
          </div>
          <div className="flex">
            <p className="flex grow items-center gap-0.5">
              <Terminal className="mr-2 h-3 w-3" /> CLI installations
              <span className="italic text-muted-foreground">unique</span>
            </p>
            <p className="text-muted-foreground">x</p>
          </div>
          <p className="pt-4 text-xs text-muted-foreground">
            Data updated x
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

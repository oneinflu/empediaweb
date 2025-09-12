import { Section } from "../../ui/section";
import GPXOverlay from "../../logos/gpxoverlay";
import Catalog from "../../logos/catalog";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

const testimonials = [
  {
    name: "Marcin Zaremski",
    role: "Indie Hacker",
    text: "I love that I don't need to think about the design because Launch UI perfectly solves it for me. If you value flexibility over written-in-stone components, I can highly recommend it.",
    image: "/avatars/marcin.jpg",
    Logo: GPXOverlay,
  },
  {
    name: "Marcus Rodriguez",
    role: "Tech Lead",
    text: "What stands out about Launch UI is its flexibility. We've built everything from dashboards to marketing sites using these components, and they adapt beautifully to every context.",
    image: "/avatars/marcus.jpg",
    Logo: Catalog,
  },
];

export default function TestimonialsGrid() {
  return (
    <Section>
      <div className="mx-auto max-w-container">
        <div className="grid gap-20 md:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.name} className="flex flex-col gap-4 md:gap-6">
              <div className="h-8">
                <item.Logo />
              </div>
              <p className="italic leading-relaxed text-muted-foreground md:text-xl">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={item.image} />
                  <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

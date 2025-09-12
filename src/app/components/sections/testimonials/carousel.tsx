import { Section } from "../../ui/section";
import GPXOverlay from "../../logos/gpxoverlay";
import Catalog from "../../logos/catalog";
import CoreOS from "../../logos/coreos";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

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
  {
    name: "Darius Flynn",
    role: "Product Designer",
    text: "As a designer who codes, I appreciate how Launch UI strikes the perfect balance between aesthetics and functionality. The components are a joy to customize and extend.",
    image: "/avatars/darius.jpg",
    Logo: CoreOS,
  },
];

export default function TestimonialsCarousel() {
  return (
    <Section className="w-full overflow-hidden px-4 md:px-16">
      <div className="mx-auto max-w-container">
        <Carousel className="mx-auto w-full max-w-[640px]">
          <div className="overflow-hidden">
            <CarouselContent>
              {testimonials.map((item) => (
                <CarouselItem key={item.name}>
                  <div className="flex flex-col gap-8 p-8">
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
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <div className="mt-12 flex justify-start gap-4">
            <CarouselPrevious className="static md:absolute" />
            <CarouselNext className="static md:absolute" />
          </div>
        </Carousel>
      </div>
    </Section>
  );
}

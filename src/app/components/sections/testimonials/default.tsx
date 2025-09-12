import { Section } from "../../ui/section";
import GPXOverlay from "../../logos/gpxoverlay";

const testimonial = {
  text: "I love that I don't need to think about the design because Launch UI perfectly solves it for me. If you value flexibility over written-in-stone components, I can highly recommend it.",
  image: "https://avatar.vercel.sh/sarah",
  Logo: GPXOverlay,
};

export default function TestimonialsDefault() {
  return (
    <Section>
      <div className="mx-auto max-w-[720px]">
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="italic leading-relaxed text-muted-foreground md:text-xl">
            &ldquo;{testimonial.text}&rdquo;
          </p>
          <div className="h-8">
            <testimonial.Logo />
          </div>
        </div>
      </div>
    </Section>
  );
}

import { Section } from "../../ui/section";
import { Button } from "../../ui/button";

export default function CTA() {
  return (
    <Section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="text-3xl font-semibold sm:text-5xl">Title</h2>
        <Button variant="default" size="lg">
          Button
        </Button>
      </div>
    </Section>
  );
}

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";

export default function Hero() {
  return (
    <Section className="w-full overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="mx-auto flex max-w-container flex-col gap-12 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <h1 className="text-4xl font-semibold sm:text-6xl md:text-8xl">
            Title
          </h1>
          <p className="text-md max-w-[550px] font-medium text-muted-foreground sm:text-xl">
            Description
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="default" size="lg">
              Primary button
            </Button>
            <Button variant="outline" size="lg">
              Secondary button
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

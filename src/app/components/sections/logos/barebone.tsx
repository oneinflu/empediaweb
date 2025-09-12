import ReactLogo from "../../logos/react";
import Logo from "../../ui/logo";
import { Section } from "../../ui/section";

export default function Logos() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center">
        <h2 className="text-md font-semibold">Title</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Logo image={ReactLogo} name="React" version="18.3.1" />
          {/* …more logos */}
        </div>
      </div>
    </Section>
  );
}

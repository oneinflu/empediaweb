import { Section } from "../../ui/section";
import SocialProofItem from "../../ui/social-proof-item";

export default function SocialProof() {
  return (
    <Section className="px-0">
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Title
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            Description
          </p>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <SocialProofItem name="Name" username="username" text="Text" />
          {/* …more items */}
        </div>
      </div>
    </Section>
  );
}

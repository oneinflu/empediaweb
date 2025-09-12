import { Section } from "../../ui/section";
import SocialProofItem from "../../ui/social-proof-item";

const socialProof = [
  {
    name: "Fabrizio Fernandez",
    username: "fab3304",
    text: (
      <>
        Playing around with <span className="text-brand">@launchui</span>{" "}
        suddenly made me feeling inspired to launch that side project.
      </>
    ),
    image: "/avatars/fabrizio.jpg",
    url: "https://twitter.com/mikolajdobrucki",
  },
  {
    name: "Darius Flynn",
    username: "flynnn",
    text: (
      <>
        Exploring <span className="text-brand">@launchui</span>
        &apos;s sleek UI. It&apos;s like a dark mode enthusiast&apos;s
        playground. Simply incredible stuff.
      </>
    ),
    image: "/avatars/darius.jpg",
    url: "https://twitter.com/mikolajdobrucki",
  },
  {
    name: "Luna Martinez",
    username: "lunacode",
    text: (
      <>
        <span className="text-brand">@launchui</span> is a game-changer for
        rapid prototyping. The components are so well thought out.
      </>
    ),
    image: "/avatars/luna.jpg",
    url: "https://twitter.com/mikolajdobrucki",
  },
  {
    name: "Olivia Blackwood",
    username: "olivia1992",
    text: (
      <>
        <span className="text-brand">@launchui</span> is not messing around with
        its component library game.
      </>
    ),
    image: "/avatars/olivia.jpg",
    url: "https://twitter.com/mikolajdobrucki",
  },
  {
    name: "Esme Rothschild",
    username: "EmeRothArt",
    text: (
      <>
        <span className="text-brand">@launchui</span> is slick. That globe
        graphic though. Making me feel like I&apos;m building websites for a
        sci-fi movie.
      </>
    ),
    image: "/avatars/esme.jpg",
    url: "https://twitter.com/mikolajdobrucki",
  },
  {
    name: "Kai Nakamura",
    username: "KaiNakWaves",
    text: (
      <>
        Just made my first website with{" "}
        <span className="text-brand">@launchui</span>. Its flexibility is
        speaking my language. No drama, just seamless integration.
      </>
    ),
    image: "/avatars/kai.jpg",
    url: "https://twitter.com/mikolajdobrucki",
  },
];

export default function SocialProof() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Loved by designers and developers across the planet
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            Here&apos;s what people are saying about Launch UI
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {socialProof.map((item) => (
            <SocialProofItem
              key={item.username}
              {...item}
              className="w-full max-w-full"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

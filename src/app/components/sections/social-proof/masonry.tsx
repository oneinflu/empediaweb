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
    name: "Nina Patel",
    username: "ninadev",
    text: (
      <>
        The way <span className="text-brand">@launchui</span> handles
        customization is brilliant. Makes everything so intuitive and simply
        amazing.
      </>
    ),
    image: "/avatars/nina.jpg",
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
  {
    name: "Marcus Chen",
    username: "marcusdev",
    text: (
      <>
        <span className="text-brand">@launchui</span> is revolutionizing how I
        approach component design. Pure magic.
      </>
    ),
    image: "/avatars/marcus.jpg",
    url: "https://twitter.com/mikolajdobrucki",
  },
  {
    name: "Sarah Parker",
    username: "sparkdev",
    text: (
      <>
        <span className="text-brand">@launchui</span> has completely transformed
        my workflow. The attention to detail is incredible.
      </>
    ),
    image: "/avatars/sarah.jpg",
    url: "https://twitter.com/mikolajdobrucki",
  },
  {
    name: "James Wilson",
    username: "jwilsontech",
    text: (
      <>
        Building with <span className="text-brand">@launchui</span> feels like
        having a design system from the future. Absolutely brilliant.
      </>
    ),
    image: "/avatars/james.jpg",
    url: "https://twitter.com/mikolajdobrucki",
  },
  {
    name: "Felix B.",
    username: "felixbs",
    text: (
      <>
        Digging into <span className="text-brand">@launchui</span>. Those
        shadows are giving me serious design envy.
      </>
    ),
    image: "/avatars/felix.jpg",
    url: "https://twitter.com/mikolajdobrucki",
  },
  {
    name: "Alex Thompson",
    username: "alexbuilds",
    text: (
      <>
        <span className="text-brand">@launchui</span> has the perfect balance of
        flexibility and structure. Exactly what I needed.
      </>
    ),
    image: "/avatars/alex.jpg",
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
        <div className="space-4 fade-bottom relative max-h-[800px] w-full space-y-4 overflow-hidden sm:columns-2 md:columns-3 lg:columns-4">
          {socialProof.map((item) => (
            <SocialProofItem
              key={item.username}
              {...item}
              className="max-w-full break-inside-avoid"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

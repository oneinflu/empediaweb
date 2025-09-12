import Logo from "../../ui/logo";
import { Section } from "../../ui/section";
import Catalog from "../../logos/catalog";
import PictelAI from "../../logos/pictelai";
import CoreOS from "../../logos/coreos";
import EasyTax from "../../logos/easytax";
import Peregrin from "../../logos/peregrin";
import LeapYear from "../../logos/leapyear";
import Marquee from "../../ui/marquee";

export default function Logos() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center">
        <h2 className="text-md font-semibold text-muted-foreground">
          Trusted by world&apos;s leading companies
        </h2>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s] [--gap:3rem]">
            <Logo
              image={Catalog}
              name="Catalog"
              width={171}
              height={54}
              showName={false}
            />
            <Logo
              image={PictelAI}
              name="PictelAI"
              width={185}
              height={54}
              showName={false}
            />
            <Logo
              image={CoreOS}
              name="CoreOS"
              width={165}
              height={54}
              showName={false}
            />
            <Logo
              image={EasyTax}
              name="EasyTax"
              width={180}
              height={54}
              showName={false}
            />
            <Logo
              image={Peregrin}
              name="Peregrin"
              width={185}
              height={54}
              showName={false}
            />
            <Logo
              image={LeapYear}
              name="LeapYear"
              width={185}
              height={54}
              showName={false}
            />
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </Section>
  );
}

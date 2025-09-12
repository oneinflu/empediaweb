
import Logo from "../../ui/logo";
import { Section } from "../../ui/section";
import Catalog from "../../logos/catalog";
import PictelAI from "../../logos/pictelai";
import CoreOS from "../../logos/coreos";
import EasyTax from "../../logos/easytax";
import Peregrin from "../../logos/peregrin";
import LeapYear from "../../logos/leapyear";

export default function Logos() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center">
        <h2 className="text-md font-semibold text-muted-foreground">
          Trusted by world&apos;s leading companies
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Logo
            image={Catalog}
            name="Catalog"
            width={114}
            height={36}
            showName={false}
          />
          <Logo
            image={PictelAI}
            name="PictelAI"
            width={123}
            height={36}
            showName={false}
          />
          <Logo
            image={CoreOS}
            name="CoreOS"
            width={110}
            height={36}
            showName={false}
          />
          <Logo
            image={EasyTax}
            name="EasyTax"
            width={120}
            height={36}
            showName={false}
          />
          <Logo
            image={Peregrin}
            name="Peregrin"
            width={123}
            height={36}
            showName={false}
          />
          <Logo
            image={LeapYear}
            name="LeapYear"
            width={123}
            height={36}
            showName={false}
          />
        </div>
      </div>
    </Section>
  );
}

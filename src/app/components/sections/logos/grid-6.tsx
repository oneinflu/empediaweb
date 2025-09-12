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
        <div className="relative grid w-full auto-rows-fr grid-cols-2 gap-[1px] bg-border text-center md:grid-cols-3">
          <div className="flex aspect-[2/1] items-center justify-center bg-background p-6">
            <Logo
              image={Catalog}
              name="Catalog"
              width={171}
              height={54}
              showName={false}
            />
          </div>
          <div className="flex aspect-[2/1] items-center justify-center bg-background p-6">
            <Logo
              image={PictelAI}
              name="PictelAI"
              width={185}
              height={54}
              showName={false}
            />
          </div>
          <div className="flex aspect-[2/1] items-center justify-center bg-background p-6">
            <Logo
              image={CoreOS}
              name="CoreOS"
              width={165}
              height={54}
              showName={false}
            />
          </div>
          <div className="flex aspect-[2/1] items-center justify-center bg-background p-6">
            <Logo
              image={EasyTax}
              name="EasyTax"
              width={180}
              height={54}
              showName={false}
            />
          </div>
          <div className="flex aspect-[2/1] items-center justify-center bg-background p-6">
            <Logo
              image={Peregrin}
              name="Peregrin"
              width={185}
              height={54}
              showName={false}
            />
          </div>
          <div className="flex aspect-[2/1] items-center justify-center bg-background p-6">
            <Logo
              image={LeapYear}
              name="LeapYear"
              width={185}
              height={54}
              showName={false}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

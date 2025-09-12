import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  
} from "lucide-react";
import {
  Item,
  ItemIcon,
  ItemTitle,
  ItemDescription,
} from "../../ui/item";
import { Section } from "../../ui/section";

export default function Items() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
          Everything you need. Nothing you don&apos;t.
        </h2>
        <div className="grid auto-rows-fr grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
          <Item className="flex-row items-center">
            <ItemIcon className="glass-4 self-center rounded-lg p-4">
              <ScanFaceIcon className="h-8 w-8 stroke-1" />
            </ItemIcon>
            <div className="flex flex-col gap-2">
              <ItemTitle>Accessibility first</ItemTitle>
              <ItemDescription>
                Fully WCAG 2.0 compliant, made with best a11y practices
              </ItemDescription>
            </div>
          </Item>
          <Item className="flex-row items-center">
            <ItemIcon className="glass-4 self-center rounded-lg p-4">
              <MonitorSmartphoneIcon className="h-8 w-8 stroke-1" />
            </ItemIcon>
            <div className="flex flex-col gap-2">
              <ItemTitle>Responsive design</ItemTitle>
              <ItemDescription>
                Looks and works great on any device and screen size
              </ItemDescription>
            </div>
          </Item>
          <Item className="flex-row items-center">
            <ItemIcon className="glass-4 self-center rounded-lg p-4">
              <EclipseIcon className="h-8 w-8 stroke-1" />
            </ItemIcon>
            <div className="flex flex-col gap-2">
              <ItemTitle>Light and dark mode</ItemTitle>
              <ItemDescription>
                Seamless switching between color schemes, 6 themes included
              </ItemDescription>
            </div>
          </Item>
          <Item className="flex-row items-center">
            <ItemIcon className="glass-4 self-center rounded-lg p-4">
              <BlocksIcon className="h-8 w-8 stroke-1" />
            </ItemIcon>
            <div className="flex flex-col gap-2">
              <ItemTitle>Easy to customize</ItemTitle>
              <ItemDescription>
                Flexible options to match your product or brand
              </ItemDescription>
            </div>
          </Item>
          <Item className="flex-row items-center">
            <ItemIcon className="glass-4 self-center rounded-lg p-4">
              <FastForwardIcon className="h-8 w-8 stroke-1" />
            </ItemIcon>
            <div className="flex flex-col gap-2">
              <ItemTitle>Top-level performance</ItemTitle>
              <ItemDescription>
                Made for lightning-fast load times and smooth interactions
              </ItemDescription>
            </div>
          </Item>
          <Item className="flex-row items-center">
            <ItemIcon className="glass-4 self-center rounded-lg p-4">
              <RocketIcon className="h-8 w-8 stroke-1" />
            </ItemIcon>
            <div className="flex flex-col gap-2">
              <ItemTitle>Production ready</ItemTitle>
              <ItemDescription>
                Thoroughly tested and launch-prepared
              </ItemDescription>
            </div>
          </Item>
        </div>
      </div>
    </Section>
  );
}

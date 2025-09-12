"use client";

import { cn } from "@/lib/utils";
import { CircleCheckBig, User, Users } from "lucide-react";
import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import { Switch } from "../../ui/switch";
import { useState } from "react";
import Link from "next/link";

type Plan = {
  name: string;
  description: string;
  icon?: React.ReactNode;
  monthlyPrice: number;
  yearlyPrice: number;
  cta: {
    variant: "outline" | "default" | "glow";
    label: string;
    href: string;
  };
  features: string[];
  featured: boolean;
  classes?: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    description: "Perfect for small teams and growing businesses",
    icon: <User className="h-4 w-4" />,
    monthlyPrice: 15,
    yearlyPrice: 144,
    cta: {
      variant: "default",
      label: "Get started",
      href: "#",
    },
    features: [
      "Up to 5 team members",
      "20GB storage",
      "Basic analytics",
      "24/7 email support",
      "API access",
    ],
    featured: true,
    classes:
      "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
  },
  {
    name: "Enterprise",
    description: "For larger teams with advanced needs",
    icon: <Users className="h-4 w-4" />,
    monthlyPrice: 75,
    yearlyPrice: 720,
    cta: {
      variant: "glow",
      label: "Contact sales",
      href: "#",
    },
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Advanced analytics",
      "24/7 priority support",
      "Custom integrations",
      "SSO authentication",
      "Dedicated account manager",
    ],
    featured: false,
    classes:
      "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
  },
];

export function Pricing2ColsSubscription() {
  const [isYearly, setIsYearly] = useState(true);
  const yearlyDiscount = 20; // 20% discount for yearly plans

  return (
    <Section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Pricing
          </h2>
          <p className="text-md max-w-[760px] font-medium text-muted-foreground sm:text-xl">
            This is just a preview of a component variant for subscription
            products. Launch UI Pro version is available as one-time purchase
            with lifetime access.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm">Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-brand"
            />
            <span className="text-sm">
              Yearly
              <span className="ml-1.5 rounded-full bg-brand/10 px-2 py-0.5 text-xs text-brand">
                Save {yearlyDiscount}%
              </span>
            </span>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-container grid-cols-1 gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex max-w-container flex-col gap-6 overflow-hidden rounded-2xl p-8 shadow-xl",
                plan.classes,
              )}
            >
              <hr
                className={cn(
                  "absolute left-[10%] top-0 h-[1px] w-[80%] border-0 bg-gradient-to-r from-transparent via-foreground/60 to-transparent",
                  plan.featured && "via-brand",
                )}
              />
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                  <h2 className="flex items-center gap-2 font-bold">
                    {plan.icon && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        {plan.icon}
                      </div>
                    )}
                    {plan.name}
                  </h2>
                  <p className="max-w-[220px] text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 lg:flex-col lg:items-start xl:flex-row xl:items-center">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-muted-foreground">
                      $
                    </span>
                    <span className="text-6xl font-bold">
                      {isYearly
                        ? Math.round(plan.yearlyPrice / 12)
                        : plan.monthlyPrice}
                    </span>
                  </div>
                  <div className="flex min-h-[40px] flex-col">
                    <span className="text-sm">/ month</span>
                    <span className="text-sm text-muted-foreground">
                      {isYearly ? "billed yearly" : "billed monthly"}
                    </span>
                  </div>
                </div>
                <Button variant={plan.cta.variant} size="lg" asChild>
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
                <hr className="border-input" />
              </div>
              <div>
                <ul className="flex flex-col gap-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CircleCheckBig className="h-4 w-4 shrink-0 text-muted-foreground" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

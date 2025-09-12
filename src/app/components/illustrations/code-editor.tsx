import Glow from "../ui/glow";
import React from "../logos/react";
import Tailwind from "../logos/tailwind";

const CodeEditorIllustration: React.FC = () => {
  return (
    <div className="h-full w-full">
      <div className="relative h-full w-full">
        <div className="absolute left-[50%] top-0 z-10 w-full -translate-x-[50%] translate-y-0">
          <div className="relative flex min-h-[540px] min-w-[460px] flex-col gap-4 rounded-[12px] border border-border/100 bg-muted/100 dark:border-border/5 dark:border-t-border/15 dark:bg-muted/50">
            <div className="flex w-full items-center justify-start gap-4 overflow-hidden py-2">
              <div className="hidden gap-2 pl-4 lg:flex">
                <div className="h-3 w-3 rounded-full bg-accent"></div>
                <div className="h-3 w-3 rounded-full bg-accent"></div>
                <div className="h-3 w-3 rounded-full bg-accent"></div>
              </div>
              <div className="relative flex w-[320px]">
                <div className="relative z-10 flex grow basis-0 items-center gap-2 px-4 py-1.5 text-xs text-muted-foreground">
                  <React className="h-4 w-4" />
                  <p>page.tsx</p>
                </div>
                <div className="relative z-10 flex grow basis-0 items-center gap-2 px-4 py-1.5 text-xs text-muted-foreground">
                  <Tailwind className="h-4 w-4" />
                  <p>tailwind.config.ts</p>
                </div>
                <div className="absolute left-0 top-0 h-full w-[50%] px-2 transition-all duration-1000 ease-in-out group-hover:left-[50%]">
                  <div className="glass-4 h-full w-full rounded-md shadow-md"></div>
                </div>
              </div>
            </div>
            <div className="relative w-full grow overflow-hidden">
              <div className="absolute left-0 top-0 translate-x-0 px-8 transition-all duration-1000 ease-in-out group-hover:translate-x-[-100%] group-hover:opacity-0">
                <pre className="font-mono text-xs text-muted-foreground">
                  <span className="text-brand">import</span>
                  <span className="text-muted-foreground"> {`{ `}</span>
                  <span className="text-foreground">cn</span>
                  <span className="text-muted-foreground"> {`}`} </span>
                  <span className="text-brand">from </span>
                  <span className="text-brand-foreground">
                    &quot;@/lib/utils&quot;
                  </span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-brand">import</span>
                  <span className="text-foreground"> clsx</span>
                  <span className="text-brand"> from </span>
                  <span className="text-brand-foreground">
                    {" "}
                    &quot;clsx&quot;
                  </span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-brand">import</span>
                  <span className="text-muted-foreground"> {`{ `}</span>
                  <span className="text-foreground">PropsWithChildren</span>
                  <span className="text-muted-foreground">{` }`} </span>
                  <span className="text-brand">from </span>
                  <span className="text-brand-foreground">
                    &quot;react&quot;
                  </span>
                  <span className="text-muted-foreground">;</span>
                  {"\n\n"}
                  <span className="text-brand">type</span>
                  <span className="text-foreground"> NoteProps</span>
                  <span className="text-muted-foreground"> = </span>
                  <span className="text-foreground">PropsWithChildren</span>
                  <span className="text-muted-foreground"> & {`{`}</span>
                  {"\n"}
                  <span className="text-muted-foreground"> title?: </span>
                  <span className="text-foreground">string</span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-muted-foreground"> type?: </span>
                  <span className="text-brand-foreground">
                    &quot;note&quot;
                  </span>
                  <span className="text-muted-foreground"> | </span>
                  <span className="text-brand-foreground">
                    &quot;danger&quot;
                  </span>
                  <span className="text-muted-foreground"> | </span>
                  <span className="text-brand-foreground">
                    &quot;warning&quot;
                  </span>
                  <span className="text-muted-foreground"> | </span>
                  <span className="text-brand-foreground">
                    &quot;success&quot;
                  </span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-muted-foreground"> className?: </span>
                  <span className="text-foreground">string</span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-muted-foreground">{` }`}</span>
                  <span className="text-muted-foreground">{`;`}</span>
                  {"\n\n"}
                  <span className="text-brand">export default function</span>
                  <span className="text-foreground"> Note</span>
                  <span className="text-muted-foreground">{`({`}</span>
                  {"\n"}
                  <span className="text-muted-foreground"> children,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> title = </span>
                  <span className="text-brand-foreground">
                    &quot;Note&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> type = </span>
                  <span className="text-brand-foreground">
                    &quot;note&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> className,</span>
                  {"\n"}
                  <span className="text-muted-foreground">{` }`}</span>
                  <span className="text-foreground">: </span>
                  <span className="text-foreground">NoteProps</span>
                  <span className="text-muted-foreground">{` ) {`}</span>
                  {"\n"}
                  <span className="text-muted-foreground">
                    {" "}
                    const noteClassNames ={" "}
                  </span>
                  <span className="text-foreground">clsx</span>
                  <span className="text-muted-foreground">{`({`}</span>
                  {"\n"}
                  <span className="text-muted-foreground"> </span>
                  <span className="text-brand-foreground">
                    &quot;dark:bg-stone-950/25 bg-stone-50&quot;
                  </span>
                  <span className="text-muted-foreground">: type == </span>
                  <span className="text-brand-foreground">
                    &quot;note&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> </span>
                  <span className="text-brand-foreground">
                    &quot;dark:bg-red-950 bg-red-100 border-red-200
                    dark:border-red-900&quot;
                  </span>
                  <span className="text-muted-foreground">:</span>
                  {"\n"}
                  <span className="text-muted-foreground"> type === </span>
                  <span className="text-brand-foreground">
                    &quot;danger&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> </span>
                  <span className="text-brand-foreground">
                    &quot;dark:bg-orange-950 bg-orange-100 border-orange-200
                    dark:border-orange-900&quot;
                  </span>
                  <span className="text-muted-foreground">:</span>
                  {"\n"}
                  <span className="text-muted-foreground"> type === </span>
                  <span className="text-brand-foreground">
                    &quot;warning&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> </span>
                  <span className="text-brand-foreground">
                    &quot;dark:bg-green-950 bg-green-100 border-green-200
                    dark:border-green-900&quot;
                  </span>
                  <span className="text-muted-foreground">:</span>
                  {"\n"}
                  <span className="text-muted-foreground"> type === </span>
                  <span className="text-brand-foreground">
                    &quot;success&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> {` });`}</span>
                </pre>
              </div>

              <div className="absolute left-0 top-0 translate-x-[100%] px-8 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                <pre className="font-mono text-xs text-muted-foreground">
                  <span className="text-brand">import</span>
                  <span className="text-muted-foreground"> {`{ `}</span>
                  <span className="text-foreground">Config</span>
                  <span className="text-muted-foreground"> {`}`} </span>
                  <span className="text-brand">from </span>
                  <span className="text-brand-foreground">
                    &quot;tailwindcss&quot;
                  </span>
                  <span className="text-muted-foreground">;</span>
                  {"\n\n"}
                  <span className="text-brand">const</span>
                  <span className="text-foreground"> config</span>
                  <span className="text-muted-foreground"> = {`{`}</span>
                  {"\n"}
                  <span className="text-muted-foreground"> darkMode: [</span>
                  <span className="text-brand-foreground">
                    &quot;class&quot;
                  </span>
                  <span className="text-muted-foreground">],</span>
                  {"\n"}
                  <span className="text-muted-foreground"> content: [</span>
                  {"\n"}
                  <span className="text-muted-foreground"> </span>
                  <span className="text-brand-foreground">
                    {`  `}&quot;./pages/**/*.{`{`}js,ts,jsx,tsx,mdx{`}`}&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> </span>
                  <span className="text-brand-foreground">
                    {`  `}&quot;./components/**/*.{`{`}js,ts,jsx,tsx,mdx{`}`}
                    &quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> </span>
                  <span className="text-brand-foreground">
                    {`  `}&quot;./app/**/*.{`{`}js,ts,jsx,tsx,mdx{`}`}&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> ],</span>
                  {"\n"}
                  <span className="text-muted-foreground"> theme: {`{`}</span>
                  {"\n"}
                  {`  `}
                  <span className="text-muted-foreground"> extend: {`{`}</span>
                  {"\n"}
                  {`    `}
                  <span className="text-muted-foreground"> colors: {`{`}</span>
                  {"\n"}
                  {`      `}
                  <span className="text-muted-foreground"> background: </span>
                  <span className="text-brand-foreground">
                    &quot;hsl(var(--background))&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  {`      `}
                  <span className="text-muted-foreground"> foreground: </span>
                  <span className="text-brand-foreground">
                    &quot;hsl(var(--foreground))&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  {`      `}
                  <span className="text-muted-foreground"> card: {`{`}</span>
                  {"\n"}
                  {`        `}
                  <span className="text-muted-foreground"> DEFAULT: </span>
                  <span className="text-brand-foreground">
                    &quot;hsl(var(--card) / 0.2)&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  {`        `}
                  <span className="text-muted-foreground"> foreground: </span>
                  <span className="text-brand-foreground">
                    &quot;hsl(var(--card-foreground))&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  {`      `}
                  <span className="text-muted-foreground"> {`}`},</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <Glow
          variant="bottom"
          className="translate-y-12 scale-110 transition-all duration-1000 group-hover:scale-[130%]"
        />
      </div>
    </div>
  );
};

export default CodeEditorIllustration;

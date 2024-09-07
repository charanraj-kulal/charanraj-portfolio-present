import React from "react";
import BlurFade from "@/components/magicui/blur-fade";

import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";
import { TracingBeam } from "../components/ui/tracing-beam";
const BLUR_FADE_DELAY = 0.04;
const Experience: React.FC = () => {
  return (
    <TracingBeam className="px-6 my-32">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      </div>
    </TracingBeam>
  );
};

export default Experience;

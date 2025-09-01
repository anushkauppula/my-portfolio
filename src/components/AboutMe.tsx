import Section from "./Section";
import profile from "../data/profile";

export default function AboutMe() {
  return (
    <Section title="About Me">
      <div className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
        {profile.summary}
      </div>
    </Section>
  );
}

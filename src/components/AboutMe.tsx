// AboutMe.tsx
import Section from "./Section";
import profile from "../data/profile";

export default function AboutMe() {
  return (
    <Section title="About Me">
      <div className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto space-y-4">
        {profile.summary.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </Section>
  );
}

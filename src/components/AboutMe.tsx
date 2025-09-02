// AboutMe.tsx
import Section from "./Section";
import profile from "../data/profile";

export default function AboutMe() {
  return (
    <Section title="About Me">
      <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-slate-100 border border-purple-200 rounded-2xl shadow-lg p-6 sm:p-10 max-w-2xl mx-auto">
        <div className="text-lg text-slate-700 leading-relaxed space-y-6 text-center">
          {profile.summary.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

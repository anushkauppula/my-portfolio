import Section from "./Section";
import profile from "../data/profile";

export default function Education() {
  return (
    <Section title="Education">
      <div className="space-y-6">
        {profile.education.map((e, i) => (
          <div key={i} className="rounded-2xl border p-5 bg-white shadow-sm">
            <h3 className="text-xl font-semibold">{e.degree}</h3>
            <p className="text-slate-700">{e.school}</p>
            <p className="text-sm text-slate-600 mt-1">{e.date}</p>
            <div className="mt-3">
              <h4 className="font-medium">Coursework</h4>
              <p className="text-sm text-slate-700 mt-1">
                {e.coursework.join(" • ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

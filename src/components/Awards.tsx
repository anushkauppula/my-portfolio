import Section from "./Section";
import profile from "../data/profile";

export default function Awards() {
  return (
    <Section title="Awards & Honors" subtitle="Recognition and presentations.">
      <div className="space-y-6">
        <div className="rounded-2xl border p-5 bg-white shadow-sm">
          <ul className="list-disc list-inside space-y-2">
            {profile.awards.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl border p-5 bg-white shadow-sm">
          <h4 className="font-semibold mb-2">Presentations</h4>
          <ul className="list-disc list-inside space-y-1">
            {profile.presentations.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      </div>
    </Section>
  );
}

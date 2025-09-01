
import Section from "./Section";
import profile from "../data/profile";

export default function Achievements() {
  const { achievements } = profile;
  return (
    <Section title="Achievements">
      <div className="space-y-10">
        {/* Leadership & Impact */}
        <div>
          <h2 className="text-xl font-bold text-slate-700 border-b pb-1 mb-3">LEADERSHIP & IMPACT</h2>
          <div className="space-y-2">
            {achievements?.leadershipImpact.map((item) => (
              <div key={item.category}>
                <span className="font-semibold italic">{item.category}</span>
                <ul className="list-disc list-inside ml-6">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Achievements & Honors */}
        <div>
          <h2 className="text-xl font-bold text-slate-700 border-b pb-1 mb-3">ACHIEVEMENTS & HONORS</h2>
          <div className="space-y-2">
            {achievements?.honors.map((item) => (
              <div key={item.org}>
                <span className="italic font-semibold">{item.org}</span>
                <ul className="list-disc list-inside ml-6">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Presentations */}
        <div>
          <h2 className="text-xl font-bold text-slate-700 border-b pb-1 mb-3">PRESENTATIONS</h2>
          <ul className="list-disc list-inside ml-6">
            {achievements?.presentations.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

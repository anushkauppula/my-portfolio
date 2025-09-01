

import Section from "./Section";
import profile from "../data/profile";
import { Award, Star, Presentation } from "lucide-react";

export default function Achievements() {
  const { achievements } = profile;
  return (
    <Section title="Achievements">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Leadership & Impact */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-slate-100 border border-blue-200 rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <Star className="text-blue-500" size={28} />
            <h2 className="text-xl font-extrabold text-blue-700 tracking-tight">Leadership & Impact</h2>
          </div>
          <div className="space-y-4">
            {achievements?.leadershipImpact.map((item) => (
              <div key={item.category}>
                <span className="font-semibold italic text-purple-700">{item.category}</span>
                <ul className="list-disc list-inside ml-6 mt-1 text-slate-700">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="mb-1">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Achievements & Honors */}
        <div className="bg-gradient-to-br from-yellow-50 via-pink-50 to-slate-100 border border-yellow-200 rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <Award className="text-yellow-500" size={28} />
            <h2 className="text-xl font-extrabold text-yellow-700 tracking-tight">Achievements & Honors</h2>
          </div>
          <div className="space-y-4">
            {achievements?.honors.map((item) => (
              <div key={item.org}>
                <span className="italic font-semibold text-pink-700">{item.org}</span>
                <ul className="list-disc list-inside ml-6 mt-1 text-slate-700">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="mb-1">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Presentations */}
        <div className="bg-gradient-to-br from-green-50 via-blue-50 to-slate-100 border border-green-200 rounded-2xl shadow-lg p-6 md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <Presentation className="text-green-500" size={28} />
            <h2 className="text-xl font-extrabold text-green-700 tracking-tight">Presentations</h2>
          </div>
          <ul className="list-disc list-inside ml-6 mt-1 text-slate-700">
            {achievements?.presentations.map((point, idx) => (
              <li key={idx} className="mb-1">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

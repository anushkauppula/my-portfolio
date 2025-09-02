
import Section from "./Section";
import profile from "../data/profile";
import { Briefcase } from "lucide-react";


export default function Experience() {
  return (
    <Section title="Experience">
  <div className="flex flex-col gap-6 sm:gap-8">
        {profile.experience.map((job, i) => (
          <article
            key={i}
            className="bg-gradient-to-br from-yellow-50 via-pink-50 to-slate-100 border border-yellow-200 rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="text-yellow-600" size={22} />
              <h3 className="text-lg font-bold text-yellow-700">{job.title}</h3>
            </div>
            <div className="text-sm text-slate-700 mb-1 font-semibold">{job.company}</div>
            <div className="text-xs text-slate-500 mb-2">{job.date}</div>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

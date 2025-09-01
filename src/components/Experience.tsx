import Section from "./Section";
import profile from "../data/profile";


export default function Experience() {
  return (
    <Section title="Experience">
  <div className="flex flex-col gap-8">
        {profile.experience.map((job, i) => (
          <div key={i} className="bg-white border rounded-2xl shadow-sm p-6 flex flex-col h-full">
            <div className="mb-2 flex flex-col gap-1">
              <span className="text-blue-700 font-bold text-lg">{job.title}</span>
              <span className="text-slate-600 font-medium">{job.company}</span>
              <span className="text-xs text-slate-400">{job.date}</span>
            </div>
            <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

import Section from "./Section";
import profile from "../data/profile";

export default function Education() {
  return (
    <Section title="Education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {profile.education.map((e, i) => (
          <article
            key={i}
            className="bg-gradient-to-br from-green-50 via-blue-50 to-slate-100 border border-green-200 rounded-2xl shadow-lg p-6 flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-green-700 mb-2">{e.degree}</h3>
            <p className="text-slate-700 font-medium">{e.school}</p>
            <p className="text-sm text-slate-600 mt-1">{e.date}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {e.coursework.map((course) => (
                <span key={course} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold shadow">
                  {course}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

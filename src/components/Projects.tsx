import { useState } from "react";
import Section from "./Section";
import profile from "../data/profile";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const allTags = Array.from(
    new Set(profile.projects.flatMap((p) => p.stack))
  );

  const filtered =
    filter === "All"
      ? profile.projects
      : profile.projects.filter((p) => p.stack.includes(filter));

  return (
    <Section title="Projects">
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          className={`px-3 py-1 rounded ${
            filter === "All" ? "bg-blue-600 text-white" : "bg-slate-200"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        {allTags.map((tag, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded ${
              filter === tag ? "bg-blue-600 text-white" : "bg-slate-200"
            }`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {filtered.map((p, i) => (
          <article
            key={i}
            className="bg-gradient-to-br from-blue-50 via-purple-50 to-slate-100 border border-blue-200 rounded-2xl shadow-lg p-6 flex flex-col h-full"
          >
            <h3 className="text-xl font-extrabold text-blue-700 mb-2">{p.name}</h3>
            <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700">
              {p.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold shadow">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

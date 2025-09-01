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

      <div className="grid sm:grid-cols-2 gap-6">
        {filtered.map((p, i) => (
          <article
            key={i}
            className="rounded-2xl border p-5 bg-white dark:bg-slate-800 shadow-sm"
          >
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <ul className="mt-2 list-disc list-inside space-y-1">
              {p.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="font-medium">Stack:</span> {p.stack.join(" • ")}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

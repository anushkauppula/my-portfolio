import Section from "./Section";
import profile from "../data/profile";
import { Code, Layers, Database, Cloud, Settings, Wrench } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  languages: <Code className="inline-block mr-2 text-blue-500" size={20} />,
  frontend: <Layers className="inline-block mr-2 text-pink-500" size={20} />,
  backend: <Settings className="inline-block mr-2 text-purple-500" size={20} />,
  databases: <Database className="inline-block mr-2 text-green-500" size={20} />,
  cloud: <Cloud className="inline-block mr-2 text-cyan-500" size={20} />,
  devops: <Wrench className="inline-block mr-2 text-yellow-500" size={20} />,
  tools: <Wrench className="inline-block mr-2 text-gray-500" size={20} />,
};

function formatKey(key: string) {
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
}

export default function Skills() {
  return (
    <Section title="Skills">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {Object.entries(profile.skills).map(([key, arr]) => (
          Array.isArray(arr) ? (
            <div key={key} className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex flex-col">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                {icons[key] || <Wrench className="text-slate-400 mr-2" size={20} />}
                <span className="text-slate-700">{formatKey(key)}</span>
              </h3>
              <ul className="flex flex-wrap gap-2 mt-2">
                {arr.map((item: string) => (
                  <li key={item} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        ))}
      </div>
    </Section>
  );
}

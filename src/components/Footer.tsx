import { Github, Linkedin, Mail, PenLine } from "lucide-react";
import profile from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t bg-white/50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-slate-700 dark:text-slate-200">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-blue-700 transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-700 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.links.medium}
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600 transition"
            aria-label="Medium"
          >
            <PenLine size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

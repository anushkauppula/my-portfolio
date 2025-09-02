import Section from "./Section";
import profile from "../data/profile";
import { Mail, Phone, Github, Linkedin, PenLine } from "lucide-react";

export default function Contact() {
  return (
    <Section title="Contact" subtitle="Let’s build something great together.">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-5 bg-white shadow-sm space-y-3">
          {/* Email removed as requested */}

        </div>

        <div className="rounded-2xl border p-5 bg-white shadow-sm space-y-3">
          <a
            className="flex items-center gap-3 hover:underline"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin /> LinkedIn
          </a>
          <a
            className="flex items-center gap-3 hover:underline"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github /> GitHub
          </a>
          <a
            className="flex items-center gap-3 hover:underline"
            href={profile.links.medium}
            target="_blank"
            rel="noreferrer"
          >
            <PenLine /> Medium
          </a>
        </div>
      </div>
    </Section>
  );
}

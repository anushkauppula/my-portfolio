import Section from "./Section";
import profile from "../data/profile";
import { MapPin, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <Section>
      <div className="mt-10 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-700 mb-2">
          {profile.name}
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-purple-600 mb-4">
          <Typewriter
            words={["Software Engineer", "Full-Stack Developer", "Cloud Enthusiast"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <div className="flex items-center justify-center gap-4 text-slate-600 text-lg mb-2">
          <span className="flex items-center gap-1"><MapPin size={20} className="text-blue-500" /> {profile.location}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center gap-1"><Mail size={20} className="text-purple-500" />
            <a className="underline hover:text-blue-700 transition" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </span>
        </div>
      </div>
    </Section>
  );
}

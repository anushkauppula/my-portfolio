import Section from "./Section";
import profile from "../data/profile";
import { MapPin, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <Section>
      <div className="mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-10">
        {/* Left: Photo full square */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={require('../photo.jpeg')}
            alt="Profile"
            className="w-full h-72 sm:h-[28rem] object-cover object-center border-4 border-blue-200 shadow-lg"
            style={{ aspectRatio: '1 / 1', maxWidth: '100%' }}
          />
        </div>
        {/* Right: Text content */}
        <div className="flex-1 flex flex-col justify-center space-y-6 max-w-xl mx-auto sm:mx-0 text-center sm:text-left">
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
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-slate-600 text-lg mb-2">
            <span className="flex items-center gap-1"><MapPin size={20} className="text-blue-500" /> {profile.location}</span>            
          </div>
        </div>
      </div>
    </Section>
  );
}

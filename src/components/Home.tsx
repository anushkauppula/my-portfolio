import Section from "./Section";
import profile from "../data/profile";
import { MapPin, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col sm:flex-row">
      {/* Left: Full image */}
      <div className="sm:w-1/2 w-full h-72 sm:h-screen flex items-center justify-center bg-slate-100">
        <img
          src={require('../photo.jpeg')}
          alt="Profile"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Right: Centered text */}
      <div className="sm:w-1/2 w-full flex flex-col items-center justify-center px-6 py-16 sm:py-0 bg-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-6 text-center">
          Hey,<br />I am {profile.name}
        </h1>
        <p className="text-lg sm:text-xl text-slate-500 text-center mt-2">
          {profile.role}
        </p>
      </div>
    </div>
  );
}

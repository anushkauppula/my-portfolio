// AboutMe.tsx
import Section from "./Section";
import profile from "../data/profile";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-3xl font-extrabold text-slate-800 mb-8 text-center">About Me</h1>
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg border border-slate-200 p-10 flex flex-col justify-center items-center min-h-[350px]">
        <div className="text-lg text-slate-700 leading-relaxed space-y-6 text-center flex flex-col justify-center items-center h-full">
          {profile.summary.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

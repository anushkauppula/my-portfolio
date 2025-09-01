import Section from "./Section";
import profile from "../data/profile";
import { useSpring, animated } from "react-spring";

interface BarProps {
  skill: string;
  level: number; // % 0–100
}

function SkillBar({ skill, level }: BarProps) {
  const props = useSpring({ width: `${level}%`, from: { width: "0%" } });
  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-slate-200 h-2 rounded">
        <animated.div
          className="h-2 rounded bg-blue-600"
          style={props}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section title="Skills (Highlights)">
      <SkillBar skill="C#" level={90} />
      <SkillBar skill="Java" level={85} />
      <SkillBar skill="Python" level={80} />
      <SkillBar skill="React" level={75} />
      <SkillBar skill="Azure/AWS" level={70} />
    </Section>
  );
}

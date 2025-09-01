import Section from "./Section";
import profile from "../data/profile";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <Section title="Experience">
      <VerticalTimeline>
        {profile.experience.map((job, i) => (
          <VerticalTimelineElement
            key={i}
            date={job.date}
            iconStyle={{ background: "#2563eb", color: "#fff" }}
          >
            <h3 className="font-bold">{job.title}</h3>
            <h4 className="text-slate-600">{job.company}</h4>
            <ul className="mt-2 list-disc list-inside space-y-1">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Section>
  );
}

import { motion } from "framer-motion";
import { experience } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="page experience">
      <div className="section-heading">
        <h2>Experience</h2>
      </div>
      <p className="experience__intro">A running log of where I've worked and what I've shipped.</p>

      <ol className="timeline">
        {experience.map((job, i) => (
          <motion.li
            className="timeline__entry"
            key={job.org}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="timeline__marker">
              <span className="mono timeline__log">LOG/{String(i + 1).padStart(2, "0")}</span>
              <span className={`timeline__dot ${job.current ? "timeline__dot--current" : ""}`} />
            </div>
            <div className="timeline__card bracket-panel">
              <div className="timeline__card-head">
                <div>
                  <h3 className="timeline__org">{job.org}</h3>
                  <p className="timeline__role">{job.role}</p>
                </div>
                <div className="timeline__meta">
                  <span className="tag">{job.location}</span>
                  <span className={`mono timeline__period ${job.current ? "timeline__period--current" : ""}`}>
                    {job.period}
                  </span>
                </div>
              </div>
              <ul className="timeline__bullets">
                {job.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

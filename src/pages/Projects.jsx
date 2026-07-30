import { motion } from "framer-motion";
import { projects } from "../data/content";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="page projects">
      <div className="section-heading">
        <span className="index mono">SYS.03</span>
        <h2>Projects</h2>
      </div>
      <p className="projects__intro">Things I've built, end to end — from model to interface to deployment.</p>

      <div className="projects__grid">
        {projects.map((p, i) => (
          <motion.div
            className="project-card bracket-panel"
            key={p.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
          >
            <div className="project-card__head">
              <span className="tag">{p.tag}</span>
              {p.live && <span className="mono project-card__live"><span className="dot" /> LIVE</span>}
            </div>
            <h3 className="project-card__title">{p.name}</h3>
            <p className="project-card__blurb">{p.blurb}</p>
            <div className="project-card__tech">
              {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="project-card__links">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                  View Live →
                </a>
              )}
              <a href={p.github} target="_blank" rel="noreferrer" className="btn">
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

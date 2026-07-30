import { motion } from "framer-motion";
import { about, education, profile } from "../data/content";
import "./About.css";

export default function About() {
  return (
    <div className="page about">
      <div className="section-heading">
        <span className="index mono">SYS.01</span>
        <h2>About</h2>
      </div>

      <div className="about__grid">
        <motion.div
          className="about__bio"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {about.bio.map((para, i) => (
            <p key={i} className="about__para">{para}</p>
          ))}

          <div className="about__achievement bracket-panel">
            <span className="eyebrow">Achievement</span>
            <p className="about__achievement-text">{profile.achievement}</p>
          </div>
        </motion.div>

        <motion.aside
          className="about__side"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="bracket-panel about__facts">
            <span className="eyebrow">Quick Facts</span>
            <dl className="facts-list">
              {about.facts.map((f) => (
                <div className="facts-list__row" key={f.label}>
                  <dt className="mono">{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bracket-panel about__education">
            <span className="eyebrow">Education</span>
            <h3 className="about__school">{education.school}</h3>
            <p className="about__degree">{education.degree} · GPA {education.gpa}</p>
            <p className="about__expected mono">{education.expected}</p>
            <div className="about__coursework">
              {education.coursework.map((c) => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { about, education, profile } from "../data/content";
import kamilPhoto from "../assets/kamil-photo.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="page about">
      <div className="section-heading">
        <h2>About</h2>
      </div>

      <div className="about__grid">
        <motion.div
          className="about__bio"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="about__hook">{about.hook}</p>

          {about.bio.map((para, i) => (
            <p key={i} className="about__para">{para}</p>
          ))}

          <h3 className="about__side-heading">{about.sideHeading}</h3>
          {about.sideBio.map((para, i) => (
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
          <div className="bracket-panel about__photo-panel">
            <div className="about__photo-frame">
              <img src={kamilPhoto} alt={profile.name} className="about__photo" />
            </div>
            <div className="about__photo-caption">
              <span className="mono about__photo-name">{profile.callsign}</span>
              <span className="mono about__photo-status"><span className="dot" /> ONLINE</span>
            </div>
          </div>

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
            <p className="about__degree">{education.degree}</p>
            <p className="about__expected mono">{education.expected}</p>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}

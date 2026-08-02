import { motion } from "framer-motion";
import { skills } from "../data/content";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="page skills">
      <div className="section-heading">
        <h2>Skills</h2>
      </div>
      <p className="skills__intro">Systems I work with, grouped by subsystem.</p>

      <div className="skills__grid">
        {skills.map((group, i) => (
          <motion.div
            className="skill-panel bracket-panel"
            key={group.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <div className="skill-panel__head">
              <h3 className="mono skill-panel__title">{group.category.toUpperCase()}</h3>
            </div>
            <div className="skill-panel__items">
              {group.items.map((item) => (
                <span key={item} className="tag skill-panel__item">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/content";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — link still works */
    }
  };

  return (
    <div className="page contact">
      <div className="section-heading">
        <h2>Contact</h2>
      </div>

      <motion.div
        className="contact__hero"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="contact__lede">
          Open to internships, collaborations, and interesting problems. The fastest way to reach me is email.
        </p>

        <div className="contact__main bracket-panel">
          <span className="eyebrow">Direct Channel</span>
          <a href={`mailto:${profile.email}`} className="contact__email">
            {profile.email}
          </a>
          <div className="contact__actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">Send an Email →</a>
            <button className="btn" onClick={copyEmail} type="button">
              {copied ? "Copied ✓" : "Copy Address"}
            </button>
          </div>
        </div>

        <div className="contact__grid">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__card bracket-panel">
            <span className="mono contact__card-label">SYS/LINKEDIN</span>
            <span className="contact__card-value">Connect on LinkedIn</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact__card bracket-panel">
            <span className="mono contact__card-label">SYS/GITHUB</span>
            <span className="contact__card-value">See my repos</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

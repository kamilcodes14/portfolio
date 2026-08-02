import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/content";
import "./Contact.css";

// Sign up free at formspree.io, create a form, and paste your form ID
// here (the part after "f/" in the endpoint they give you).
const FORMSPREE_ID = "xpqvgkpa";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
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
          Open to internships, collaborations, and interesting problems. Send me a message below.
        </p>

        <div className="contact__form-panel bracket-panel">
          <span className="eyebrow">Send a Message</span>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="form-field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name" name="name" className="input" type="text" required
                  value={form.name} onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email" name="email" className="input" type="email" required
                  value={form.email} onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message" name="message" className="input textarea" rows={5} required
                value={form.message} onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send Message →"}
            </button>
            {status === "sent" && <p className="contact__form-status contact__form-status--ok">Message sent — thanks, I'll get back to you soon.</p>}
            {status === "error" && <p className="contact__form-status contact__form-status--err">Something went wrong — try emailing me directly instead.</p>}
          </form>
        </div>

        <div className="contact__socials">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__icon-btn" aria-label="Connect on LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact__icon-btn" aria-label="See my GitHub repos">
            <GitHubIcon />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

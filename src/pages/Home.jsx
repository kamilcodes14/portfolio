import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { profile, stats, projects } from "../data/content";
import IntroVideo, { INTRO_SESSION_KEY } from "../components/IntroVideo";
import "./Home.css";

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % profile.roles.length),
      2400
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="rotating-role mono">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35 }}
      >
        {profile.roles[index]}
      </motion.span>
    </span>
  );
}

export default function Home() {
  const featured = projects.slice(0, 3);
  const [showIntro, setShowIntro] = useState(
    () => typeof window !== "undefined" && !sessionStorage.getItem(INTRO_SESSION_KEY)
  );

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroVideo onDone={() => setShowIntro(false)} />}
      </AnimatePresence>

      <div className="page home">
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Portfolio // {profile.location}</span>
          <h1 className="hero__name">{profile.name}</h1>
          <div className="hero__role">
            <span className="hero__role-prompt mono">&gt;</span> <RotatingRole />
          </div>
          <p className="hero__summary">{profile.summary}</p>
          <div className="hero__cta">
            <Link to="/projects" className="btn btn-primary">View Projects →</Link>
            <Link to="/contact" className="btn">Get in Touch</Link>
          </div>
        </motion.div>
      </section>

      <section className="stats-strip">
        {stats.map((s, i) => (
          <motion.div
            className="stat bracket-panel"
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <div className="stat__value mono">{s.value}</div>
            <div className="stat__label">{s.label}</div>
          </motion.div>
        ))}
      </section>

      <section className="currently bracket-panel">
        <span className="eyebrow">Currently</span>
        <p className="currently__text">
          Building AI/ML systems as an <strong>AI/ML Engineer at Product Management Accelerator</strong> (US-based, remote).
          Recently shipped a voice assistant inspired by Iron Man's AI, a full-stack weather app running on Supabase,
          and a SETI-style signal-detection pipeline with real RTL-SDR hardware.
        </p>
      </section>

      <section className="featured">
        <div className="section-heading">
          <h2>Featured Missions</h2>
          <Link to="/projects" className="btn" style={{ marginLeft: "auto" }}>All Projects</Link>
        </div>
        <div className="featured__grid">
          {featured.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.live || p.github}
              target="_blank"
              rel="noreferrer"
              className="featured__card bracket-panel"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="tag">{p.tag}</span>
              <h3 className="featured__card-title">{p.name}</h3>
              <p className="featured__card-blurb">{p.blurb.slice(0, 110)}…</p>
              <div className="featured__card-tech">
                {p.tech.map((t) => <span key={t} className="mono featured__tech-item">{t}</span>)}
              </div>
            </motion.a>
          ))}
        </div>
      </section>
      </div>
    </>
  );
}

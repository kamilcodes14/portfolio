import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./IntroVideo.css";

// Plays once per browser session (sessionStorage), then hands off to the
// site. Fully accessible: respects prefers-reduced-motion, has a visible
// skip control, and never blocks the site if autoplay is refused.
export const INTRO_SESSION_KEY = "kz_intro_seen";

export default function IntroVideo({ onDone }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      finish();
      return;
    }
    const v = videoRef.current;
    if (v) {
      // Autoplay can be refused by some browsers even when muted, in rare
      // cases — if so, skip straight to the site instead of showing a
      // frozen black screen.
      v.play().catch(() => finish());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    sessionStorage.setItem(INTRO_SESSION_KEY, "1");
    onDone?.();
  }

  return (
    <motion.div
      className="intro-video"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <video
        ref={videoRef}
        className="intro-video__el"
        src="/intro/jungle-walk.mp4"
        muted
        playsInline
        autoPlay
        onEnded={finish}
      />
      <div className="intro-video__overlay" />

      <motion.div
        className="intro-video__title"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h1>Welcome.</h1>
        <p>You had to cross the jungle to reach my portfolio.</p>
      </motion.div>

      <button className="intro-video__skip mono" onClick={finish} type="button">
        Skip →
      </button>
    </motion.div>
  );
}

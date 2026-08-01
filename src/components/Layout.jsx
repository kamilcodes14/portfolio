import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { nav, profile } from "../data/content";
import "./Layout.css";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let frame = null;

    const handleMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        frame = null;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />

      <header className="site-header">
        <div className="site-header__inner">
          <nav className={`site-nav ${open ? "site-nav--open" : ""}`}>
            {nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `site-nav__link mono ${isActive ? "site-nav__link--active" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="menu-toggle mono"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner mono">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="site-footer__links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </span>
        </div>
      </footer>
    </>
  );
}

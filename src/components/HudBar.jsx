import { useEffect, useState } from "react";
import { profile } from "../data/content";
import "./HudBar.css";

function formatUTC(date) {
  return date.toISOString().slice(11, 19) + " UTC";
}

export default function HudBar() {
  const [time, setTime] = useState(() => formatUTC(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatUTC(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hud-bar mono" role="status" aria-label="Site status">
      <div className="hud-bar__inner">
        <span className="hud-bar__item hud-bar__item--pulse">
          <span className="dot" /> STATUS: ONLINE
        </span>
        <span className="hud-bar__item hud-bar__sep">/</span>
        <span className="hud-bar__item">CALLSIGN: {profile.callsign}</span>
        <span className="hud-bar__item hud-bar__sep hud-bar__hide-sm">/</span>
        <span className="hud-bar__item hud-bar__hide-sm">{profile.location.toUpperCase()}</span>
        <span className="hud-bar__spacer" />
        <span className="hud-bar__item">{time}</span>
      </div>
    </div>
  );
}

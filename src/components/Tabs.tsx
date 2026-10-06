import { useState, type ReactNode } from "react";
import "../styles/tabs.css";

type Props = {
  labels?: string[];
  panels: ReactNode[];
};

export default function Tabs({ labels = ["Tab 1", "Tab 2"], panels }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className="tabs">
      <nav className="tabs-nav">
        {labels.map((label, i) => (
          <button
            key={label}
            data-tab={i}
            className={i === active ? "active" : ""}
            onClick={() => setActive(i)}
          >
            {label}
          </button>
        ))}
      </nav>
      <div className="tabs-content">
        {panels.map((panel, i) => (
          <div
            key={i}
            data-tab-content={i}
            className={i === active ? "active" : ""}
          >
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}

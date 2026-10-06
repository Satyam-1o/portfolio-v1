import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./styles/global.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/home.css";
import "./styles/archive.css";

// Restore the original path after a 404.html deep-link redirect
// (e.g. /?/personal-projects -> /personal-projects) before the router mounts.
(function (l: Location) {
  if (l.search[1] === "/") {
    const decoded =
      l.search
        .slice(1)
        .split("&")
        .map((s) => s.replace(/~and~/g, "&"))
        .join("?");
    window.history.replaceState(null, "", decoded + l.hash);
  }
})(window.location);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

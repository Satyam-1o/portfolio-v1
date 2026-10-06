import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Satyam's Resume";

    // Prevent indexing (same as the original standalone page)
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow, noarchive";
    document.head.appendChild(robots);

    return () => {
      document.title = previousTitle;
      document.head.removeChild(robots);
    };
  }, []);

  return (
    <iframe
      src="/CV/Software Engineer - Hansana Prabath.pdf"
      width="100%"
      height="100%"
      title="Satyam's Resume"
      style={{
        border: "none",
        position: "fixed",
        inset: 0,
        height: "100dvh",
        margin: 0,
      }}
    />
  );
}

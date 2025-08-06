import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg-main)",
      color: "var(--heading-color)",
      padding: "2rem 0",
      textAlign: "center",
      fontFamily: "monospace",
      fontSize: "1.1rem",
      marginTop: "3rem",
    }}>
      Made with <span role="img" aria-label="coffee">☕</span>, <span role="img" aria-label="laptop">💻</span>, and questionable amounts of dark mode.
      <br/>
      <span style={{ fontSize: "0.9rem", opacity: 0.7 }}>P.S. If you found the easter egg, you get a gold star! ⭐</span>
    </footer>
  );
}

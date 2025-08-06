import React from "react";

const statuses = [
  "Now building: AI-powered PM tools ⚡️",
  "Always learning: LLMs & GenAI 📚",
  "Current favorite tool: Streamlit 🚀",
  "Open for product brainstorms 🤝"
];

export default function WhatImUpToButton() {
  const [show, setShow] = React.useState(false);
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => setIdx(i => (i + 1) % statuses.length), 3000);
    return () => clearInterval(interval);
  }, [show]);

  return (
    <div style={{
      position: "fixed",
      bottom: "1.5rem",
      right: "1.5rem",
      zIndex: 100,
      textAlign: "right"
    }}>
      <button
        onClick={() => setShow(s => !s)}
        style={{
          background: "var(--bg-card)",
          color: "var(--primary-accent)",
          border: "none",
          borderRadius: "2rem",
          padding: "0.45rem 1.1rem",
          fontFamily: "monospace",
          fontWeight: 600,
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 2px 16px #0002"
        }}
        aria-label="Show what I'm up to"
      >
        What I’m Up To&nbsp;💡
      </button>
      {show && (
        <div
          style={{
            marginTop: "0.55rem",
            background: "var(--bg-card)",
            color: "var(--primary-accent)",
            padding: "0.85rem 1.2rem",
            borderRadius: "1rem",
            minWidth: "240px",
            boxShadow: "0 6px 24px #0008",
            textAlign: "left",
            fontSize: "1.03rem",
            animation: "fadeInUp .35s cubic-bezier(.4,2,.6,1)"
          }}
        >
          {statuses[idx]}
        </div>
      )}
    </div>
  );
}

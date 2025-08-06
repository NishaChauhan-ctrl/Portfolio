import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, funFact, link }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.04 }}
      style={{
        width: "270px",
        height: "190px",
        perspective: "1200px",
        margin: "1rem",
        cursor: "pointer",
        position: "relative",
      }}
      onClick={() => setFlipped(f => !f)}
    >
      <div
        className="flip-inner"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(.4,2,.6,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0)",
        }}
      >
        {/* Front Side */}
        <div
          className="flip-front"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "var(--bg-card)",
            color: "var(--heading-color)",
            borderRadius: "1rem",
            boxShadow: "0 6px 18px #0002",
            padding: "1.2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "inherit",
            fontSize: "1rem",
          }}
        >
          <h3 style={{ margin: 0 }}>{title}</h3>
          <p style={{ margin: "0.7rem 0 0 0", minHeight: "3.2rem", color: "var(--text-main)" }}>{description}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--primary-accent)",
                marginTop: "0.6rem",
                textDecoration: "underline",
                fontSize: "0.98rem",
              }}
              onClick={e => e.stopPropagation()}
            >
              View Project →
            </a>
          )}
          <div style={{
            position: "absolute",
            bottom: 16,
            right: 20,
            fontSize: "0.8rem",
            opacity: 0.5,
            letterSpacing: "0.02em",
            color: "var(--primary-accent)"
          }}>
            Click to flip
          </div>
        </div>
        {/* Back Side */}
        <div
          className="flip-back"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "var(--bg-card)",
            color: "var(--text-main)",
            borderRadius: "1rem",
            boxShadow: "0 6px 18px #0002",
            padding: "1.2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "inherit",
            fontSize: "1rem",
            transform: "rotateY(180deg)",
          }}
        >
          <b style={{ color: "var(--primary-accent)" }}>Fun Fact:</b>
          <div style={{ marginTop: "0.7rem", textAlign: "center" }}>{funFact}</div>
          <div style={{
            position: "absolute",
            bottom: 16,
            right: 20,
            fontSize: "0.8rem",
            opacity: 0.5,
            letterSpacing: "0.02em",
            color: "var(--primary-accent)"
          }}>
            Click to flip back
          </div>
        </div>
      </div>
    </motion.div>
  );
}

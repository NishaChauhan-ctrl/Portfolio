import React from "react";
import confetti from "canvas-confetti";

const handleConfetti = (e) => {
  confetti({
    particleCount: 80,
    spread: 75,
    origin: { y: 0.65 },
  });
};

const Contact = () => (
  <section id="contact">
    <p style={{ color: "var(--text-main)" }}>
      Let’s connect! I’m always up for brainstorming, feedback, or just a good conversation.
    </p>
    <div style={{ marginTop: "1.3rem" }}>
      <a
        href="mailto:chauhan.nisha9002@gmail.com"
        className="button"
        onClick={handleConfetti}
      >Email Me</a>
      <a
        href="https://linkedin.com/in/nisha-chauhan20"
        target="_blank"
        rel="noopener noreferrer"
        className="button outline"
        style={{ marginLeft: "0.7rem" }}
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/NishaChauhan-ctrl"
        target="_blank"
        rel="noopener noreferrer"
        className="button outline"
        style={{ marginLeft: "0.7rem" }}
      >
        GitHub
      </a>
    </div>
  </section>
);

export default Contact;

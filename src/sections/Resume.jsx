import React, { useState } from "react";

const experiences = [
  {
    dates: "June 2024 – May 2025",
    role: "Graduate Ambassador",
    company: "George Washington University",
    summary:
      "From June 2024 to May 2025, I coordinated cross-functional onboarding initiatives for over 200 incoming graduates at The George Washington University. This effort boosted event participation by 30% and resulted in three process improvements adopted by the department.",
  },
  {
    dates: "Dec 2020 – July 2023",
    role: "Associate Product Manager",
    company: "Capgemini",
    summary:
      "At Capgemini, from December 2020 to July 2023, I led product strategy and roadmap delivery for two enterprise product lines. I also migrated two enterprise platforms to SaaS, resulting in a 40% reduction in system downtime and a 20% decrease in support costs. My work included developing over 10 SaaS workflows using JavaScript and REST APIs and increasing sprint velocity by 15% for a 24-member team.",
  },
  {
    dates: "Jan 2019 – Dec 2020",
    role: "Product Management Associate",
    company: "Bunaai",
    summary:
      "As a Product Management Associate at Bunaai from January 2019 to December 2020, I boosted Instagram engagement by 25% by optimizing content strategy and automating customer support for over 50 daily interactions. I also streamlined feedback loops to reduce customer query response time and increase customer loyalty.",
  },
  {
    dates: "Jan 2017 – Dec 2020",
    role: "Product Management Associate",
    company: "AIESEC",
    summary:
      "During my internship at AIESEC from January 2017 to December 2020, I redesigned the national website content workflow. This cut rejection rates to under 10% across 15+ city teams and trained 15+ chapter heads to standardize editorial operations, increasing publishing consistency nationwide.",
  },
];

const Resume = () => {
  const [flipped, setFlipped] = useState(Array(experiences.length).fill(false));

  const handleFlip = idx => {
    setFlipped(flipped =>
      flipped.map((val, i) => (i === idx ? !val : false))
    );
  };

  return (
    <section id="resume" className="resume-grid-section">
      <div className="resume-grid-summary">
        AI Product Manager with a Master’s in Engineering Management from GWU. Proven track record of shipping products, leading cross-functional teams, and driving clarity from chaos—ready for my next challenge.
      </div>
      <h3 className="resume-grid-subhead">Experience</h3>
      <div className="resume-grid">
        {experiences.map((exp, idx) => (
          <div
            className={`resume-card resume-card-small${flipped[idx] ? " flipped" : ""}`}
            key={idx}
            onClick={() => handleFlip(idx)}
            tabIndex={0}
            aria-label="Flip experience card"
            style={{ margin: "0 auto 2.3rem auto" }}
          >
            <div className="resume-card-inner">
              <div className="resume-card-front">
                <div className="resume-card-dates">{exp.dates}</div>
                <div className="resume-card-role">{exp.role}</div>
                <div className="resume-card-company">{exp.company}</div>
                <div className="resume-card-flip-tip">Click to see summary</div>
              </div>
              <div className="resume-card-back">
                <div className="resume-card-summary">{exp.summary}</div>
                <div className="resume-card-flip-tip">Click to go back</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;

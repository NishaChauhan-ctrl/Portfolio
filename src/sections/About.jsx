import React from "react";

const About = () => (
  <section id="about" className="about-nisha">
    <div className="about-left">
      <img src="/Portfolio/assets/Nisha.jpeg" alt="Nisha Chauhan" className="about-img" />
      <h2 style={{ marginTop: "1.2rem", marginBottom: "0.2rem", color: "var(--heading-color)" }}>Nisha Chauhan</h2>
      <div className="about-role">Product Manager</div>
      <div className="about-location">📍 Arlington, VA</div>
    </div>
    <div className="about-right">
      <div className="about-intro">
        I love building products that turn ambiguity into clarity. With a Master’s from GWU and PM experience across AI tools and CX, I thrive in cross-functional teams, connecting dots between user needs, data, and impact.
      </div>
      <div className="about-info-list">
        <div><b>Profile:</b> Product Management, AI & CX</div>
        <div><b>Location:</b> Arlington, VA, USA</div>
        <div><b>Education:</b> Master’s in Engineering Management (GWU)</div>
        <div><b>Expertise:</b> Product Strategy, User Research, AI-driven solutions, Roadmapping, A/B Testing, Stakeholder Management</div>
        <div><b>Product & Analytics:</b> JIRA, Confluence, Trello, Tableau, Excel, Visio, Agile, Scrum, SDLC</div>
        <div><b>Languages:</b> JavaScript, R, SQL, REST APIs, Python</div>
        <div><b>Documentation:</b> PRDs, BRDs, User Stories, Epics, Release Notes</div>
      </div>
      <div className="about-bottom-row">
        <a
          href="https://linkedin.com/in/nisha-chauhan20"
          target="_blank"
          rel="noopener noreferrer"
          className="about-linkedin-btn"
        >LINKEDIN</a>
      </div>
    </div>
  </section>
);

export default About;

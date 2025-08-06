import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        padding: "2.5rem 0 1rem 0",
      }}
    >
      <ProjectCard
        title="AI PRD Generator"
        description="Automates product requirements docs using GPT and Streamlit. Features live editing, version diffing, and export."
        funFact="Built the demo in a coffee-fueled weekend, my laptop battery survived, but barely."
        link="https://github.com/NishaChauhan-ctrl/PRD-Generator"
      />
      <ProjectCard
        title="Feature Prioritization Engine"
        description="Clusters feedback and ranks features for PMs with dynamic, visual scoring."
        funFact="Cluster names were inspired by real user rants, my favorite is 'Dark Mode or Die.'"
        link="https://github.com/NishaChauhan-ctrl/feature-prioritization-dashboard"
      />
      <ProjectCard
        title="Customer Support Agent"
        description="Streamlit app that auto-responds to customer complaints and escalates when needed."
        funFact="It’s handled more fake customer rants than I ever got in my inbox as a PM!"
        link="https://github.com/NishaChauhan-ctrl/customer-support-agent"
      />
    </section>
  );
}

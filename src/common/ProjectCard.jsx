import React, { useState } from "react";
import styles from "../sections/Projects/ProjectsStyles.module.css";

function ProjectCard({ src, demoLink, repoLink, h3, p }) {
  return (
    <div className={styles.projectcard}>
      <div id="logo">
        <img className="hover" src={src} />
      </div>
      <div id="link-container">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          Repo
        </a>
      </div>
      <div>
        <h3>{h3}</h3>
      </div>
    </div>
  );
}

/* <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a> */

/* alt={`${h3} logo`} */

export default ProjectCard;

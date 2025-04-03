import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import projects from "./data.projects";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">My Best Works</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project) => {
          return (
            <ProjectCard
              src={project.src}
              demoLink={project.demoLink}
              repoLink={project.repoLink}
              h3={project.h3}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;

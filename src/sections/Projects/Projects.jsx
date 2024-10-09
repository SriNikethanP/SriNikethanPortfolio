import styles from "./ProjectsStyles.module.css";
import LinkUpp from "../../assets/LinkUpp.jpeg";
import QuickCart from "../../assets/QuickCart.jpeg";
import KeeperApp from "../../assets/Keeper.jpeg";
import Music from "../../assets/SpotifyClone.jpeg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={LinkUpp}
          link="https://github.com/SriNikethanP/mern-chat-app-pjt"
          h3="LinkUpp"
          p="Messaging Webiste"
        />
        <ProjectCard
          src={QuickCart}
          link="https://github.com/SriNikethanP/e-commerce-mern-frontend"
          h3="QuickCart"
          p="E-commerce Website"
        />
        <ProjectCard
          src={KeeperApp}
          link="https://github.com/SriNikethanP/KeeperProject"
          h3="Keeper App"
          p="Notes Webiste"
        />
        <ProjectCard
          src={Music}
          link="https://github.com/SriNikethanP/SpotifyProject"
          h3="Yfitops"
          p="spotifY clone Website"
        />
      </div>
    </section>
  );
}

export default Projects;

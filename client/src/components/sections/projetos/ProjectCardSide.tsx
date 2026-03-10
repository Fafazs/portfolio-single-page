import type { GithubRepo } from "../../../types/GithubRepo"
import styles from "./Cards.module.css"
import defaultProject from "../../../assets/default-project.png";

interface ProjectCardSideProps {
  repo: GithubRepo
}

export default function ProjectCardSide({
  repo
}: ProjectCardSideProps) {


  return (
    <article className={styles.cardSide}>
       <img
          src={repo.image}
          alt={repo.name}
          className={styles.sideImg}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              defaultProject
          }}
        />    
    </article>
  )
}

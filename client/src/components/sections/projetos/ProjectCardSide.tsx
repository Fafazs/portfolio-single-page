import type { GithubRepo } from "../../../types/GithubRepo"
import styles from "./Cards.module.css"

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
              "/assets/default-project.png"
          }}
        />    
    </article>
  )
}

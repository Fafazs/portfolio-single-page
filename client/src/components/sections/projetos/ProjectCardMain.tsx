import type { GithubRepo } from "../../../types/GithubRepo"
import styles from "./Cards.module.css"
import defaultProject from "../../../assets/default-project.png";

interface ProjectCardMainProps {
  repo: GithubRepo
}

export default function ProjectCardMain({
  repo
}: ProjectCardMainProps) {
  const description =
    repo.customDescription || repo.description

  return (
    <article className={styles.cardMain}>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{repo.name}</h3>
      </a>
       <img
          src={repo.image}
          alt={repo.name}
          className={styles.mainImg}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              defaultProject
          }}
        />

        <div>

          {description && <p className={styles.description}>{description}</p>}
        </div>
          <div className={styles.info}>
            {repo.language && (
              <span className={styles.span}>{repo.language}</span>
            )}
            <span className={styles.span}>⭐ {repo.stargazers_count}</span>
          </div>
        
    </article>
  )
}

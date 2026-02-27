import type { GithubRepo } from "../../../types/GithubRepo"

interface ProjectCardSideProps {
  repo: GithubRepo
}

export default function ProjectCardSide({
  repo
}: ProjectCardSideProps) {
  const description =
    repo.customDescription || repo.description

  return (
    <article>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={repo.image}
          alt={repo.name}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/assets/default-project.png"
          }}
        />

        <div>
          <h4>{repo.name}</h4>

          {description && <p>{description}</p>}

          <div>
            {repo.language && (
              <span>{repo.language}</span>
            )}
          </div>
        </div>
      </a>
    </article>
  )
}

import type { GithubRepo } from "../../../types/GithubRepo"

interface ProjectCardMainProps {
  repo: GithubRepo
}

export default function ProjectCardMain({
  repo
}: ProjectCardMainProps) {
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
          <h3>{repo.name}</h3>

          {description && <p>{description}</p>}

          <div>
            {repo.language && (
              <span>{repo.language}</span>
            )}
            <span>⭐ {repo.stargazers_count}</span>
          </div>
        </div>
      </a>
    </article>
  )
}

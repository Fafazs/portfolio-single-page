import type { GithubRepo } from "../types/GithubRepo"
import { projectsMetadata } from "../data/projects.metadata"

const BASE_URL = "https://api.github.com"

export async function fetchStarredRepos( username: string): Promise<GithubRepo[]> {
  const response = await fetch(`${BASE_URL}/users/${username}/starred`)

  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios starred")
  }

  const data = await response.json()

  return data.map((repo: GithubRepo) => {
    const metadata = projectsMetadata[repo.id]

    return {
      ...repo,

      image:
        metadata?.image || "src/assets/projetos/default.png",

      customDescription:
        metadata?.description || repo.description
    }
  })
}
import type { GithubRepo } from "../types/GithubRepo"

const BASE_URL = "https://api.github.com"

export async function fetchStarredRepos(
  username: string
): Promise<GithubRepo[]> {
  const response = await fetch(
    `${BASE_URL}/users/${username}/starred`
  )

  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios starred")
  }

  const data: GithubRepo[] = await response.json()

  return data
}
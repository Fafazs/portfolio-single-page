import { useEffect, useState } from "react"
import { fetchStarredRepos } from "../services/github.service"
import type { GithubRepo } from "../types/GithubRepo"

export function useStarredProjects(username: string) {
  const [projects, setProjects] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

useEffect(() => {
  let isMounted = true

  async function load() {
    setLoading(true)
    setError(null)

    try {
      const data = await fetchStarredRepos(username)
      if (isMounted) {
        setProjects(data)
      }
    } catch (err) {
      console.error(err)
      if (isMounted) {
        setError("Erro ao carregar projetos.")
      }
    } finally {
      if (isMounted) {
        setLoading(false)
      }
    }
  }

  load()

  return () => {
    isMounted = false
  }
}, [username])



  return { projects, loading, error }
}
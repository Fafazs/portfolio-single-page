import { Container } from "../../ui/Container"
import { useStarredProjects } from "../../../hooks/useStarredProjects"
import ProjectsCarousel from "./ProjectsCarousel"

export function ProjetosSection() {
  const { projects, loading, error } =
    useStarredProjects("Fafazs")

  return (
    <section id="projetos">
      <Container>
        <h2>Projetos</h2>
        <p>Aqui estão alguns dos meus principais projetos.</p>

        {loading && <p>Carregando projetos...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && projects.length > 0 && (
          <ProjectsCarousel projects={projects} />
        )}

        {!loading && !error && projects.length === 0 && (
          <p>Nenhum projeto encontrado.</p>
        )}
      </Container>
    </section>
  )
}


export type ProjectMetadata = {
  image?: string
  description?: string
}

export const projectsMetadata: Record<string, ProjectMetadata> = {
  "meu-repo-principal": {
    image: "/assets/projetos/meu-repo-principal.png",
    description: "Sistema fullstack com autenticação JWT e dashboard admin."
  },

  "outro-projeto": {
    image: "/assets/projetos/outro-projeto.png"
  }
}
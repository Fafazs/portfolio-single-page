import { Container } from "../../ui/Container"
import  TechStack  from "./TechStack.tsx"

export function SobreSection() {
  return (
    <section id="sobre">
      <Container>
      <h2>Sobre Mim</h2>
      <p>
        Desenvolvedor fullstack e estudante do 3º semestre de Análise e Desenvolvimento de Sistemas na Unifor.
Atuo na construção e consumo de APIs REST com Node.js, estruturando aplicações com arquitetura MVC, autenticação, criptografia e integração com bancos de dados relacionais e não relacionais.
No front-end, desenvolvo interfaces aplicando princípios de elicitação de requisitos, prototipação e organização de código voltado à escalabilidade e experiência do usuário.
Sou formado como Técnico em Desenvolvimento Full Stack pela Digital College, onde desenvolvi projetos práticos em equipe e aprendi a versioná-los utilizando Git.
      </p>
      <TechStack />
      </Container>
    </section>
  )
}

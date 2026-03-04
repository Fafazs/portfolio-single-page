import { Container } from "../../ui/Container"
import TechStack from "./TechStack.tsx"
import styles from './SobreSection.module.css'

export function SobreSection() {
  return (
    <section id="sobre" className={styles.sobreSection}>
      <Container className={styles.sobreContainer}>
        <div className={styles.sobreText}>
          <h2>Minha Jornada</h2>
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas na UNIFOR, com formação técnica em Desenvolvimento Full Stack, e venho direcionando meus estudos para a construção de aplicações web bem estruturadas.<br />
            Tenho desenvolvido projetos utilizando Node.js para criação de APIs REST em arquitetura MVC, aplicando conceitos de autenticação, organização de código e integração com PostgreSQL. No front-end, utilizo React e Vite, buscando estruturar interfaces de forma clara, organizada e funcional.<br />
            Ainda estou em início de trajetória profissional, mas meus pontos fortes são organização, raciocínio lógico, atenção à estrutura do código e comprometimento com entender bem os fundamentos antes de avançar. Busco minha primeira oportunidade para colocar em prática o que venho estudando e evoluir dentro de um ambiente que valorize qualidade e construção sólida.
          </p>
        </div>
        <TechStack />
      </Container>
    </section>
  )
}

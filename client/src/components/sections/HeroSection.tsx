import { Container } from "../ui/Container"
import { HeroImage } from "../hero/HeroImage.tsx"
import { SocialSidebar } from "../hero/SocialSidebar.tsx"

export function HeroSection() {
  return (
    <section id="hero">
      <Container>
        <h2>Olá! me chamo</h2>
        <h1>Fabrício</h1>
          <HeroImage />
        <SocialSidebar />
        <h3>Desenvolvedor Full Stack</h3>
      </Container>
    </section>
  )
}


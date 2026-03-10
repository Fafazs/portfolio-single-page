import { Container } from "../../ui/Container.tsx"
import { HeroImage } from "./HeroImage.tsx"
import { SocialSidebar } from "./SocialSidebar.tsx"
import styles from './HeroSection.module.css'
import profile2 from '../../../assets/hero/profile2.jpeg'

export function HeroSection() {
  return (
    <section id="hero" className={styles.HeroSection}>
      <Container className={styles.heroContainer}>
          <div className={styles.socialWrapper}>
          <SocialSidebar />
        </div>
        <div className={styles.content}>

          <div>
            <h2 className={styles.subtitle}>Bem-Vindo!</h2>
            <h1 className={styles.title}>Sou o <b>Fabrício</b></h1>
          </div>

          <div className={styles.imageWrapper}>
            <HeroImage
              src={profile2}
              alt="Foto de Fabrício"
              className={styles.heroImage}
            />
          </div>
          <h3 className={styles.role}>Desenvolvedor Full Stack</h3>

        </div>
      </Container>
    </section>
  )
}


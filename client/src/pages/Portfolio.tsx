import { HeroSection } from "../components/sections/hero/index.tsx"
import { SobreSection } from "../components/sections/sobre/index.tsx"
import { ProjetosSection } from "../components/sections/projetos/index.tsx"

export function Portfolio() {
  return (
    <>
      <HeroSection />
      <SobreSection />
      <ProjetosSection />
    </>
  )
}
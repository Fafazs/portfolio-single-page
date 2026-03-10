import { Navbar } from "./Navbar"

type Props = {
  children: React.ReactNode
}

export function MainLayout({ children }: Props) {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <footer style={{ padding: "40px", textAlign: "center", borderTop: "0.5px solid #ccc", marginTop: "40px" }}>
        <strong>Obrigado por visitar meu portfólio.</strong>
        <br />
        <br />
        © 2026 Fabrício — Todos os direitos reservados
      </footer>
    </div>
  )
}

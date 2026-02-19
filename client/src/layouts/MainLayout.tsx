import { Navbar } from "../components/ui/Navbar"

type Props = {
  children: React.ReactNode
}

export function MainLayout({ children }: Props) {
  return (
    <div>
      <header>
        <Navbar />
        <h2>Portfolio SP</h2>
      </header>

     <main>{children}</main>

      <footer style={{ padding: "40px", textAlign: "center" }}>
        © 2026 Fabrício
      </footer>
    </div>
  )
}

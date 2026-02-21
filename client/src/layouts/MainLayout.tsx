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

      <footer style={{ padding: "40px", textAlign: "center" }}>
        © 2026 Fabrício
      </footer>
    </div>
  )
}

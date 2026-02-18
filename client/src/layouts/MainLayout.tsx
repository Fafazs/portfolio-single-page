type Props = {
  children: React.ReactNode
}

export function MainLayout({ children }: Props) {
  return (
    <div>
      <header>
        <h2>Portfolio SP</h2>
      </header>

      <main>{children}</main>

      <footer>
        <p>© 2026 Fabrício Nascimento</p>
      </footer>
    </div>
  )
}

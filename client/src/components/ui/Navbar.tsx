export function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#111",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        gap: "40px",
        zIndex: 1000,
      }}
    >
      <h3 style={{ color: "#fff" }}>Fabrício Nascimento</h3>
      <div style={{ display: "flex", gap: "20px" }}>
      <a href="#hero" style={{ color: "#fff" }}>
        Hero
      </a>
      <a href="#sobre" style={{ color: "#fff" }}>
        Sobre
      </a>
      <a href="#projetos" style={{ color: "#fff" }}>
        Projetos
      </a>
      </div>
    </nav>
  )
}

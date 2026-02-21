import TechBox from "./TechBox"

export default function TechStack() {
  return (
    <div className="tech-stack">
      <div className="main-techs">
        <TechBox title="JavaScript" />
        <TechBox title="React" />
        <TechBox title="Node.js" />
        <TechBox title="SQL" />
      </div>

      <p className="secondary-techs">
        Git • AWS • MVC • JWT • Figma
      </p>
    </div>
  )
}

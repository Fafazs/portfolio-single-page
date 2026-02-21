type TechBoxProps = {
  title: string
}

export default function TechBox({ title }: TechBoxProps) {
  return (
    <div className="tech-box">
      <h3>{title}</h3>
    </div>
  )
}

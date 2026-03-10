type TechBoxProps = {
  title: string
  className?: string
}

export default function TechBox({ title, className }: TechBoxProps) {
  return (
    <div className={`tech-box ${className ?? ""}`}>
      <h3>{title}</h3>
    </div>
  )
}


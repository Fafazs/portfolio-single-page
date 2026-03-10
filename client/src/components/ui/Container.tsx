import styles from "./Container.module.css"

type Props = {
  children: React.ReactNode
  id?: string
  className?: string
}

export function Container({ children, id, className }: Props) {
  return (
    <div
      id={id}
      className={`${styles.container} ${className ?? ""}`}
    >
      {children}
    </div>
  )
}

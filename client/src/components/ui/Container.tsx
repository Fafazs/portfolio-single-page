type Props = {
  children: React.ReactNode
}

export function Container({ children }: Props) {
  return <div style={{ maxWidth: "1100px", margin: "0 auto" }}>{children}</div>
}
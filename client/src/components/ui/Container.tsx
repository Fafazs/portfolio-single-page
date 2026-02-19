type Props = {
  children: React.ReactNode
  id?: string
}

export function Container({ children, id }: Props) {
  return <div id={id} style={{ maxWidth: "1100px", margin: "0 auto", height: "50vh", marginTop: "100px", scrollMarginTop: "100px" }}>{children}</div>
}
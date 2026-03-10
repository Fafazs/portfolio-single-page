import styles from "./ArrowButton.module.css"

interface ArrowButtonProps {
  direction: "left" | "right"
  onClick: () => void
}

export default function ArrowButton({
  direction,
  onClick
}: ArrowButtonProps) {

  const isLeft = direction === "left"

  return (
    <button
      onClick={onClick}
      className={styles.arrowbutton}
    >
      {isLeft ? "←" : "→"}
    </button>
  )
}

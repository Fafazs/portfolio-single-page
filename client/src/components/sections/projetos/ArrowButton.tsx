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
      className={`
        absolute 
        ${isLeft ? "left-0" : "right-0"} 
        z-10
        w-10 h-10
        flex items-center justify-center
        rounded-full
        bg-white/80
        hover:bg-white
        transition
      `}
    >
      {isLeft ? "←" : "→"}
    </button>
  )
}

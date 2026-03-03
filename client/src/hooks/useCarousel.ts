import { useState, useCallback } from "react"

export function useCarousel(total: number) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const hasItems = total > 0

  const prevIndex = hasItems
    ? (currentIndex - 1 + total) % total
    : 0

  const nextIndex = hasItems
    ? (currentIndex + 1) % total
    : 0

  const goNext = useCallback(() => {
    if (!hasItems) return
    setCurrentIndex((prev) => (prev + 1) % total)
  }, [total, hasItems])

  const goPrev = useCallback(() => {
    if (!hasItems) return
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }, [total, hasItems])

  return {
    currentIndex,
    prevIndex,
    nextIndex,
    goNext,
    goPrev
  }
}


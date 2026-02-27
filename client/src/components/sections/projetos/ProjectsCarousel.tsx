"use client"

import { useState } from "react"
import type { GithubRepo } from "../../../types/GithubRepo"
import ProjectCardMain from "./ProjectCardMain"
import ProjectCardSide from "./ProjectCardSide"
import ArrowButton from "./ArrowButton"

interface ProjectsCarouselProps {
  projects: GithubRepo[]
}

export default function ProjectsCarousel({
  projects
}: ProjectsCarouselProps) {

  if (!projects || projects.length === 0) {
    return null
  }

  const [currentIndex, setCurrentIndex] = useState(0)

  const total = projects.length

  const prevIndex = (currentIndex - 1 + total) % total
  const nextIndex = (currentIndex + 1) % total

  function handlePrev() {
    setCurrentIndex(prevIndex)
  }

  function handleNext() {
    setCurrentIndex(nextIndex)
  }

  return (
    <div className="relative flex items-center justify-center gap-6">

      {total > 1 && (
        <ArrowButton
          direction="left"
          onClick={handlePrev}
        />
      )}

      {total > 1 && (
        <ProjectCardSide
          repo={projects[prevIndex]}
        />
      )}

      <ProjectCardMain
        repo={projects[currentIndex]}
      />

      {total > 1 && (
        <ProjectCardSide
          repo={projects[nextIndex]}
        />
      )}

      {total > 1 && (
        <ArrowButton
          direction="right"
          onClick={handleNext}
        />
      )}

    </div>
  )
}

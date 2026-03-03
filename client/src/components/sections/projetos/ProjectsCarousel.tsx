"use client"

import type { GithubRepo } from "../../../types/GithubRepo"
import ProjectCardMain from "./ProjectCardMain"
import ProjectCardSide from "./ProjectCardSide"
import ArrowButton from "./ArrowButton"

interface ProjectsCarouselProps {
  projects: GithubRepo[]
  currentIndex: number
  prevIndex: number
  nextIndex: number
  onNext: () => void
  onPrev: () => void
}

export default function ProjectsCarousel({
  projects,
  currentIndex,
  prevIndex,
  nextIndex,
  onNext,
  onPrev
}: ProjectsCarouselProps) {

  const total = projects.length

  if (total === 0) return null

  return (
    <div className="relative flex items-center justify-center gap-6">

      {total > 1 && (
        <ArrowButton
          direction="left"
          onClick={onPrev}
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
          onClick={onNext}
        />
      )}

    </div>
  )
}

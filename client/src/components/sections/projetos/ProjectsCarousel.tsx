"use client"

import type { GithubRepo } from "../../../types/GithubRepo"
import ProjectCardMain from "./ProjectCardMain"
import ProjectCardSide from "./ProjectCardSide"
import ArrowButton from "./ArrowButton"
import styles from "./ProjectsCarousel.module.css"

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
    <div className={styles.carousel}>

      {total > 1 && (
        <ArrowButton
          direction="left"
          onClick={onPrev}
        />
      )}

      <div>

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

      </div>

      {total > 1 && (
        <ArrowButton
          direction="right"
          onClick={onNext}
        />
      )}

    </div>
  )
}

type HeroImageProps = {
  src: string
  alt: string
  className?: string
}

export function HeroImage({ src, alt, className }: HeroImageProps) {
  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
      />
    </div>
  )
}

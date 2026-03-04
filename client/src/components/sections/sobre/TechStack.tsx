import TechBox from "./TechBox"
import styles from "./TechStack.module.css"

export default function TechStack() {
  return (
    <div className={styles.techStack}>
      <div className={styles.mainTechs}>
        <TechBox title="JavaScript" className={styles.techBox} />
        <TechBox title="React" className={styles.techBox} />
        <TechBox title="Node.js" className={styles.techBox} />
        <TechBox title="SQL" className={styles.techBox} />
      </div>

      <p className={styles.secondaryTechs}>
        Git • AWS • MVC • JWT • Figma
      </p>
    </div>
  )
}

import styles from './SocialSidebar.module.css'
import instagramIcon from "../../../assets/hero/instagram.png"
import linkedinIcon from "../../../assets/hero/linkedin.png"
import githubIcon from "../../../assets/hero/git.png"

export function SocialSidebar() {
  return (
    <aside className={styles.socialSidebar}>
      <span className={styles.socialLabel}>SOCIAL</span>

      <div className={styles.divider} />

      <ul className={styles.socialLinks}>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src={instagramIcon}
              alt="Instagram"
              className={styles.icon}
            />
          </a>
        </li>

        <li>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className={styles.icon}
            />
          </a>
        </li>

        <li>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img
              src={githubIcon}
              alt="GitHub"
              className={styles.icon}
            />
          </a>
        </li>
      </ul>
    </aside>
  )
}

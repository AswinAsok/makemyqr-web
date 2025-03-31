import { Download } from "lucide-react"
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Scan & Generate QR Codes <span>Instantly</span>
          </h1>
          <p className={styles.heroText}>
            The fastest and most reliable QR code scanner and generator app. Scan any QR code in seconds and create your
            own custom codes with ease.
          </p>
          <a href="#download" className={`btn ${styles.heroBtn}`}>
            <Download size={20} />
            Download App
          </a>
        </div>
        <div className={styles.heroImageContainer}>
          <div className={styles.heroImage}>
            {/* This would be replaced with an actual image in production */}
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                <img
                  src="/ss.jpg"
                  alt="Mockup"
                  className={styles.mockupImage}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroBackground}></div>
    </section>
  )
}

export default Hero


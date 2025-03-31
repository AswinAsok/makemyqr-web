import { Heart } from "lucide-react"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer id="download" className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBottom}>
          <div className={styles.footerLinks}>
            <a href="/privacy-policy">Privacy Policy</a>
            {/* <a href="#">Terms of Service</a> */}
            {/* <a href="#">Contact Us</a> */}
          </div>

          <div className={styles.footerCopyright}>
            <p>
              Made with <Heart size={16} className={styles.heartIcon} /> by Hoomans Project
            </p>
            <p>&copy; {new Date().getFullYear()} QR Scan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


import React from 'react'
import styles from './CTA.module.css'

const CTA = () => {
  return (
    <div className={styles.downloadSection}>
          <h2 className={styles.downloadTitle}>Ready to start scanning?</h2>
          <p className={styles.downloadText}>
            Download our app now and experience the fastest QR code scanner and generator.
          </p>
          <div className={styles.downloadButtons}>
            <a href="#" className={styles.storeButton}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>
  )
}

export default CTA
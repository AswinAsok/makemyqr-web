"use client"

import { useState } from "react"
import { Menu, X, QrCode } from "lucide-react"
import styles from "./Header.module.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <a href="/"  className={styles.logoLink}>
            <img
              src="/logo.svg"
              alt="MakeMyQr Logo"
              className={styles.logoImage}
              width={40}
              height={40}
            />
            <span>MakeMyQr</span>
          </a>
        </div>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#features">Features</a>
            </li>
            <li className={styles.navItem}>
              <a href="#download" className="btn">
                Download App
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header


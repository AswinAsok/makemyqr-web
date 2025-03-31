import { Scan, QrCode, History, Smile } from "lucide-react"
import styles from "./Features.module.css"

const Features = () => {
  const features = [
    {
      icon: <Scan size={32} />,
      title: "Instant QR Scanning",
      description: "Scan any QR code in seconds with our lightning-fast scanner technology.",
    },
    {
      icon: <QrCode size={32} />,
      title: "QR Code Generation",
      description: "Create custom QR codes for links, text, contacts, and more with just a few taps.",
    },
    {
      icon: <History size={32} />,
      title: "Scan History",
      description: "Keep track of all your scanned codes with our organized history feature.",
    },
    {
      icon: <Smile size={32} />,
      title: "User-Friendly Interface",
      description: "Enjoy a clean, intuitive interface designed for the best user experience.",
    },
  ]

  return (
    <section id="features" className={`section ${styles.features}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Powerful Features</h2>
          <p className={styles.sectionSubtitle}>Everything you need in a QR code app</p>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features


import React from 'react';
import { QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.hero}>
        <QrCode size={80} className="mx-auto mb-8" />
        <h1 className={styles.title}>
          Make My QR
        </h1>
        <p className={styles.subtitle}>
          Generate beautiful QR codes for your business, personal use, or any other needs.
          Simple, fast, and completely free!
        </p>
        <Link to="/privacypolicy" className={styles.button}>
          Learn More
        </Link>
      </main>
    </div>
  );
}

export default Home;
// components/Hero.js
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.title}>
        Welcome to Tecknowfest 2k4. 
      </p>
      {/* description */}
      <h1 className={styles.description}>Organized By MCA Department</h1>

      <a href="https://docs.google.com/forms/u/0/" target="_blank" rel="noopener noreferrer">
        <button className={styles.ctaButton}>
          Register Now
        </button>
      </a>
    </section>
  );
}

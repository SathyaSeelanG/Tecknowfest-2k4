import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Wrap the name with Link to make it clickable */}
      <Link href="/" className={styles.name}>
        Tecknowfest 2k4
      </Link>

      {/* Use <a> tag to redirect to the registration link */}
      <a href="https://docs.google.com/forms/u/0/" target="_blank" rel="noopener noreferrer">
        <button className={styles.registerButton}>Register</button>
      </a>
    </header>
  );
}

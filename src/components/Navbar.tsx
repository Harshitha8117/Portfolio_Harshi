'use client';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href="#home" className={styles.navLink}>Home</a>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#projects" className={styles.navLink}>Projects</a>
        <a href="#contact" className={styles.navLink}>Contact</a>
      </div>
    </nav>
  );
}
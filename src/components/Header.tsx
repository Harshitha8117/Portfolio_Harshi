'use client';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Requires `lucide-react` for icons

export default function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActive(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = ['Home', 'About', 'Projects', 'Contact'];

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`${styles.links} ${menuOpen ? styles.showMenu : ''}`}>
          {sections.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`${styles.navLink} ${active === id ? styles.active : ''}`}
                onClick={scrollToSection(id)}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

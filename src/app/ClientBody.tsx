'use client';

import styles from './ClientBody.module.css';

export default function ClientBody() {
  return (
    <main className={styles.clientBody}>
      <section id="home" className={styles.section}>
        <h1>Welcome to My Portfolio</h1>
        <p>Your gateway to explore my skills, projects, and more.</p>
      </section>

      <section id="about" className={styles.section}>
        <h2>About Me</h2>
        <p>
          Passionate software engineer and frontend developer with a knack for
          problem-solving and building engaging user experiences.
        </p>
      </section>

      <section id="projects" className={styles.section}>
        <h2>Projects</h2>
        {/* This can be replaced with your <ProjectsSection /> component */}
        <p>Showcasing some of my key projects here.</p>
      </section>

      <section id="contact" className={styles.section}>
        <h2>Contact</h2>
        <p>Reach out to me via email or social media links in the navbar.</p>
      </section>
    </main>
  );
}

'use client';

import styles from './About.module.css';
import { motion } from 'framer-motion';

const summary =
  `I'm Harshitha, a Computer Science and Engineering student at K. Ramakrishnan College of Technology, passionate about problem-solving and frontend development. From LeetCode to real-world projects, I blend logic, design, and modern tech stacks to craft impactful user experiences. I'm continuously learning — currently focused on React, DSA, and building a future in full-stack engineering.`;

const cards = [
  {
    title: '💻 Code-First Mindset',
    content:
      'I thrive on platforms like LeetCode, HackerRank, and CodeChef — solving algorithmic challenges and sharpening my logic. My DSA journey fuels clean, efficient problem-solving.',
  },
  {
    title: '🌐 Dev Toolkit',
    content:
      'From HTML/CSS/JS to React and Java, I build responsive, accessible interfaces. I also bring database skills (SQL, MongoDB) and cloud fundamentals (Azure) into play.',
  },
  {
    title: '📚 Certified Explorer',
    content:
      'I’ve earned certifications in IoT, Computer Networks, and Azure Fundamentals — always pushing beyond frontend to understand the systems powering the web.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
      ease: [0.25, 0.8, 0.25, 1],
    }
  }),
};

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <motion.h2
        className={styles.heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0}
      >
        About Me
      </motion.h2>

      <motion.p
        className={styles.paragraph}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
      >
        {summary}
      </motion.p>

      <div className={styles.cardGrid}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={i + 2}
          >
            <h4 className={styles.cardTitle}>{card.title}</h4>
            <p className={styles.cardContent}>{card.content}</p>
          </motion.div>
        ))}
      </div>

      <motion.h3
        className={styles.subheading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={cards.length + 2}
      >
        My Tech Stack
      </motion.h3>

      <motion.div
        className={styles.skills}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            }
          }
        }}
      >
        {[
          'HTML', 'CSS', 'JavaScript', 'React', 'Python',
          'Java', 'MongoDB', 'SQL', 'Azure'
        ].map((skill) => (
          <motion.span
            key={skill}
            className={styles.skillTag}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { type: 'spring', stiffness: 200, damping: 15 }
              }
            }}
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}

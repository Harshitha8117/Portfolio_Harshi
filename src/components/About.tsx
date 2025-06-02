'use client';

import styles from './About.module.css';
import { motion } from 'framer-motion';

const paragraphs = [
  `I’m Harshitha, a Computer Science and Engineering student at K. Ramakrishnan College of Technology. I’m a Computer Science Engineer with a deep passion for solving complex problems. I actively sharpen my skills through coding challenges on platforms like LeetCode, HackerRank, SkillRank, and CodeChef. These experiences fuel my logical thinking and algorithmic intuition. With a focus on continuous growth, I am currently deep-diving into Data Structures and Algorithms to build a strong technical foundation.`,
  `As a frontend developer, I craft responsive and user-friendly interfaces using HTML, CSS, and JavaScript. My technical toolkit also includes programming languages like C, Python, and Java, along with databases such as MongoDB and SQL. I’m currently expanding my capabilities by learning React to build dynamic and modern web applications. I’m driven by a vision to create seamless digital experiences.`,
  `Beyond development, I’ve earned certifications in IoT, Computer Networks, and Internet Protocols through NPTEL, reflecting my curiosity in system-level technologies. Additionally, I hold a Microsoft certification in Fundamentals of Azure, showcasing my readiness to explore cloud computing. I bring a blend of software skills and foundational knowledge to every project, aiming to bridge code with real-world impact.`
];

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <div className={styles.text}>
        {paragraphs.map((para, i) => (
          <motion.p
            key={i}
            className={styles.paragraph}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {para}
          </motion.p>
        ))}
      </div>
      <div className={styles.skills}>
        {['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Java', 'MongoDB', 'SQL', 'Azure'].map((skill, i) => (
          <motion.span
            key={skill}
            className={styles.skillTag}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

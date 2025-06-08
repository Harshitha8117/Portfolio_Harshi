'use client';

import styles from './About.module.css';
import { motion } from 'framer-motion';

const paragraphs = [
  `I’m Harshitha, a Computer Science and Engineering student at K. Ramakrishnan College of Technology. I’m a Computer Science Engineer with a deep passion for solving complex problems. I actively sharpen my skills through coding challenges on platforms like LeetCode, HackerRank, SkillRank, and CodeChef. These experiences fuel my logical thinking and algorithmic intuition. With a focus on continuous growth, I am currently deep-diving into Data Structures and Algorithms to build a strong technical foundation.`,
  `As a frontend developer, I craft responsive and user-friendly interfaces using HTML, CSS, and JavaScript. My technical toolkit also includes programming languages like C, Python, and Java, along with databases such as MongoDB and SQL. I’m currently expanding my capabilities by learning React to build dynamic and modern web applications. I’m driven by a vision to create seamless digital experiences.`,
  `Beyond development, I’ve earned certifications in IoT, Computer Networks, and Internet Protocols through NPTEL, reflecting my curiosity in system-level technologies. Additionally, I hold a Microsoft certification in Fundamentals of Azure, showcasing my readiness to explore cloud computing. I bring a blend of software skills and foundational knowledge to every project, aiming to bridge code with real-world impact.`
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

      <div className={styles.text}>
        {paragraphs.map((para, i) => (
          <motion.p
            key={i}
            className={styles.paragraph}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={i + 1}
          >
            {para}
          </motion.p>
        ))}
      </div>

      <motion.h3
        className={styles.subheading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={paragraphs.length + 1}
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

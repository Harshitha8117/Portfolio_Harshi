'use client';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className={styles.background}>
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareColor="white">
        <motion.section className={styles.hero} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className={styles.title}>HI, I'M HARSHITHA K! <span className={styles.wave}>👋</span></h1>
          <p className={styles.subtitle}>
            <Typewriter
              words={['Software Engineer', 'Frontend Developer', 'Problem Solver']}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          <div className={styles.socials}>
            <a href="https://github.com/Harshitha8117" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/harshitha-k-905a97257/" target="_blank"><FaLinkedin /></a>
            <a href="mailto:harshitha02012005@email.com"><FaEnvelope /></a>
            <a href="https://drive.google.com/file/d/1qHvdpAa6lnn31zNY1kGabz4wmjly8Y-p/view?usp=sharing" target="_blank" rel="noopener noreferrer">
  <FaFileAlt />
</a>


          </div>
        </motion.section>
      </Tilt>
    </div>
  );
}
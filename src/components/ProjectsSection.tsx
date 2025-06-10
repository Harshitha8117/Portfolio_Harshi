import React from 'react';
import styles from './ProjectsSection.module.css';

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  previewUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Wikipedia Clone',
    description:
      'A responsive web application that enables users to search and view Wikipedia articles in real-time using the Wikipedia API...',
    imageUrl: 'https://p7.hiclipart.com/preview/1018/889/207/5bbf58007ddca.jpg',
    previewUrl: 'https://project-one-demo.com',
    githubUrl: 'https://github.com/Harshitha8117/wikipedia',
  },
  {
    id: 2,
    title: 'Traffic Lane Analysis',
    description:
      'An AI-powered traffic management system that uses deep learning to detect vehicles and analyze traffic density in real time...',
    imageUrl: 'https://www.eletimes.com/wp-content/uploads/2022/05/Traffic-AI-control-1200x600-1-768x384.jpg',
    previewUrl: 'https://project-two-demo.com',
    githubUrl: 'https://github.com/Harshitha8117/Traffic-Lane-Analysis',
  },
  {
    id: 3,
    title: 'Plagiarism Detection',
    description:
      'Developed an AI-powered plagiarism detection system using NLP techniques like TF-IDF and cosine similarity to identify content matches...',
    imageUrl: 'https://cdn.gowinston.ai/wp-content/uploads/2023/09/winston-ai-plagiarism-checker-screenshot-2048x1152.jpg',
    previewUrl: 'https://project-three-demo.com',
    githubUrl: 'https://github.com/Harshitha8117/Plagiarism_Detection',
  },
  {
    id: 4,
    title: 'Payroll Management System',
    description:
      'This robust web application simplifies and automates the entire employee payroll process, minimizing errors and saving time...',
    imageUrl: 'https://raw.githubusercontent.com/niraj007m/payrollsystem/master/pms.png',
    previewUrl: 'https://project-four-demo.com',
    githubUrl: 'https://github.com/Harshitha8117/Payroll_Management',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.grid}>
        {projects.map(({ id, title, description, imageUrl, previewUrl, githubUrl }) => (
          <div key={id} className={styles.card}>
            <img
              src={imageUrl}
              alt={title}
              className={styles.image}
              loading="eager" // 👈 Force eager load
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.buttons}>
              <a href={previewUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
                Preview
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.buttonOutline}>
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

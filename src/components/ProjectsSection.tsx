'use client';

import React from 'react';
import styles from './ProjectsSection.module.css';

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Wikipedia Clone',
    description:
      'A responsive web application that enables users to search and view Wikipedia articles in real-time using the Wikipedia API...',
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.Xtamlv7BdetmUJQThKerBAHaFv?rs=1&pid=ImgDetMain&o=7&rm=3',
    githubUrl: 'https://github.com/Harshitha8117/wikipedia',
  },
  {
    id: 2,
    title: 'Traffic Lane Analysis',
    description:
      'An AI-powered traffic management system that uses deep learning to detect vehicles and analyze traffic density in real time...',
    imageUrl: 'https://www.eletimes.com/wp-content/uploads/2022/05/Traffic-AI-control-1200x600-1-768x384.jpg',
    githubUrl: 'https://github.com/Harshitha8117/Traffic-Lane-Analysis',
  },
  {
    id: 3,
    title: 'Plagiarism Detection',
    description:
      'Developed an AI-powered plagiarism detection system using NLP techniques like TF-IDF and cosine similarity to identify content matches...',
    imageUrl: 'https://cdn.gowinston.ai/wp-content/uploads/2023/09/winston-ai-plagiarism-checker-screenshot-2048x1152.jpg',
    githubUrl: 'https://github.com/Harshitha8117/Plagiarism_Detection',
  },
  {
    id: 4,
    title: 'Payroll Management System',
    description:
      'This robust web application simplifies and automates the entire employee payroll process, minimizing errors and saving time...',
    imageUrl: 'https://raw.githubusercontent.com/niraj007m/payrollsystem/master/pms.png',
    githubUrl: 'https://github.com/Harshitha8117/Payroll_Management',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.grid}>
        {projects.map(({ id, title, description, imageUrl, githubUrl }) => (
          <div key={id} className={styles.card}>
            <img
              src={imageUrl}
              alt={title}
              className={styles.image}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/fallback-image.jpg'; // Ensure this fallback exists in /public
              }}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubIconLink}
            >
              <img
                src="https://img.icons8.com/ios-filled/50/00ffff/github.png"
                alt="GitHub Repository"
                className={styles.githubIcon}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

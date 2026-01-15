import React from 'react';
import '../styles/Projects.css';

// Import images
import work1 from '../../images/work1.jpg';
import work2 from '../../images/work2.png';
import work3 from '../../images/work3.png';
import work4 from '../../images/work4.png';
import work5 from '../../images/work5.png';

function Projects() {
  const projects = [
    {
      title: 'Fisheries Management System',
      description: 'This is 2nd Year 2nd Semester project based on a smart MERN-based platform with IoT sea depth monitoring, designed to digitalize the fishing industry from catch to customer.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Postman', 'Stripe'],
      image: work1,
    //   demoUrl: '#',
      sourceUrl: 'https://github.com/Charith-01/Fisheries-Management-System.git'
    },
    {
      title: 'Aura – Wellness App',
      description: 'An Android app built with Kotlin for daily health tracking, featuring habit monitoring, mood journaling, and hydration reminders with a focus on user-centered design.',
      technologies: ['Android Studio', 'Kotlin'],
      image: work2,
    //   demoUrl: '#',
      sourceUrl: 'https://github.com/vihangi-jayasinghe/Aura-Habit-Tracker.git'
    },
    {
      title: 'Sprachly Language Learning App',
      description: 'This is a German learning app with flashcards, vocabulary lessons, grammar exercises, and listening practice. Track your progress as you learn basic words, grammar rules, and pronunciation through interactive activities.',
      technologies: ['Figma'],
      image: work3,
    //   demoUrl: '#',
      sourceUrl: 'https://github.com/vihangi-jayasinghe/Sprachly.git'
    },
    {
      title: 'Online Tour Guide System',
      description: 'This is 2nd Year 1st Semester project based on a java based web-based travel planning platform that simplifies booking tours, processing secure card payments, and collecting user reviews all in one seamless experience.',
      technologies: ['Java', 'My Sql'],
      image: work4,
    //   demoUrl: '#',
      sourceUrl: 'https://github.com/vihangi-jayasinghe/Online-Tour-Guide-system.git'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing projects and skills with smooth animations and responsive design.',
      technologies: ['React', 'Node.js', 'CSS3'],
      image: work5,
    //   demoUrl: '#',
      sourceUrl: 'https://github.com/vihangi-jayasinghe/portfolio.git'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Check out some of my recent work</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {/* <a href={project.demoUrl} className="btn-link" target="_blank" rel="noopener noreferrer">View Demo</a> */}
                  <a href={project.sourceUrl} className="btn-link" target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

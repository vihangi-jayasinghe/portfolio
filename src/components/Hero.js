import React, { useEffect } from 'react';
import '../styles/Hero.css';
import myPic2 from '../../images/mypic2.jpeg';

function Hero() {
  useEffect(() => {
    // Create particle background
    const particles = 50;
    const heroSection = document.querySelector('.hero');
    
    for (let i = 0; i < particles; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
      heroSection.appendChild(particle);
    }
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <p className="greeting">👋 Hi, I'm</p>
          <h1 className="name">
            <span className="name-text">Vihangi Jayasinghe</span>
            {/* <span className="cursor-blink">|</span> */}
          </h1>
          <h2 className="title">
            <span className="gradient-text">Full Stack Developer</span>
          </h2>
          <p className="description">
            I create beautiful, responsive web applications with modern technologies.
            Passionate about clean code and user experience.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary glow-btn" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              <span>View My Work</span>
              <span className="btn-icon">→</span>
            </button>
            <button className="btn btn-secondary glass-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              <span>Contact Me</span>
              <span className="btn-icon">✉</span>
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="photo-frame">
              <img src={myPic2} alt="Portrait of Vihangi Jayasinghe" className="hero-photo" />
            </div>
            <div className="floating-card card-1">💻</div>
            <div className="floating-card card-2">🎨</div>
            <div className="floating-card card-3">⚡</div>
            <div className="floating-card card-4">🚀</div>
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="glow-effect"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

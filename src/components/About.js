import React from 'react';
import '../styles/About.css';
import myPic from '../../images/mypic.jpeg';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              <img src={myPic} alt="Portrait of Vihangi Jayasinghe" className="profile-photo" />
            </div>
          </div>
          <div className="about-text">
            <h3>I'm a passionate developer who loves building things for the web</h3>
            <p>
              With expertise in modern web technologies, I specialize in creating
              responsive and user-friendly applications. My journey in web development
              started several years ago, and I've been constantly learning and evolving
              ever since.I believe in writing clean, maintainable code and creating seamless user
              experiences.
            </p>
            <div className="stats">
              <div className="stat">
                <h4>3+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>2+</h4>
                <p>Years Experience</p>
              </div>
              {/* <div className="stat">
                <h4>100+</h4>
                <p>Happy Clients</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

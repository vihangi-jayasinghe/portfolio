import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzvdgiE54SYBjcrtSeGZ-qK9m2SkziLbtpVSseqd3lOvYvkBno3WRGFmXPFsaUeSA/exec';
      
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('timestamp', new Date().toLocaleString());

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      alert('Thank you for your message! I will get back to you soon.');
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      alert('Oops! Something went wrong. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let's work together!</p>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's talk about everything!</h3>
            <p>
              Don't hesitate to reach out if you have any questions or just want to say hi.
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>vihangijayasinghe10@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>+(94) 71 062 6859</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Kegalle, SriLanka.</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/vihangi-jayasinghe" className="social-link" title="GitHub">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/vihangi-jayasinghe-316036331" className="social-link" title="LinkedIn">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

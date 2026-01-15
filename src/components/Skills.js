import React from 'react';
import '../styles/Skills.css';

const skills = [
//   { name: 'HTML', category: 'Frontend', level: 95, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' },
//   { name: 'CSS', category: 'Frontend', level: 92, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' },
//   { name: 'Bootstrap', category: 'Frontend', level: 82, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
//   { name: 'JavaScript', category: 'Frontend', level: 90, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
//   { name: 'React', category: 'Frontend', level: 90, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
//   { name: 'Node.js', category: 'Backend', level: 85, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
//   { name: 'Express.js', category: 'Backend', level: 82, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
//   { name: 'Java', category: 'Backend', level: 78, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
//   { name: 'Python', category: 'Backend', level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
//   { name: 'Postman', category: 'Backend', level: 74, iconUrl: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
//   { name: 'MongoDB', category: 'Database', level: 86, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
//   { name: 'MySQL', category: 'Database', level: 85, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
//   { name: 'Kotlin', category: 'Mobile', level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
//   { name: 'Android Studio', category: 'Mobile', level: 75, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' }

  { name: 'HTML', category: 'Frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' },
  { name: 'CSS', category: 'Frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' },
  { name: 'Bootstrap', category: 'Frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
  { name: 'JavaScript', category: 'Frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', category: 'Frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', category: 'Backend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', category: 'Backend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Java', category: 'Backend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', category: 'Backend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Postman', category: 'Backend', iconUrl: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
  { name: 'MongoDB', category: 'Database', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', category: 'Database', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Kotlin', category: 'Mobile', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'Android Studio', category: 'Mobile', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' }
];

const categoryPalette = {
  Frontend: '#6366f1',
  Backend: '#6366f1',
  Database: '#6366f1',
  Mobile: '#6366f1'
};

function Skills() {
  const orderedCategories = ['Frontend', 'Backend', 'Database', 'Mobile'];
  const groupedSkills = orderedCategories.reduce((acc, category) => {
    acc[category] = skills.filter((skill) => skill.category === category);
    return acc;
  }, {});

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">Organized by Frontend, Backend & Database</p>
        </div>

        <div className="skills-grid">
          {orderedCategories.map((category, idx) => (
            <div key={category} className="skills-category">
              <div className="category-header" style={{ '--accent': categoryPalette[category] }}>
                <span className="category-title">{category}</span>
              </div>

              <div className="skills-list">
                {groupedSkills[category].map((skill, skillIdx) => (
                  <div
                    key={skill.name}
                    className="skill-card"
                    style={{
                      '--accent': categoryPalette[category],
                      '--delay': `${skillIdx * 60}ms`
                    }}
                  >
                    <div className="skill-icon-box">
                      <img src={skill.iconUrl} alt={skill.name} className="skill-icon" />
                      <div className="skill-percent">{skill.level}%</div>
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

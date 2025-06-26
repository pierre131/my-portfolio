import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
<img
  src={`${process.env.PUBLIC_URL}/profile.jpg`}
  alt="Pierre"
  style={{
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'scale(1.06)';
    e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.3)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
  }}
/>

      <h2>👋 Hello, I'm Pierre</h2>
      <p>
        I’m a computer engineering student passionate about building clear, efficient backend systems and useful APIs. My goal is to design projects that focus on performance and usability. I believe that technology should solve real problems, and I enjoy creating practical, open-source tools that do just that.
      </p>

      <h3>🧠 Technical Skills</h3>
      <ul>
        <li>Comfortable using FastAPI, Uvicorn, and SQLAlchemy for API development</li>
        <li>Experienced in installing and configuring PostgreSQL and working with psql on Windows</li>
        <li>Building Streamlit interfaces for simple, user-friendly frontends</li>
        <li>Implementing Elasticsearch to enable smart, efficient search functionality</li>
        <li>Using GitHub for project version control and team collaboration</li>
        <li>Implemented login/logout, role-based permissions, CSV import/export, and data dashboards</li>
        <li>Learning continuously through hands-on development and experimentation</li>
      </ul>

      <h3 id="projects">🚀 Featured Project</h3>
      <ul>
        <li>
          <strong>Library Management System</strong> — Built with FastAPI, Streamlit, PostgreSQL & Elasticsearch
          <br />
          <a
            href="https://github.com/pierre131/library-project"
            target="_blank"
            rel="noreferrer"
          >
            🔗 View on GitHub
          </a>
        </li>
      </ul>

      <h3>🎯 My Vision</h3>
      <p>
        I want to build tools that are accessible, especially to Arabic speakers, and that make learning and working with code more enjoyable. My aim is to connect strong backends with simple, thoughtful frontends — where clarity and structure matter most.
      </p>

      <blockquote>
        "I believe simplicity and structure are key to any successful project."
      </blockquote>
    </section>
  );
}
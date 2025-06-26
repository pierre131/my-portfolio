import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>🚀 Projects</h2>

      <div className="project">
        <h3>📚 Library Management System</h3>
        <p>
          A full-featured library backend project built using FastAPI for APIs, PostgreSQL for database management, and Streamlit for a user-friendly interface. It includes smart search with Elasticsearch, login/logout, user roles, CSV import/export, and dashboard summaries.
        </p>
        <a
          href="https://github.com/pierre131/library-project"
          target="_blank"
          rel="noreferrer"
        >
          🔗 View on GitHub
        </a>
      </div>

      {/* Add more projects like this if needed */}
      {/* <div className="project">
        <h3>🛠️ Another Project Name</h3>
        <p>
          Brief description of what it does, technologies used, and key features.
        </p>
        <a href="https://github.com/your-username/project-name" target="_blank" rel="noreferrer">
          🔗 View on GitHub
        </a>
      </div> */}

    </section>
  );
}
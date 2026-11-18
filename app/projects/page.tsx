import { ExternalLink } from "lucide-react";

const projects = [
  {
    title:
      "Central Pet Care (Backend) – Smart Pet Health & Services Platform",

    description:
      "The backend of Central Pet Care is built with Node.js, Express.js, and MongoDB, managing users, pets, appointments, and services through secure RESTful APIs. Authentication and role-based access help protect application data.",

    image: "/projects/central-pet-backend.png",

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],

    github:
      "https://github.com/Central-Pet-Care/Central-Pet-Care-Backend.git",

    demo:
      "https://central-pet-care-frontend.vercel.app/",
  },

  {
    title:
      "Central Pet Care (Frontend) – Smart Pet Health & Services Platform",

    description:
      "The frontend of Central Pet Care is developed using React and Tailwind CSS, providing a responsive and intuitive interface for users to manage pets, appointments, and services while communicating with the backend APIs.",

    image: "/projects/central-pet-frontend.png",

    technologies: [
      "React",
      "Tailwind CSS",
      "Chart.js",
      "jsPDF.js",
    ],

    github:
      "https://github.com/Central-Pet-Care/Central-Pet-Care-Frontend.git",

    demo:
      "https://central-pet-care-frontend.vercel.app/",
  },

  {
    title:
      "Java-Based Web Hospital Management Solution",

    description:
      "A comprehensive web-based Hospital Management System developed using Java and MySQL. The application supports hospital operations including patient registration, doctor appointments, inventory management, and administrative functions.",

    image: "/projects/hospital-management.png",

    technologies: [
      "Java",
      "Apache Tomcat 9",
      "JDBC",
      "MySQL",
    ],

    github:
      "https://github.com/shamal0312/Hospital-Management-System.git",

    demo: "",
  },

  {
    title:
      "Campus Library Reservation System – Mobile Application",

    description:
      "A mobile-based Campus Library Reservation System developed to simplify how students access and manage library resources. The application allows students to browse and search available books, view detailed book information and availability, reserve books, and manage existing reservations through edit and cancellation features. Students can also view their current reservations and reservation history. The application uses Supabase for database management and real-time data access, while React Native and Expo provide a responsive cross-platform mobile experience.",

    image: "/projects/library-mobile-app.png",

    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Expo Router",
    ],

    github:
      "https://github.com/shamal0312/campus-library-reservation-system.git",

    demo: "",
  },

  {
    title:
      "Research CollabHub – Student Project Collaboration Platform",

    description:
      "Research CollabHub is a full-stack MERN platform designed to connect university students through academic and research projects. Students can create professional profiles similar to LinkedIn, publish their projects to a shared feed, discover projects created by other students, and request to join teams that interest them. Once a project team is formed, members can collaborate through a private workspace with tools for task management, communication, meetings, document sharing, and contribution tracking. The platform also includes an online library where students can discover useful academic and project resources.",

    image: "/projects/research-collabhub.png",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
    ],

    github:
      "https://github.com/shamal0312/Research-CollabHub.git",

    demo: "",
  },

  {
    title:
      "Daily Flow – Personal Wellness Assistant",

    description:
      "Daily Flow is a native Android wellness application developed using Kotlin to help users build and maintain healthier daily routines. The application includes a daily habit tracker for creating, editing, deleting, and monitoring wellness habits with progress indicators, a mood journal for recording emotions and reviewing previous entries, and a hydration reminder system that sends scheduled notifications using Android WorkManager. Users can also customize reminder and application preferences, while SharedPreferences provides local data persistence so important user data remains available offline.",

    image: "/projects/daily-flow.png",

    technologies: [
      "Kotlin",
      "Android Studio",
      "XML",
      "WorkManager",
      "SharedPreferences",
    ],

    github:
      "https://github.com/shamal0312/Daily-Flow-Android-App.git",

    demo: "",
  },

  {
    title:
      "Smart Campus Operations Hub – Campus Management Platform",

    description:
      "Smart Campus Operations Hub is a full-stack web application designed to improve the management of university campus facilities and operational activities. Students and staff can browse campus resources, make facility bookings, manage booking requests, report maintenance and incident issues, track ticket progress, and receive notifications for important updates. The platform includes booking conflict detection, maintenance ticket workflows, Google OAuth 2.0 authentication, JWT-based API authentication, and role-based access control for users and administrators.",

    image: "/projects/smart-campus.png",

    technologies: [
      "React",
      "Java",
      "Spring Boot",
      "MongoDB",
      "JWT",
      "OAuth 2.0",
    ],

    github:
      "https://github.com/shamal0312/Smart_Campus_Operations.git",

    demo: "",
  },
];

export default function Projects() {
  return (
    <main className="projects-page">
      <div className="projects-wrapper">

        {/* PAGE HEADING */}
        <div className="projects-heading">
          <p className="section-label">MY WORK</p>

          <h1>Projects I've worked on.</h1>

          <p className="projects-intro">
            A collection of applications and systems I've built while
            studying, learning, and working as a developer.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="projects-grid">

          {projects.map((project, index) => (
            <article className="project-card" key={index}>

              {/* PROJECT IMAGE */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              {/* PROJECT CONTENT */}
              <div className="project-content">

                {/* PROJECT TITLE */}
                <h2>{project.title}</h2>

                {/* PROJECT DESCRIPTION */}
                <p className="project-description">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* PROJECT LINKS */}
                <div className="project-links">

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.94a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                    </svg>

                    <span>GitHub</span>
                  </a>

                  {/* LIVE DEMO */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demo-link"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={15} />
                    </a>
                  )}

                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </main>
  );
}
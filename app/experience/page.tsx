
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaBug,
  FaCode,
} from "react-icons/fa";

const experiences = [
  {
    title: "QA Engineer Intern",
    company: "Egotechworld",
    type: "Internship",
    location: "Remote",
    duration: "Mar 2026 – Sep 2026",
    period: "7 months",
    description:
      "Gained hands-on experience in software quality assurance, working with manual testing, automated testing, API validation, and development teams to improve application quality.",
    responsibilities: [
      "Performed manual and automation testing across web applications.",
      "Conducted functional, regression, and API testing to validate application functionality.",
      "Tested REST APIs using Postman and contributed to automated testing using Playwright and Jest.",
      "Identified, documented, and tracked software defects while collaborating with developers to verify fixes.",
      "Participated in Agile/Scrum activities including stand-ups and sprint planning.",
      "Used Git/GitHub and Jira as part of the QA and development workflow.",
    ],
    technologies: [
      "Manual Testing",
      "Automation Testing",
      "Postman",
      "Playwright",
      "Jest",
      "Jira",
      "Git",
      "GitHub",
      "Agile / Scrum",
    ],
  },
];

export default function Experience() {
  return (
    <main className="experience-page">
      <div className="experience-wrapper">

        {/* PAGE HEADING */}
        <div className="experience-heading">
          <p className="section-label">
            MY JOURNEY
          </p>

          <h1>
            My professional journey.
          </h1>

          <p className="experience-intro">
            My professional experience, internships, and
            hands-on contributions to software development
            and quality assurance.
          </p>
        </div>

        {/* EXPERIENCE TIMELINE */}
        <div className="experience-timeline">

          {experiences.map((experience, index) => (
            <div
              className="experience-timeline-item"
              key={index}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >

              {/* TIMELINE DOT */}
              <div className="experience-timeline-dot">
                <FaBriefcase />
              </div>

              {/* EXPERIENCE CARD */}
              <div className="experience-job-card">

                {/* CARD TOP */}
                <div className="experience-job-top">

                  <div className="experience-job-info">
                    <div className="experience-job-label">
                      PROFESSIONAL EXPERIENCE
                    </div>

                    <h2>
                      {experience.title}
                    </h2>

                    <h3>
                      {experience.company}
                    </h3>
                  </div>

                  <span className="experience-job-type">
                    {experience.type}
                  </span>

                </div>

                {/* META DETAILS */}
                <div className="experience-job-meta">

                  <span>
                    <FaCalendarAlt />
                    {experience.duration}
                  </span>

                  <span>
                    <FaMapMarkerAlt />
                    {experience.location}
                  </span>

                  <span>
                    <FaBriefcase />
                    {experience.period}
                  </span>

                </div>

                {/* DESCRIPTION */}
                <p className="experience-job-description">
                  {experience.description}
                </p>

                {/* RESPONSIBILITIES */}
                <div className="experience-job-section">

                  <h4>
                    <FaBug />
                    Key Responsibilities
                  </h4>

                  <div className="experience-responsibilities">
                    {experience.responsibilities.map(
                      (responsibility, i) => (
                        <div
                          className="experience-responsibility"
                          key={i}
                        >
                          <FaCheckCircle />

                          <p>
                            {responsibility}
                          </p>
                        </div>
                      )
                    )}
                  </div>

                </div>

                {/* TECHNOLOGIES */}
                <div className="experience-job-section">

                  <h4>
                    <FaCode />
                    Technologies & Tools
                  </h4>

                  <div className="experience-tech-list">
                    {experience.technologies.map(
                      (technology) => (
                        <span
                          className="experience-tech-badge"
                          key={technology}
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
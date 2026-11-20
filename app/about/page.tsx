
import {
  FaCode,
  FaBug,
  FaChartBar,
  FaNetworkWired,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

const focusAreas = [
  {
    title: "Software Development",
    description:
      "Building modern web and mobile applications using frontend and backend technologies.",
    icon: <FaCode />,
    color: "#a78bfa",
  },
  {
    title: "Quality Assurance",
    description:
      "Manual testing, test automation, API testing, and improving software reliability.",
    icon: <FaBug />,
    color: "#38bdf8",
  },
  {
    title: "Data Analytics",
    description:
      "Exploring data, working with databases, and creating insights using analytical tools.",
    icon: <FaChartBar />,
    color: "#facc15",
  },
  {
    title: "Computer Networking",
    description:
      "Working with network configuration, IP addressing, subnetting, and network services.",
    icon: <FaNetworkWired />,
    color: "#34d399",
  },
];

export default function About() {
  return (
    <main className="about-page">
      <div className="about-wrapper">

        {/* PAGE HEADING */}
        <div className="about-heading about-animate-heading">
          <p className="section-label">ABOUT ME</p>

          <h1 className="about-main-title">
            Get to know <span>me.</span>
          </h1>

          <p className="about-intro">
            Beyond the code — my background, interests,
            experience, and the technologies I'm passionate about.
          </p>
        </div>

        {/* ABOUT CONTENT */}
        <div className="about-grid">

          {/* LEFT SIDE */}
          <div className="about-description about-animate-left">
            <p>
              I'm an Information Technology undergraduate with
              interests in software engineering, quality assurance,
              data analytics, and computer networking.
            </p>

            <p>
              My technical experience includes full-stack web
              development, mobile application development, software
              testing, database management, and UI/UX design.
            </p>

            <p>
              I'm interested in exploring different areas of
              information technology, including software development,
              quality assurance, data analytics, and computer
              networking. I enjoy expanding my technical knowledge
              through academic projects and continuous learning.
            </p>

            <p>
              I enjoy learning new technologies, solving real-world
              problems, and developing practical solutions.
              I'm looking for opportunities where I can contribute,
              learn, and grow across the IT industry.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="about-details about-animate-right">

            <div className="detail-item">
              <span>
                <FaGraduationCap /> DEGREE
              </span>
              <p>BSc (Hons) Information Technology</p>
            </div>

            <div className="detail-item">
              <span>
                <FaCode /> FOCUS
              </span>
              <p>
                Software Development, QA & Data Analytics
              </p>
            </div>

            <div className="detail-item">
              <span>
                <FaMapMarkerAlt /> LOCATION
              </span>
              <p>Sri Lanka</p>
            </div>

            <div className="detail-item">
              <span>
                <FaBriefcase /> STATUS
              </span>
              <p className="available">
                ● Open to Opportunities
              </p>
            </div>

          </div>
        </div>

        {/* TECHNICAL INTERESTS */}
        <section className="about-focus-section">

          <div className="about-focus-heading">
            <p className="section-label">
              WHAT I DO
            </p>

            <h2>
              Areas I work with<span>.</span>
            </h2>

            <p>
              Exploring different areas of technology
              through academic projects, practical experience,
              and continuous learning.
            </p>
          </div>

          <div className="about-focus-grid">
            {focusAreas.map((area, index) => (
              <div
                className="about-focus-card"
                key={area.title}
                style={{
                  animationDelay: `${index * 0.12}s`,
                }}
              >
                <div
                  className="about-focus-icon"
                  style={{ color: area.color }}
                >
                  {area.icon}
                </div>

                <h3>{area.title}</h3>

                <p>{area.description}</p>

                <div className="about-focus-arrow">
                  <FaArrowRight />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

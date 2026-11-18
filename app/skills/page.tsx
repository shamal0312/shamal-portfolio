
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaCss3Alt,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaVial,
  FaPython,
  FaNetworkWired,
  FaServer,
  FaChartBar,
  FaFileExcel,
  FaFileWord,
  FaFilePowerpoint,
  FaLaptopCode,
  FaPalette,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiExpress,
  SiNestjs,
  SiSpringboot,
  SiKotlin,
  SiAndroidstudio,
  SiExpo,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiPostman,
  SiJest,
  SiFigma,
  SiAnaconda,
} from "react-icons/si";

const skillSections = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: <SiHtml5 />, color: "#f97316" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#3b82f6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#facc15" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
      { name: "React", icon: <FaReact />, color: "#61dafb" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#22c55e" },
      { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
      { name: "NestJS", icon: <SiNestjs />, color: "#e0234e" },
      { name: "Java", icon: <FaJava />, color: "#f87171" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
      { name: "PHP", icon: <FaPhp />, color: "#777bb4" },
      { name: "REST APIs", icon: <FaCode />, color: "#a78bfa" },
      { name: "JWT", icon: <FaCode />, color: "#d946ef" },
    ],
  },

  {
    title: "Mobile Development",
    skills: [
      { name: "React Native", icon: <FaReact />, color: "#61dafb" },
      { name: "Expo", icon: <SiExpo />, color: "#ffffff" },
      { name: "Kotlin", icon: <SiKotlin />, color: "#a855f7" },
      { name: "Android Studio", icon: <SiAndroidstudio />, color: "#3ddc84" },
      { name: "XML", icon: <FaCode />, color: "#f97316" },
      { name: "Expo Router", icon: <SiExpo />, color: "#ffffff" },
      { name: "WorkManager", icon: <FaMobileAlt />, color: "#8b5cf6" },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169e1" },
      { name: "Supabase", icon: <SiSupabase />, color: "#3ecf8e" },
      { name: "Prisma", icon: <SiPrisma />, color: "#ffffff" },
      { name: "Oracle Database", icon: <FaDatabase />, color: "#f80000" },
      { name: "SQL", icon: <FaDatabase />, color: "#38bdf8" },
    ],
  },

  {
    title: "Data Analytics & BI",
    skills: [
      { name: "Python", icon: <FaPython />, color: "#3776ab" },
      { name: "Power BI", icon: <FaChartBar />, color: "#f2c811" },
      { name: "Anaconda", icon: <SiAnaconda />, color: "#44a833" },
      { name: "Data Analytics", icon: <FaChartBar />, color: "#a78bfa" },
    ],
  },

  {
    title: "Tools & Testing",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
      { name: "Docker", icon: <FaDocker />, color: "#2496ed" },
      { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
      { name: "Jest", icon: <SiJest />, color: "#c21325" },
      { name: "Playwright", icon: <FaVial />, color: "#45ba4b" },
    ],
  },

  {
    title: "Networking",
    skills: [
      {
        name: "Network Configuration",
        icon: <FaNetworkWired />,
        color: "#38bdf8",
      },
      {
        name: "IP Addressing & Subnetting",
        icon: <FaNetworkWired />,
        color: "#818cf8",
      },
      {
        name: "DHCP",
        icon: <FaServer />,
        color: "#22c55e",
      },
      {
        name: "DNS",
        icon: <FaNetworkWired />,
        color: "#f59e0b",
      },
      {
        name: "Mail Server Configuration",
        icon: <FaServer />,
        color: "#c084fc",
      },
    ],
  },

  {
    title: "Design & Productivity",
    skills: [
      { name: "Figma", icon: <SiFigma />, color: "#f24e1e" },
      { name: "Canva", icon: <FaPalette />, color: "#00c4cc" },
      { name: "Microsoft Word", icon: <FaFileWord />, color: "#2b579a" },
      { name: "Microsoft Excel", icon: <FaFileExcel />, color: "#217346" },
      {
        name: "Microsoft PowerPoint",
        icon: <FaFilePowerpoint />,
        color: "#d24726",
      },
    ],
  },

  {
    title: "Core Development",
    skills: [
      { name: "RESTful APIs", icon: <FaCode />, color: "#8b5cf6" },
      { name: "OAuth 2.0", icon: <FaCode />, color: "#38bdf8" },
      { name: "Authentication", icon: <FaCode />, color: "#a78bfa" },
      { name: "RBAC", icon: <FaCode />, color: "#c084fc" },
      { name: "OOP", icon: <FaLaptopCode />, color: "#818cf8" },
      { name: "Agile / Scrum", icon: <FaCode />, color: "#22c55e" },
    ],
  },
];

export default function Skills() {
  return (
    <main className="tech-skills-page">
      <div className="tech-skills-wrapper">
        {/* PAGE HEADING */}
        <div className="tech-skills-heading">
          <p className="section-label">MY SKILLS</p>

          <h1>Technologies I work with.</h1>

          <p>
            Technologies, tools, and technical skills I use
            across software development, data analytics,
            networking, testing, and design.
          </p>
        </div>

        {/* SKILL SECTIONS */}
        <div className="tech-sections">
          {skillSections.map((section) => (
            <section
              className="tech-section"
              key={section.title}
            >
              {/* CATEGORY HEADING */}
              <div className="tech-section-title">
                <div className="title-line"></div>

                <h2>{section.title}</h2>

                <div className="title-line title-line-right"></div>
              </div>

              {/* ANIMATED SKILL CARDS */}
              <div className="tech-grid">
                {section.skills.map((skill, index) => (
                  <div
                    className="tech-card animated-skill-card"
                    key={skill.name}
                    style={{
                      animationDelay: `${index * 0.07}s`,
                    }}
                  >
                    <div
                      className="tech-icon animated-skill-icon"
                      style={{
                        color: skill.color,
                        animationDelay: `${index * -0.35}s`,
                      }}
                    >
                      {skill.icon}
                    </div>

                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
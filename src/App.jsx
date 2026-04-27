import { useState, useEffect, useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";


const NAV_ITEMS = [
  { label: "ABOUT",      id: "about" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "SKILLS",     id: "skills" },
  { label: "PROJECTS",   id: "projects" },
  { label: "EDUCATION",  id: "education" },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/ANUJNEGI15072005",         icon: <FaGithub size={20} />,   label: "GitHub" },
  { href: "https://www.linkedin.com/in/anujnegi-webdev", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
  { href: "https://leetcode.com/u/anujn158/",            icon: <SiLeetcode size={20} />, label: "LeetCode" },
  { href: "https://anujnegi.vercel.app",                 icon: <BsGlobe size={20} />,    label: "Portfolio" },
];

const EXPERIENCE = [
  {
    date: "2026 — Present",
    role: "Freelance Full-Stack Developer",
    company: "Privibe",
    href: "https://privibe.vercel.app/",
    badge: { label: "● Active", color: "teal" },
    bullets: [
      "Building and shipping full-stack features for Privibe's platform as a freelance developer, working across the React frontend and Node.js backend.",
      "Designing and integrating RESTful APIs, third-party services, and user-facing UI with a focus on performance and clean UX.",
      "Owning end-to-end delivery — from scoping features to deploying production-ready code independently.",
    ],
  },
  {
    date: "2024",
    role: "Research Author",
    company: "Intelligent Fashion Recommender System",
    href: "https://books.aijr.org/index.php/press/catalog/book/178/chapter/3392",
    badge: { label: "Published", color: "purple" },
    bullets: [
      "Designed a deep learning fashion recommendation model using neural networks and feature embeddings across 10,000+ item catalog.",
      "Achieved 18% accuracy improvement over baseline using computer vision and NLP-based attribute extraction.",
      "Published in proceedings — DOI: 10.21467/proceedings.178.1",
    ],
  },
];

const SKILLS = [
  { heading: "Languages",         tags: ["Python", "JavaScript", "TypeScript", "C++", "SQL"] },
  { heading: "Frontend",          tags: ["Next.js", "React.js", "Tailwind CSS", "HTML", "CSS"] },
  { heading: "Backend & APIs",    tags: ["Node.js", "Express.js", "Flask", "FastAPI", "REST APIs"] },
  { heading: "AI / ML",           tags: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Groq API", "Gemini API", "Prompt Engineering"] },
  { heading: "Database & Tools",  tags: ["MongoDB", "Git", "Docker", "Postman", "Vercel", "Render", "Vite"] },
  { heading: "Core Concepts",     tags: ["DSA", "OOP", "OS", "DBMS", "Computer Networks"] },
];

const PROJECTS = [
  {
    name: "Studiqo",
    href: "https://studiqo-mu.vercel.app/",
    image: "studiqo.png",
    emoji: "📚",
    description: "Production-grade AI study platform with OAuth social login, LLM-powered study plans via Groq & Gemini — cutting manual planning time by ~60%. Serves 100+ users with sub-2s load times on Vercel.",
    techstack: ["Next.js", "Tailwind CSS", "MongoDB", "Better-Auth", "Groq API"],
  },
  {
    name: "SpendFlux",
    href: "https://spendflux-tracker.vercel.app/",
    image: "spendflux.png",
    emoji: "💸",
    description: "Full-stack finance tracker with 8+ RESTful endpoints handling 1,000+ monthly transactions at sub-500ms. AI-powered spending insights via Groq + interactive bar/pie charts reduce unnecessary spend by ~20%.",
    techstack: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "Groq API"],
  },
  {
    name: "TestMaker",
    href: "https://testmakerai.vercel.app/",
    image: "testmaker.png",
    emoji: "🧪",
    description: "PDF-to-exam pipeline using Groq LLM — generates 10–30 structured questions per document in under 15s across 25+ docs. 90%+ relevance accuracy via advanced prompt engineering & chain-of-thought parsing.",
    techstack: ["React", "Flask", "PyMuPDF", "Groq API", "Tailwind CSS"],
  },
  {
    name: "BeYourTrainer",
    href: "https://beyourtrainer.vercel.app/",
    image: "beyourtrainer.png",
    emoji: "🏋️",
    description: "ML-driven fitness platform that suggests personalized workout & diet plans based on user profiles. FastAPI backend for high-performance inference; React + Tailwind for an engaging UI.",
    techstack: ["Python", "Scikit-learn", "FastAPI", "React", "Tailwind CSS"],
  },
  {
    name: "Stump Talk",
    href: "https://stumptalk.onrender.com/",
    image: "stumptalk.png",
    emoji: "💬",
    description: "Community discussion platform with real-time interactions via Socket.io, persistent MongoDB storage, and a clean React + Tailwind frontend emphasising performance and scalability.",
    techstack: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    name: "Garhwal Yatra",
    href: "https://garhwal-yatra.vercel.app/",
    image: "garhwalyatra.png",
    emoji: "🏔️",
    description: "Static tourism blog covering the Garhwal region — districts, maps, and Char Dham pilgrimage spots with responsive design, smooth navigation, and Vite-optimised performance.",
    techstack: ["React", "Tailwind CSS", "React Router", "Vite"],
  },
];


function NavItem({ item, active, onClick }) {
  const isActive = active === item.id;
  return (
    <li className="group cursor-pointer py-3" onClick={() => onClick(item.id)}>
      <a href={`#${item.id}`} onClick={(e) => e.preventDefault()} className="flex items-center gap-3">
        <span
          className={`h-px flex-shrink-0 transition-all duration-200
            ${isActive ? "w-16 bg-slate-200" : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"}`}
        />
        <span
          className={`font-outfit text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-200
            ${isActive ? "text-slate-200" : "text-slate-500 group-hover:text-slate-200"}`}
        >
          {item.label}
        </span>
      </a>
    </li>
  );
}

function Tag({ text }) {
  return (
    <span className="rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 font-mono text-xs font-medium text-teal-300 transition-colors duration-200 hover:border-teal-400/50 hover:bg-teal-400/20 cursor-default">
      {text}
    </span>
  );
}

function ExperienceItem({ item }) {
  const badgeStyles =
    item.badge.color === "teal"
      ? "bg-teal-400/10 text-teal-300 border border-teal-400/30"
      : "bg-purple-400/10 text-purple-300 border border-purple-400/30";

  return (
    <div className="mb-10 flex flex-col sm:grid sm:grid-cols-[100px_1fr] gap-x-6 gap-y-2">
      <span className="mb-2 sm:mb-0 font-mono text-[0.7rem] leading-relaxed text-slate-500 sm:pt-1">
        {item.date}
      </span>
      <div className="group rounded-xl border border-slate-700/80 bg-slate-800/50 p-5 transition-all duration-200 hover:border-teal-400/60 hover:bg-slate-800">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <span className="font-outfit text-[1.05rem] font-bold text-slate-200 leading-snug">
            {item.role}
          </span>
          <span className={`rounded-full px-3 py-0.5 font-outfit text-[0.68rem] font-semibold flex-shrink-0 ${badgeStyles}`}>
            {item.badge.label}
          </span>
        </div>
        <p className="mb-3 font-outfit text-sm font-medium text-teal-400">
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 hover:text-teal-300 transition-colors duration-200 group/link"
            >
              {item.company}
              <svg className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
            </a>
          ) : item.company}
        </p>
        <ul className="space-y-1.5">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-[0.9rem] leading-relaxed text-slate-400">
              <span className="mt-[3px] flex-shrink-0 text-teal-400 text-xs">▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProjectCard({ item }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer noopener"
      className="group block rounded-2xl border border-slate-700/80 bg-slate-800/50 overflow-hidden transition-all duration-250 hover:border-teal-400/60 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(45,212,191,0.10)]"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-400 group-hover:scale-[1.04]"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        <span className="text-5xl opacity-10 select-none">{item.emoji}</span>
      </div>

      <div className="p-5 pb-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-outfit text-xl font-bold text-teal-400">{item.name}</span>
          <svg
            className="text-slate-500 transition-all duration-200 group-hover:text-teal-400 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
            width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>
        <p className="mb-4 text-[0.88rem] leading-relaxed text-slate-400">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.techstack.map((t) => <Tag key={t} text={t} />)}
        </div>
      </div>
    </a>
  );
}


export default function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState("about");

  const [text] = useTypewriter({
    words: ["Full Stack Developer", "ML Enthusiast", "AI Engineer"],
    loop: true,
    delaySpeed: 2000,
  });

  const handleMouseMove = (e) => setPos({ x: e.clientX, y: e.clientY });

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#0d1117] font-lato text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
    >
      <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(29,78,216,0.15), transparent 80%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-12">

          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="font-outfit text-5xl font-extrabold tracking-tight text-slate-200 sm:text-6xl leading-[1.05]">
                Anuj<br /><span className="text-teal-400">Negi</span>
              </h1>
              <h2 className="mt-4 font-outfit text-xl font-semibold text-slate-200 min-h-[2em]">
                {text}<Cursor cursorStyle="|" />
              </h2>
              <p className="mt-4 max-w-sm text-[1rem] leading-[1.8] text-slate-400">
                Crafting intelligent, scalable, and user-friendly solutions — from dynamic full-stack applications to cutting-edge machine learning models.
              </p>
            </div>

            <nav className="hidden lg:block">
              <ul className="mt-16 w-max">
                {NAV_ITEMS.map((item) => (
                  <NavItem key={item.id} item={item} active={active} onClick={scrollTo} />
                ))}
              </ul>
            </nav>

            <ul className="mt-8 flex gap-5 lg:mt-16" role="list">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={link.label}
                    className="block text-slate-400 transition-colors duration-200 hover:text-teal-400"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </header>

          <main className="mt-10 lg:mt-0 lg:w-[52%] lg:py-24 space-y-20">

            <section id="about">
              <SectionLabel>About</SectionLabel>
              <div className="space-y-4 text-[1.02rem] leading-[1.85] text-slate-400">
                <p>
                  I'm a <Hi>full-stack developer</Hi> and <Hi>AI/ML engineer</Hi> pursuing my B.Tech in Artificial Intelligence & Machine Learning at GGSIPU, Delhi, with a <Hi>GPA of 8.8/10</Hi>. I build <Hi>scalable, high-performance</Hi> applications that merge clean engineering with real-world impact.
                </p>
                <p>
                  My core stack spans the <Hi>MERN ecosystem</Hi> and <Hi>Next.js</Hi> — architecting systems from <Hi>responsive frontends</Hi> to <Hi>robust backend APIs</Hi>. I've shipped production-grade platforms serving <Hi>100+ users</Hi> with sub-2-second load times, and integrated <Hi>LLM APIs</Hi> (Groq, Gemini) to automate workflows and cut manual effort by up to <Hi>75%</Hi>.
                </p>
                <p>
                  I also explore the intersection of <Hi>deep learning</Hi> and web products — from a published <Hi>fashion recommender system</Hi> to ML-driven fitness platforms. I'm always pushing to build things that are <Hi>faster</Hi>, <Hi>smarter</Hi>, and more <Hi>meaningful</Hi>.
                </p>
              </div>
              <a
                href="full_stack_resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-6 inline-flex items-center gap-2 font-outfit text-base font-semibold text-slate-200 transition-colors duration-200 hover:text-teal-400"
              >
                View Full Résumé
                <svg
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </section>

            <section id="experience">
              <SectionLabel>Experience</SectionLabel>
              {EXPERIENCE.map((item, i) => (
                <ExperienceItem key={i} item={item} />
              ))}
            </section>

            <section id="skills">
              <SectionLabel>Skills</SectionLabel>
              <div className="space-y-6">
                {SKILLS.map((group, i) => (
                  <div key={i}>
                    <h3 className="mb-3 font-outfit text-[0.78rem] font-bold uppercase tracking-[0.12em] text-slate-400">
                      {group.heading}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.tags.map((t) => <Tag key={t} text={t} />)}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="projects">
              <SectionLabel>Projects</SectionLabel>
              <div className="flex flex-col gap-5">
                {PROJECTS.map((item, i) => (
                  <ProjectCard key={i} item={item} />
                ))}
              </div>
            </section>

            <section id="education">
              <SectionLabel>Education</SectionLabel>
              <div className="rounded-xl border border-slate-700/80 bg-slate-800/50 p-5">
                <p className="font-outfit text-base font-bold text-slate-200">
                  Guru Gobind Singh Indraprastha University
                </p>
                <p className="mt-1 font-outfit text-sm font-medium text-teal-400">
                  B.Tech — Artificial Intelligence & Machine Learning
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Delhi, India", "Expected May 2026", "GPA: 8.8 / 10"].map((c) => (
                    <span
                      key={c}
                      className="rounded-md bg-slate-700/50 px-3 py-1 font-mono text-[0.73rem] text-slate-400"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-[0.85rem] leading-relaxed text-slate-500">
                  Machine Learning · AI · DSA · DBMS · Computer Networks · Linear Algebra · Probability & Statistics
                </p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}


function SectionLabel({ children }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="font-outfit text-[0.68rem] font-bold uppercase tracking-[0.22em] text-teal-400">
        {children}
      </span>
      <span className="flex-1 h-px bg-slate-700/80" />
    </div>
  );
}

function Hi({ children }) {
  return <em className="not-italic text-slate-200">{children}</em>;
}
import { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

export default function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState("ABOUT");

  const menuItems = [
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
  ];

  const socialLinks = [
    { href: "https://github.com/ANUJNEGI15072005", icon: <FaGithub size={20} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/anujnegi-webdev", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
    { href: "https://leetcode.com/u/anujn158/", icon: <SiLeetcode size={20} />, label: "LeetCode" },
    { href: "https://anujnegi.vercel.app", icon: <BsGlobe size={20} />, label: "Portfolio" },
  ];

  const [text] = useTypewriter({
    words: ["Full Stack Developer", "ML Enthusiast"],
    loop: true,
    delaySpeed: 2000,
  });

  const skills = [
    {
      heading: "Languages",
      content: ["JavaScript", "TypeScript", "C++", "Python"],
    },
    {
      heading: "Core Concepts",
      content: ["DSA", "OOPS", "OS", "DBMS"],
    },
    {
      heading: "Frameworks & Libraries",
      content: ["Next.js", "React.js", "Flask", "Express.js", "Node.js", "Tailwind CSS"],
    },
    {
      heading: "Data Science & ML",
      content: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    },
    {
      heading: "Tools & Platforms",
      content: ["Git & Version Control", "GitHub", "Postman", "VS Code", "npm", "Vite", "MongoDB", "CSS", "Docker", "SQL"],
    },
  ];

  const projects = [
    {
      name: "Studiqo",
      href: "https://studiqo-mu.vercel.app/",
      description: "Studiqo is a full-stack AI-powered study management platform built to help students plan, track, and optimize their daily learning. It features a smart task planner with time-based scheduling, an integrated study timer to monitor sessions and build consistency, and AI-assisted notes to enhance productivity. The platform also includes user authentication, real-time task updates, and an intuitive dashboard for tracking progress. Developed using Next.js and Tailwind CSS for a fast and responsive frontend, with Node.js, Express, and MongoDB powering the backend, Studiqo delivers a seamless and efficient study experience.",
      techstack: ["Next.js", "Tailwind CSS", "MongoDB", "Better-Auth"],
      image: "studiqo.png"
    },
    {
      name: "SpendFlux",
      href: "https://spendflux-tracker.vercel.app/", 
      description:
        "SpendFlux is a full-stack personal finance management application designed to help users track income, expenses, and overall budget in a clean and intuitive interface. It features real-time transaction updates, category-wise expense tracking, and interactive data visualizations including bar and pie charts for better financial insights. Built with React and Tailwind CSS for a responsive frontend, and powered by Node.js, Express, and MongoDB on the backend, SpendFlux ensures efficient data handling, scalability, and a seamless user experience.",
      techstack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Chart.js"],
      image: "spendflux.png",
    },
    {
      name: "BeYourTrainer",
      href: "https://beyourtrainer.vercel.app/",
      description:
        "Beyourtrainer is a machine learning-driven fitness recommendation system that suggests personalized workout and diet plans based on user profiles, including fitness goals, body type, and activity level. The model leverages data-driven insights to provide effective fitness guidance, while the FastAPI backend ensures high performance and scalability. The web interface, built with React and Tailwind CSS, delivers an engaging and responsive user experience. This project showcases the integration of machine learning with modern web technologies for smart fitness assistance.",
      techstack: ["Python", "Scikit-learn", "Pandas", "FastAPI", "React", "Tailwind CSS"],
      image: "beyourtrainer.png",
    },
    {
      name: "TestMaker",
      href: "https://testmakerai.vercel.app/",
      description:
        "TestMaker is an AI-powered platform designed to simplify the creation and management of custom tests and quizzes. It leverages Generative AI to automatically generate intelligent questions, supports PDF reading and writing through PyMuPDF, and allows educators and learners to efficiently organize assessments. The platform integrates a sleek and responsive frontend with React and Tailwind CSS, while Flask handles backend operations seamlessly.",
      techstack: ["React", "Tailwind CSS", "Flask", "PyMuPDF", "OpenAI API"],
      image: "testmaker.png",
    },
    {
      name: "Stump Talk",
      href: "https://stumptalk.onrender.com/",
      description:
        "Stump Talk is a community-driven discussion platform where users can share ideas, ask questions, and engage in meaningful conversations. It features real-time interactions, user-friendly interfaces, and persistent data storage with MongoDB. Built with React and Tailwind CSS on the frontend, and Node.js with Express on the backend, the platform emphasizes performance, scalability, and a seamless user experience.",
      techstack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.io"],
      image: "stumptalk.png",
    },
    {
      name: "Garhwal Yatra",
      href: "https://garhwal-yatra.vercel.app/",
      description:
        "Garhwal Yatra is a static tourism blog dedicated to exploring the Garhwal region. It provides comprehensive information on districts, maps, and Char Dham pilgrimage spots with engaging content and interactive visuals. The project emphasizes responsive design and smooth navigation, built using React, Tailwind CSS, and React Router, with Vite for optimized performance. It serves as a one-stop guide for travelers and enthusiasts interested in the cultural and natural heritage of Garhwal.",
      techstack: ["React", "Tailwind CSS", "React Router", "Vite"],
      image: "garhwalyatra.png",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActive(sections[i].toUpperCase());
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      className="relative min-h-screen bg-slate-900 text-slate-400 leading-relaxed antialiased selection:bg-teal-300 selection:text-teal-900"
    >

      <div
        className="pointer-events-none fixed inset-0 transition duration-300"
        style={{
          background: `
            radial-gradient(
              600px at ${pos.x}px ${pos.y}px,
              rgba(29, 78, 216, 0.15),
              transparent 80%
            )
          `,
        }}
      ></div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">

        <div className="lg:flex lg:justify-between lg:gap-4">

          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-6xl font-outfit">
                Anuj Negi
              </h1>
              <h2 className="mt-4 text-lg font-medium tracking-tight text-slate-200 sm:text-2xl font-outfit">
                {text}
                <Cursor cursorStyle="|" />
              </h2>
              <p className="mt-4 max-w-sm text-lg font-lato leading-normal">
                Crafting intelligent, scalable, and user-friendly solutions — from dynamic full stack applications to cutting-edge machine learning models.
              </p>
            </div>

            <nav className="hidden lg:block">
              <ul className="mt-16 w-max">
                {menuItems.map((item) => (
                  <li
                    key={item.label}
                    className="group cursor-pointer py-3"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(item.label);

                      const section = document.getElementById(item.label.toLowerCase());
                      if (section) {
                        const headerOffset = 96;
                        const elementPosition = section.getBoundingClientRect().top + window.scrollY;
                        const offsetPosition = elementPosition - headerOffset;

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    <a href={item.href} className="flex items-center">
                      <span
                        className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none
                        ${active === item.label
                            ? "w-16 bg-slate-200"
                            : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                          }`}
                      ></span>
                      <span
                        className={`nav-text text-sm font-bold uppercase tracking-[0.2em] font-outfit transition-colors
                        ${active === item.label
                            ? "text-slate-200"
                            : "text-slate-500 group-hover:text-slate-200"
                          }`}
                      >
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="lg:ml-1 lg:mt-16 flex lg:items-end my-2" role="list">
              {socialLinks.map((link) => (
                <li key={link.label} className="mr-5 shrink-0 text-sm">
                  <a
                    className="block hover:text-slate-200 text-slate-400 transition"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={link.label}
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </header>

          <main className="lg:top-0 lg:flex lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 lg:mt-0 mt-10">
            <section id="about" className="mb-10">
              <div className="lg:px-2 font-lato">
                <p className="text-justify text-lg py-2">
                  I’m a <span className="text-white">full-stack developer</span> focused on building <span className="text-white">scalable</span>, <span className="text-white">high-performance</span> applications with a strong emphasis on <span className="text-white">user experience</span>. I enjoy creating products that combine <span className="text-white">clean design</span> with <span className="text-white">real-world functionality</span>, turning ideas into solutions that are both <span className="text-white">practical</span> and <span className="text-white">impact-driven</span>.
                </p>

                <p className="text-justify text-lg py-2">
                  My core work revolves around the <span className="text-white">MERN stack</span> and <span className="text-white">Next.js</span>, where I build complete systems — from <span className="text-white">responsive frontends</span> to <span className="text-white">robust backend architectures</span>. Recently, I’ve been integrating <span className="text-white">AI-driven features</span> into applications like <span className="text-white">Studiqo</span>, enhancing productivity through <span className="text-white">smart automation</span> and <span className="text-white">intelligent workflows</span>.
                </p>

                <p className="text-justify text-lg py-2">
                  I actively strengthen my <span className="text-white">problem-solving</span> skills through <span className="text-white">data structures and algorithms</span> practice, which helps me write <span className="text-white">efficient</span>, <span className="text-white">optimized</span>, and <span className="text-white">production-ready</span> code. I’m always exploring new technologies and pushing myself to build <span className="text-white">better</span>, <span className="text-white">faster</span>, and more <span className="text-white">meaningful</span> digital experiences.
                </p>
              </div>
              <div className="mt-6 lg:px-2 space-y-3">
                <a
                  href="full_stack_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white font-medium text-lg group font-outfit hover:text-teal-400"
                >
                  View Resume
                  <svg
                    className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </section>

            <section id="skills" className="mt-16 mb-10">
              <ul>
                {skills.map((item, i) => (
                  <li key={i} className="mb-6 lg:px-2">
                    <h2 className="text-white font-outfit text-lg font-bold mb-2">{item.heading}</h2>
                    <ul className="mt-2 space-x-2 flex flex-wrap">
                      {item.content.map((text, j) => (
                        <li className="mr-1.5 mt-2" key={j}>
                          <div className="flex font-lato items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-300 ">
                            {text}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>

            <section id="projects" className="mt-16">
              <ul>
                {projects.map((item, i) => (
                  <a href={item.href} key={i} className="block group">
                    <li className="mb-8 p-4 rounded-lg bg-white/10">
                      <div className="flex items-center justify-center">
                        <h2 className="font-outfit text-3xl font-semibold text-teal-400">{item.name}</h2>
                      </div>
                      <img src={item.image} className="aspect-full my-5 w-full sm:h-full h-44" />
                      <p className="text-justify font-lato text-lg leading-tight">{item.description}</p>
                      <ul className="mt-2 space-x-2 flex flex-wrap">
                        {item.techstack.map((index, j) => (
                          <li key={j} className="mr-1.5 mt-2">
                            <div className="flex items-center font-lato rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-tight text-teal-300">
                              {index}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </a>
                ))}
              </ul>
            </section>
          </main>

        </div>

      </div>

    </div>
  );
}

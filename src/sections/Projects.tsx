import { useRef, type ReactElement } from "react";
import { motion, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import taskImage from "../assets/task-management.png";
import LaporanImage from "../assets/laporan.png";

/* ─── Types ──────────────────────────────────────────────── */
interface TechBadge {
    label: string;
    colorClass: string;
}

interface Project {
    title: string;
    subtitle: string;
    description: string;
    tech: TechBadge[];
    image: string;
    demoUrl: string;
    githubUrl: string;
    demoLabel: string;
    accentFrom: string;
    accentTo: string;
    glowColor: string;
    category: string;
}

/* ─── Data ───────────────────────────────────────────────── */
const PROJECTS: Project[] = [
    {
        title: "Web Management Letta School",
        subtitle: "Fullstack Web Application",
        description:
            "School management system with JWT authentication, role-based access control, and full CRUD features. Built with React, Go Fiber REST API, deployed via Docker on AWS EC2 with CI/CD via GitHub Actions and DevSecOps pipeline including secret scanning, SAST, dependency audit, container scanning, and DAST.",
        tech: [
            { label: "React",      colorClass: "bg-cyan-50 text-cyan-700 border-cyan-200" },
            { label: "Go Fiber",   colorClass: "bg-sky-50 text-sky-700 border-sky-200" },
            { label: "PostgreSQL", colorClass: "bg-blue-50 text-blue-700 border-blue-200" },
            { label: "Docker",     colorClass: "bg-indigo-50 text-indigo-700 border-indigo-200" },
            { label: "AWS EC2",    colorClass: "bg-orange-50 text-orange-700 border-orange-200" },
            { label: "CI/CD",      colorClass: "bg-green-50 text-green-700 border-green-200" },
            { label: "GitLeaks",   colorClass: "bg-red-50 text-red-700 border-red-200" },
            { label: "Semgrep",    colorClass: "bg-purple-50 text-purple-700 border-purple-200" },
            { label: "Trivy",      colorClass: "bg-blue-50 text-blue-700 border-blue-200" },
            { label: "OWASP ZAP",  colorClass: "bg-yellow-50 text-yellow-700 border-yellow-200" },
            { label: "CloudTrail", colorClass: "bg-orange-50 text-orange-700 border-orange-200" },
        ],
        image: taskImage,
        demoUrl: "https://school.lananuranf.my.id/",
        githubUrl: "https://github.com/Lananuranf-RockNRoll/letta-school",
        demoLabel: "Live Demo",
        accentFrom: "from-cyan-500",
        accentTo: "to-blue-600",
        glowColor: "rgba(6,182,212,0.25)",
        category: "Web Dev · DevOps",
    },
    {
        title: "Sales Data Dashboard",
        subtitle: "Data Science & Analytics",
        description:
            "End-to-end data science project analyzing sales performance with ML predictions using Random Forest. Interactive dashboard built with Streamlit, Pandas data wrangling, and Matplotlib visuals.",
        tech: [
            { label: "Python",        colorClass: "bg-yellow-50 text-yellow-700 border-yellow-200" },
            { label: "Streamlit",     colorClass: "bg-red-50 text-red-700 border-red-200" },
            { label: "Pandas",        colorClass: "bg-blue-50 text-blue-700 border-blue-200" },
            { label: "Matplotlib",    colorClass: "bg-purple-50 text-purple-700 border-purple-200" },
            { label: "Random Forest", colorClass: "bg-green-50 text-green-700 border-green-200" },
        ],
        image: LaporanImage,
        demoUrl: "https://sales-dashboard-lananuranf.streamlit.app/",
        githubUrl: "https://github.com/Lananuranf-RockNRoll/sales-dashboard",
        demoLabel: "View Report",
        accentFrom: "from-amber-500",
        accentTo: "to-orange-500",
        glowColor: "rgba(245,158,11,0.25)",
        category: "Data Science · ML",
    },
    {
        title: "Dockerized E-Commerce App",
        subtitle: "Cloud-Native Fullstack",
        description:
            "Production-grade containerized e-commerce platform with Go Gin/GORM backend, React frontend, and PostgreSQL. Orchestrated with Docker Compose and deployed on AWS EC2 with scalable infrastructure.",
        tech: [
            { label: "React",      colorClass: "bg-cyan-50 text-cyan-700 border-cyan-200" },
            { label: "Go Gin",     colorClass: "bg-sky-50 text-sky-700 border-sky-200" },
            { label: "GORM",       colorClass: "bg-slate-50 text-slate-700 border-slate-200" },
            { label: "PostgreSQL", colorClass: "bg-blue-50 text-blue-700 border-blue-200" },
            { label: "Docker",     colorClass: "bg-indigo-50 text-indigo-700 border-indigo-200" },
            { label: "AWS EC2",    colorClass: "bg-orange-50 text-orange-700 border-orange-200" },
        ],
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80",
        demoUrl: "https://lananuranf.my.id/",
        githubUrl: "https://github.com/Lananuranf-RockNRoll/ecommerce-fullstack",
        demoLabel: "Live Demo",
        accentFrom: "from-violet-500",
        accentTo: "to-purple-600",
        glowColor: "rgba(139,92,246,0.25)",
        category: "Web Dev · Cloud",
    },
];

/* ─── Icons ──────────────────────────────────────────────── */
function GitHubIcon(): ReactElement {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
    );
}

function ExternalIcon(): ReactElement {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
    );
}

/* ─── ProjectCard with react-parallax-tilt ───────────────── */
interface ProjectCardProps extends Project {
    index: number;
    inView: boolean;
}

function ProjectCard({
                         title, subtitle, description, tech, image,
                         demoUrl, githubUrl, demoLabel, accentFrom, accentTo,
                         glowColor, category, index, inView,
                     }: ProjectCardProps): ReactElement {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
        >
            <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable
                glareMaxOpacity={0.12}
                glareColor="#ffffff"
                glarePosition="all"
                style={{ transformStyle: "preserve-3d" }}
                tiltReverse
            >
                <article
                    className="bg-white rounded-3xl overflow-hidden border border-slate-100 flex flex-col"
                    style={{
                        boxShadow: `0 4px 24px ${glowColor}, 0 1px 4px rgba(0,0,0,0.06)`,
                    }}
                >
                    {/* Image */}
                    <div className="relative overflow-hidden h-48 sm:h-52">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        {/* gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${accentFrom} ${accentTo} opacity-0 hover:opacity-15 transition-opacity duration-500`} />

                        <span className="absolute top-3 left-3 text-xs font-semibold bg-white/90 backdrop-blur-sm text-slate-600 px-3 py-1 rounded-full border border-white/50 shadow-sm">
              {category}
            </span>
                        <span
                            className={`absolute top-3 right-3 text-xs font-bold bg-gradient-to-br ${accentFrom} ${accentTo} text-white w-7 h-7 rounded-full flex items-center justify-center shadow`}
                        >
              {String(index + 1).padStart(2, "0")}
            </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5 sm:p-6 gap-3" style={{ transform: "translateZ(20px)" }}>
                        <div>
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{subtitle}</p>
                            <h3 className="text-lg font-bold text-slate-900 leading-snug">{title}</h3>
                        </div>

                        <p className="text-sm text-slate-500 leading-relaxed flex-1">{description}</p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                            {tech.map((t, i) => (
                                <motion.span
                                    key={t.label}
                                    className={`text-xs font-medium px-2.5 py-1 rounded-full border ${t.colorClass}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: index * 0.15 + i * 0.05 + 0.4, duration: 0.3 }}
                                >
                                    {t.label}
                                </motion.span>
                            ))}
                        </div>

                        <div className="h-px bg-slate-100 mt-1" />

                        <div className="flex gap-3 pt-1">
                            <motion.a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${accentFrom} ${accentTo} shadow-sm`}
                                whileHover={{ scale: 1.04, opacity: 0.92 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <ExternalIcon />
                                {demoLabel}
                            </motion.a>
                            <motion.a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <GitHubIcon />
                                Code
                            </motion.a>
                        </div>
                    </div>
                </article>
            </Tilt>
        </motion.div>
    );
}

/* ─── Projects ───────────────────────────────────────────── */
export default function Projects(): ReactElement {
    const ref    = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section
            id="projects"
            className="min-h-screen px-6 py-24 scroll-mt-14 overflow-hidden relative"
            style={{
                background:
                    "linear-gradient(150deg, #fff1f2 0%, #ffe4e6 15%, #f8fafc 45%, #eff6ff 75%, #dbeafe 100%)",
            }}
        >
            {/* Blobs */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-rose-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div ref={ref} className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: -30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-2">
                        What I&apos;ve built
                    </p>
                    <h2 className="text-4xl font-extrabold text-slate-900">Projects</h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard key={project.title} {...project} index={i} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
import { useRef, type ReactElement, type JSX } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import aboutImage from "../assets/about.png";

/* ─── Types ──────────────────────────────────────────────── */
interface Stat {
    value: string;
    label: string;
}

interface Highlight {
    icon: JSX.Element;
    title: string;
    desc: string;
    colorClass: string;
}

/* ─── Data ───────────────────────────────────────────────── */
const STATS: Stat[] = [
    { value: "6th", label: "Semester" },
    { value: "3+",  label: "Projects" },
    { value: "3",   label: "Domains"  },
];

const HIGHLIGHTS: Highlight[] = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25z" />
            </svg>
        ),
        title: "Web Development",
        desc: "Fullstack apps with React, Go, and PostgreSQL",
        colorClass: "text-cyan-600 bg-cyan-50",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z" />
            </svg>
        ),
        title: "Data Science",
        desc: "ML models, analytics & visualization with Python",
        colorClass: "text-amber-600 bg-amber-50",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        title: "DevSecOps",
        desc: "Docker, CI/CD pipelines & cloud deployment on AWS",
        colorClass: "text-violet-600 bg-violet-50",
    },
];

/* ─── Variants ───────────────────────────────────────────── */
const leftVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const rightVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: 0.15 * i + 0.4, duration: 0.5, ease: "easeOut" },
    }),
};

const statVariants: Variants = {
    hidden: { opacity: 0, scale: 0.7 },
    show: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: 0.1 * i + 0.3, duration: 0.4, type: "spring", stiffness: 200 },
    }),
};

/* ─── StatCard ───────────────────────────────────────────── */
interface StatCardProps extends Stat {
    index: number;
    inView: boolean;
}

function StatCard({ value, label, index, inView }: StatCardProps): JSX.Element {
    return (
        <motion.div
            className="flex flex-col items-center bg-white rounded-2xl px-4 py-3 shadow-sm border border-slate-100 flex-1"
            variants={statVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={index}
            whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
        >
            <span className="text-xl font-extrabold text-slate-900">{value}</span>
            <span className="text-xs text-slate-400 font-medium mt-0.5">{label}</span>
        </motion.div>
    );
}

/* ─── HighlightCard ──────────────────────────────────────── */
interface HighlightCardProps extends Highlight {
    index: number;
    inView: boolean;
}

function HighlightCard({ icon, title, desc, colorClass, index, inView }: HighlightCardProps): JSX.Element {
    return (
        <motion.div
            className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm text-left cursor-default"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={index}
            whileHover={{ x: 6, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <span className={`flex-shrink-0 p-2 rounded-xl ${colorClass}`}>
                {icon}
            </span>
            <div>
                <p className="font-semibold text-slate-800 text-sm">{title}</p>
                <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
            </div>
        </motion.div>
    );
}

/* ─── Component ──────────────────────────────────────────── */
export default function About(): ReactElement {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="about"
            ref={ref}
            className="min-h-screen flex items-center px-6 md:px-12 py-24 scroll-mt-14 overflow-hidden relative"
            style={{
                background: "linear-gradient(160deg, #f0fdf4 0%, #dcfce7 20%, #f8fafc 50%, #fef9c3 80%, #fff7ed 100%)",
            }}
        >
            {/* Blobs */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">

                {/* Left — image + stats */}
                <motion.div
                    className="flex-shrink-0 flex flex-col items-center gap-6"
                    variants={leftVariants}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                >
                    <div className="relative">
                        <motion.div
                            className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-cyan-100 to-violet-100 opacity-60"
                            animate={{ rotate: [0, 3, -3, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.img
                            src={aboutImage}
                            alt="About Lananuranf"
                            className="relative w-64 md:w-72 rounded-2xl shadow-xl object-cover ring-4 ring-white"
                            whileHover={{ scale: 1.03, rotate: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        />
                    </div>

                    <div className="flex gap-4 w-full justify-center">
                        {STATS.map((stat, i) => (
                            <StatCard key={stat.label} {...stat} index={i} inView={inView} />
                        ))}
                    </div>
                </motion.div>

                {/* Right — text */}
                <motion.div
                    className="flex flex-col gap-5 text-center md:text-left"
                    variants={rightVariants}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                >
                    <div>
                        <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">Who I am</p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">About Me</h2>
                    </div>

                    <div className="h-0.5 w-10 bg-slate-200 rounded-full self-center md:self-start" />

                    <p className="text-slate-600 leading-relaxed text-base">
                        I&apos;m a{" "}
                        <span className="font-semibold text-slate-800">6th-semester Information Systems</span>{" "}
                        student at{" "}
                        <span className="font-semibold text-slate-800">Gunadarma University</span>, passionate
                        about building secure, scalable, and data-driven applications with clean architecture
                        and modern technology stacks.
                    </p>

                    <p className="text-slate-500 leading-relaxed text-sm">
                        Currently sharpening skills across three domains — from shipping fullstack web apps and
                        deploying them to the cloud, to extracting insights from data using machine learning.
                    </p>

                    <div className="flex flex-col gap-3 mt-1">
                        {HIGHLIGHTS.map((item, i) => (
                            <HighlightCard key={item.title} {...item} index={i} inView={inView} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
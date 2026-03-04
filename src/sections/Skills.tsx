import { useRef, type ReactElement } from "react";
import { Icon, addCollection, type IconifyJSON } from "@iconify/react";
import { motion, useInView, type Variants } from "framer-motion";
import logos from "@iconify-json/logos/icons.json";
import simpleIcons from "@iconify-json/simple-icons/icons.json";

addCollection(logos as IconifyJSON);
addCollection(simpleIcons as IconifyJSON);

/* ─── Types ──────────────────────────────────────────────── */
interface Skill {
    name: string;
    icon: string;
}

/* ─── Data ───────────────────────────────────────────────── */
const SKILLS: Skill[] = [
    { name: "React",        icon: "logos:react" },
    { name: "TypeScript",   icon: "logos:typescript-icon" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "Node.js",      icon: "logos:nodejs-icon" },
    { name: "Go",           icon: "logos:go" },
    { name: "Python",       icon: "logos:python" },
    { name: "Kubernetes",   icon: "logos:kubernetes" },
    { name: "Docker",       icon: "logos:docker-icon" },
    { name: "Git",          icon: "logos:git-icon" },
    { name: "GitHub",       icon: "logos:github-icon" },
    { name: "SQL (MySQL)",  icon: "logos:mysql-icon" },
    { name: "PostgreSQL",   icon: "logos:postgresql" },
    { name: "MongoDB",      icon: "logos:mongodb-icon" },
    { name: "Pandas",       icon: "logos:pandas-icon" },
    { name: "Scikit-learn", icon: "simple-icons:scikitlearn" },
    { name: "Tableau",      icon: "logos:tableau-icon" },
    { name: "AWS",          icon: "logos:aws" },
    { name: "WEKA",         icon: "logos:java" },
    { name: "GitLeaks",     icon: "logos:git-icon" },
    { name: "Trivy",        icon: "simple-icons:trivy" },
    { name: "OWASP ZAP",    icon: "simple-icons:owasp" },
];

/* ─── Variants ───────────────────────────────────────────── */
const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    show: (i: number) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { delay: i * 0.05, duration: 0.4, type: "spring", stiffness: 200, damping: 15 },
    }),
};

/* ─── SkillCard ──────────────────────────────────────────── */
interface SkillCardProps extends Skill {
    index: number;
    inView: boolean;
}

function SkillCard({ name, icon, index, inView }: SkillCardProps): ReactElement {
    return (
        <motion.div
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col items-center justify-center gap-3 cursor-default"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={index}
            whileHover={{
                y: -8,
                scale: 1.06,
                boxShadow: "0 12px 32px rgba(0,0,0,0.1)",
                transition: { type: "spring", stiffness: 400, damping: 15 },
            }}
            whileTap={{ scale: 0.95 }}
        >
            <Icon icon={icon} className="w-10 h-10" aria-hidden="true" />
            <p className="text-xs font-semibold text-slate-600 text-center">{name}</p>
        </motion.div>
    );
}

/* ─── Skills ─────────────────────────────────────────────── */
export default function Skills(): ReactElement {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section
            id="skills"
            className="min-h-screen flex items-center justify-center px-6 py-24 scroll-mt-14 overflow-hidden relative"
            style={{
                background: "linear-gradient(145deg, #faf5ff 0%, #ede9fe 25%, #f0f9ff 60%, #e0f2fe 100%)",
            }}
        >
            <div className="absolute top-10 left-10 w-64 h-64 bg-violet-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div ref={ref} className="max-w-5xl w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">What I use</p>
                    <h2 className="text-4xl font-extrabold mb-3 text-slate-900">Skills</h2>
                    <p className="text-slate-500 mb-12 text-sm">Technologies I work with daily</p>
                </motion.div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                    {SKILLS.map((skill, i) => (
                        <SkillCard key={skill.name} {...skill} index={i} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
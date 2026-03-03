import { useRef, type ReactElement } from "react";
import { motion, useInView, type Variants } from "framer-motion";

/* ─── Types ──────────────────────────────────────────────── */
interface Skill {
    name: string;
    iconClass?: string;
    svgPath?: string;
    svgColor?: string;
}

/* ─── Data ───────────────────────────────────────────────── */
const SKILLS: Skill[] = [
    { name: "React",        iconClass: "devicon-react-original colored" },
    { name: "TypeScript",   iconClass: "devicon-typescript-plain colored" },
    { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original colored" },
    { name: "Node.js",      iconClass: "devicon-nodejs-plain colored" },
    { name: "Kubernetes",   iconClass: "devicon-kubernetes-plain colored" },
    { name: "SQL (MySQL)",  iconClass: "devicon-mysql-plain colored" },
    { name: "PostgreSQL",   iconClass: "devicon-postgresql-plain colored" },
    { name: "MongoDB",      iconClass: "devicon-mongodb-plain colored" },
    { name: "Python",       iconClass: "devicon-python-plain colored" },
    {
        name: "Pandas",
        svgColor: "#150458",
        svgPath:
            "M7.5 0H9v6.5h1.5V0H12v6.5h.5A1.5 1.5 0 0 1 14 8v2a1.5 1.5 0 0 1-1.5 1.5H12V24h-1.5v-12.5H9V24H7.5v-12.5H7A1.5 1.5 0 0 1 5.5 10V8A1.5 1.5 0 0 1 7 6.5h.5V0z",
    },
    {
        name: "Tableau",
        svgColor: "#E97627",
        svgPath:
            "M11.654 23.93v-1.79H9.692v-.613h4.538v.612h-1.962v1.791zm-4.846-1.34l-.613-1.636-.613 1.637H4.97l1.224 3.272h.612l1.224-3.272zm9.692 0l-.612-1.636-.613 1.637h-.612l1.225 3.272h.612l1.224-3.272zM12 12.735l-.613-1.636-.612 1.636H10.163l1.224 3.272H12l1.224-3.272z",
    },
    { name: "Docker", iconClass: "devicon-docker-plain colored" },
    { name: "Git",    iconClass: "devicon-git-plain colored" },
    { name: "GitHub", iconClass: "devicon-github-original" },
    {
        name: "AWS",
        svgColor: "#232F3E",
        svgPath:
            "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586z",
    },
    {
        name: "WEKA",
        svgColor: "#0099CC",
        svgPath:
            "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z",
    },
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

function SkillCard({ name, iconClass, svgPath, svgColor, index, inView }: SkillCardProps): ReactElement {
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
            {iconClass && <i className={`${iconClass} text-5xl`} aria-hidden="true" />}
            {svgPath && (
                <svg viewBox="0 0 24 24" fill={svgColor ?? "#000"} className="w-10 h-10" aria-hidden="true">
                    <path d={svgPath} />
                </svg>
            )}
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
                background:
                    "linear-gradient(145deg, #faf5ff 0%, #ede9fe 25%, #f0f9ff 60%, #e0f2fe 100%)",
            }}
        >
            {/* Blobs */}
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
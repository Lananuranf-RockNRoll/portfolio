import { type ReactElement } from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFDownloadLink,
} from "@react-pdf/renderer";

/* ─── Styles ─────────────────────────────────────────────── */
const S = StyleSheet.create({
    page: {
        fontFamily: "Helvetica",
        fontSize: 10,
        color: "#1e293b",
        paddingTop: 40,
        paddingBottom: 40,
        paddingHorizontal: 45,
        backgroundColor: "#ffffff",
    },

    /* Header */
    header: { marginBottom: 18, borderBottom: "2px solid #334155", paddingBottom: 14 },
    name:   { fontFamily: "Helvetica-Bold", fontSize: 26, color: "#0f172a" },
    role:   { fontFamily: "Helvetica-Bold", fontSize: 11, color: "#475569", marginTop: 3, marginBottom: 8 },
    contactRow: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
    contactItem: { fontSize: 9, color: "#475569" },

    /* Two column layout */
    body:     { flexDirection: "row", gap: 20 },
    leftCol:  { width: "62%", flexDirection: "column", gap: 16 },
    rightCol: { width: "35%", flexDirection: "column", gap: 16 },

    /* Section */
    section:      { flexDirection: "column", gap: 8 },
    sectionTitle: {
        fontFamily: "Helvetica-Bold",
        fontSize: 10,
        color: "#1e293b",
        textTransform: "uppercase",
        letterSpacing: 1.2,
        borderBottom: "1px solid #e2e8f0",
        paddingBottom: 4,
        marginBottom: 4,
    },

    /* Item */
    itemHeader:   { flexDirection: "row", justifyContent: "space-between", marginBottom: 2 },
    itemTitle:    { fontFamily: "Helvetica-Bold", fontSize: 10, color: "#0f172a" },
    itemSubtitle: { fontFamily: "Helvetica-Bold", fontSize: 9, color: "#64748b", marginBottom: 3 },
    itemDate:     { fontSize: 8.5, color: "#94a3b8" },
    bullet:       { flexDirection: "row", gap: 5, marginTop: 2 },
    bulletDot:    { fontSize: 9, color: "#475569" },
    bulletText:   { fontSize: 9, color: "#475569", lineHeight: 1.5, flex: 1 },

    /* Skills */
    skillGroup: { marginBottom: 6 },
    skillLabel: { fontFamily: "Helvetica-Bold", fontSize: 9, color: "#334155", marginBottom: 3 },
    skillTags:  { flexDirection: "row", flexWrap: "wrap", gap: 4 },
    skillTag: {
        fontSize: 8,
        color: "#334155",
        backgroundColor: "#f1f5f9",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 3,
    },

    /* Education */
    eduTitle: { fontFamily: "Helvetica-Bold", fontSize: 10, color: "#0f172a" },
    eduSub:   { fontSize: 9, color: "#475569", marginTop: 2 },
    eduDate:  { fontSize: 8.5, color: "#94a3b8", marginTop: 1 },

    /* Info box */
    infoBox:  { backgroundColor: "#f8fafc", borderRadius: 6, padding: 10, gap: 6 },
    infoTitle: { fontFamily: "Helvetica-Bold", fontSize: 9, color: "#334155", marginBottom: 2 },
    infoText:  { fontSize: 9, color: "#475569", lineHeight: 1.5 },

    /* Lang */
    langRow:   { flexDirection: "row", justifyContent: "space-between", marginBottom: 3 },
    langName:  { fontFamily: "Helvetica-Bold", fontSize: 9, color: "#334155" },
    langLevel: { fontSize: 9, color: "#94a3b8" },
});

/* ─── Document ───────────────────────────────────────────── */
function CVDocument(): ReactElement {
    return (
        <Document title="CV - Lananuranf" author="Lananuranf">
            <Page size="A4" style={S.page}>

                {/* Header */}
                <View style={S.header}>
                    <Text style={S.name}>Maulana Nur Anfajm</Text>
                    <Text style={S.role}>Fullstack Web Developer · Data Science · DevSecOps</Text>
                    <View style={S.contactRow}>
                        <Text style={S.contactItem}>lananuranf@gmail.com</Text>
                        <Text style={S.contactItem}>+62 859-6023-5008</Text>
                        <Text style={S.contactItem}>portfolio-lananuranf.netlify.app</Text>
                        <Text style={S.contactItem}>github.com/Lananuranf-RockNRoll</Text>
                        <Text style={S.contactItem}>Indonesia</Text>
                    </View>
                </View>

                {/* Body */}
                <View style={S.body}>

                    {/* LEFT */}
                    <View style={S.leftCol}>

                        <View style={S.section}>
                            <Text style={S.sectionTitle}>Profile</Text>
                            <Text style={{ fontFamily: "Helvetica", fontSize: 9, color: "#475569", lineHeight: 1.5 }}>
                                Mahasiswa Sistem Informasi semester 6 di Universitas Gunadarma dengan pengalaman
                                dalam membangun aplikasi web fullstack dan mengerjakan proyek berbasis data. Terbiasa
                                menggunakan teknologi modern dalam pengembangan aplikasi serta memahami proses
                                deployment dasar menggunakan Docker dan lingkungan cloud. Memiliki minat pada
                                pengembangan sistem yang terstruktur, aman, dan dapat digunakan secara efektif.
                            </Text>
                        </View>

                        <View style={S.section}>
                            <Text style={S.sectionTitle}>Projects</Text>

                            {[
                                {
                                    title: "Web Management Letta School",
                                    sub: "Fullstack Web Application",
                                    date: "2026",
                                    bullets: [
                                        "School management system with JWT auth and role-based access control.",
                                        "React + Go Fiber + PostgreSQL on AWS EC2 with Docker & CI/CD.",
                                    ],
                                },
                                {
                                    title: "Sales Data Dashboard",
                                    sub: "Data Science & Analytics",
                                    date: "2026",
                                    bullets: [
                                        "ML pipeline for sales forecasting using Random Forest algorithm.",
                                        "Interactive Streamlit dashboard with Pandas and Matplotlib.",
                                    ],
                                },
                                {
                                    title: "Dockerized E-Commerce App",
                                    sub: "Cloud-Native Fullstack",
                                    date: "2026",
                                    bullets: [
                                        "Containerized e-commerce with Go Gin/GORM + React + PostgreSQL.",
                                        "Docker Compose orchestration on AWS EC2.",
                                    ],
                                },
                            ].map((p, i) => (
                                <View key={p.title} style={{ marginBottom: i < 2 ? 10 : 0 }}>
                                    <View style={S.itemHeader}>
                                        <Text style={S.itemTitle}>{p.title}</Text>
                                        <Text style={S.itemDate}>{p.date}</Text>
                                    </View>
                                    <Text style={S.itemSubtitle}>{p.sub}</Text>
                                    {p.bullets.map((b) => (
                                        <View key={b} style={S.bullet}>
                                            <Text style={S.bulletDot}>•</Text>
                                            <Text style={S.bulletText}>{b}</Text>
                                        </View>
                                    ))}
                                </View>
                            ))}
                        </View>

                        <View style={S.section}>
                            <Text style={S.sectionTitle}>Education</Text>
                            <Text style={S.eduTitle}>Gunadarma University</Text>
                            <Text style={S.eduSub}>Bachelor of Information Systems</Text>
                            <Text style={S.eduDate}>2023 – Present · Semester 6</Text>
                        </View>

                    </View>

                    {/* RIGHT */}
                    <View style={S.rightCol}>

                        <View style={S.section}>
                            <Text style={S.sectionTitle}>Tech Skills</Text>
                            {[
                                { label: "Frontend",       tags: ["React", "TypeScript", "Tailwind CSS", "Svelte", "PHP", "CSS"] },
                                { label: "Backend",        tags: ["Go Fiber", "Go Gin", "GORM", "Node.js", "Flask"] },
                                { label: "Database",       tags: ["PostgreSQL", "MySQL", "MongoDB"] },
                                { label: "DevOps & Cloud", tags: ["Docker", "AWS EC2", "CI/CD", "Kubernetes"] },
                                { label: "Data Science",   tags: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Streamlit"] },
                                { label: "Tools",          tags: ["Git", "GitHub", "Postman"] },
                            ].map((g) => (
                                <View key={g.label} style={S.skillGroup}>
                                    <Text style={S.skillLabel}>{g.label}</Text>
                                    <View style={S.skillTags}>
                                        {g.tags.map((t) => (
                                            <Text key={t} style={S.skillTag}>{t}</Text>
                                        ))}
                                    </View>
                                </View>
                            ))}
                        </View>

                        <View style={S.section}>
                            <Text style={S.sectionTitle}>Languages</Text>
                            <View style={S.langRow}>
                                <Text style={S.langName}>Indonesian</Text>
                                <Text style={S.langLevel}>Native</Text>
                            </View>
                            <View style={S.langRow}>
                                <Text style={S.langName}>English</Text>
                                <Text style={S.langLevel}>Intermediate</Text>
                            </View>
                        </View>

                        <View style={S.section}>
                            <Text style={S.sectionTitle}>Status</Text>
                            <View style={S.infoBox}>
                                <Text style={S.infoTitle}>Available for Work</Text>
                                <Text style={S.infoText}>
                                    Open to fullstack, backend, or data science roles. Internship or full-time.
                                </Text>
                            </View>
                        </View>

                    </View>
                </View>
            </Page>
        </Document>
    );
}

/* ─── Export: Download Button ────────────────────────────── */
export default function CVDownloadButton(): ReactElement {
    return (
        <PDFDownloadLink document={<CVDocument />} fileName="CV_Lananuranf.pdf">
            {({ loading }) => (
                <button
                    type="button"
                    className="flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 active:scale-95 text-white font-semibold rounded-xl shadow-sm transition-all duration-200 text-sm"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    {loading ? "Generating…" : "Download CV"}
                </button>
            )}
        </PDFDownloadLink>
    );
}
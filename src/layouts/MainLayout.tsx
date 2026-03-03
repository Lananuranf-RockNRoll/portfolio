import {
    type ReactNode,
    type ReactElement,
    type MouseEvent,
    useState,
    useEffect,
    useCallback,
} from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

/* ─── Types ──────────────────────────────────────────────── */
interface MainLayoutProps {
    children: ReactNode;
}

interface NavLink {
    name: string;
    href: string;
}

/* ─── Data ───────────────────────────────────────────────── */
const NAV_LINKS: NavLink[] = [
    { name: "Home",     href: "#home"     },
    { name: "About",    href: "#about"    },
    { name: "Skills",   href: "#skills"   },
    { name: "Projects", href: "#projects" },
];

/* ─── Variants ───────────────────────────────────────────── */
const headerVariants: Variants = {
    hidden: { y: -80, opacity: 0 },
    show:   { y: 0,   opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ─── Component ──────────────────────────────────────────── */
export default function MainLayout({ children }: MainLayoutProps): ReactElement {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled,   setScrolled]   = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    /**
     * Handles nav clicks on both desktop & mobile.
     *
     * Root cause of the mobile bug:
     *   The dropdown has an exit animation (height 0) that still occupies
     *   layout space while collapsing, causing `scrollIntoView` / anchor
     *   jump to land at the wrong position or do nothing at all on mobile.
     *
     * Fix:
     *   1. Prevent default anchor jump entirely.
     *   2. Close the menu (triggers exit animation ~250ms).
     *   3. After 320ms (animation done + layout settled) manually scroll
     *      with offsetTop so position is always accurate.
     */
    const handleNavClick = useCallback(
        (e: MouseEvent<HTMLAnchorElement>, href: string) => {
            e.preventDefault();
            setIsMenuOpen(false);

            setTimeout(() => {
                const id     = href.replace("#", "");
                const target = document.getElementById(id);
                if (!target) return;

                const navbarHeight = 56; // matches h-14
                const y = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
                window.scrollTo({ top: y, behavior: "smooth" });
            }, 320);
        },
        []
    );

    return (
        <>
            <motion.header
                className={[
                    "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                    scrolled
                        ? "backdrop-blur-md bg-white/90 shadow-sm border-b border-slate-100"
                        : "bg-transparent",
                ].join(" ")}
                variants={headerVariants}
                initial="hidden"
                animate="show"
            >
                <nav className="max-w-7xl mx-auto h-14 px-6 md:px-12 flex items-center justify-between">
                    {/* Logo */}
                    <motion.h1
                        className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 cursor-default"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        Portfolio
                    </motion.h1>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        {NAV_LINKS.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="relative text-slate-600 hover:text-slate-900 transition-colors group"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
                                whileHover={{ y: -2 }}
                            >
                                {link.name}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-slate-900 rounded-full group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Hamburger */}
                    <motion.button
                        type="button"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                        onClick={toggleMenu}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.span
                            className="block w-5 h-0.5 bg-slate-800 origin-center"
                            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="block w-5 h-0.5 bg-slate-800"
                            animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="block w-5 h-0.5 bg-slate-800 origin-center"
                            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>
                </nav>

                {/* Mobile dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                            <div className="flex flex-col px-6 py-3">
                                {NAV_LINKS.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="py-4 text-slate-600 active:text-slate-900 font-medium border-b border-slate-100 last:border-0 transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.06, duration: 0.25 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            <main className="pt-14">{children}</main>
        </>
    );
}
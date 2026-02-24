import React, { type ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode;
}

interface NavLink {
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
];

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/80 border-b z-50">
                <nav className="max-w-7xl mx-auto h-20 px-6 md:px-12 flex items-center justify-between">

                    {/* Logo */}
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                        Portfolio
                    </h1>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-10 text-base font-medium">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-black text-gray-600 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                </nav>
            </header>

            <main className="pt-20">{children}</main>
        </>
    );
};

export default MainLayout;
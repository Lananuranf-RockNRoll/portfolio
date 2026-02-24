import logo from "../assets/Profile.jpg";

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/Lananuranf-RockNRoll",
        hover: "hover:bg-black hover:text-white",
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/USERNAME",
        hover: "hover:bg-blue-600 hover:text-white",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/lananur.anf/",
        hover: "hover:bg-pink-500 hover:text-white",
    },
];

export default function Home() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center px-6 md:px-12"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-28">

                {/* Profile Image */}
                <img
                    src={logo}
                    alt="Lananuranf Profile"
                    className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-xl"
                />

                {/* Content */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Hi, I'm Lananuranf
                    </h1>

                    <p className="text-gray-700">+6285960235008</p>
                    <p className="text-gray-700 mb-4">lananuranf@gmail.com</p>

                    <p className="text-lg text-gray-600 mb-8">
                        Web Developer • Data Science • DevSecOps
                    </p>

                    {/* Social Links */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className={`px-6 py-3 border rounded-xl text-center transition w-full sm:w-auto ${link.hover}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
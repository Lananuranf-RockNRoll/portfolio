import React from "react";
import aboutImage from "../assets/about.png";

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center bg-gray-50 px-6 md:px-12 py-24"
        >
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        About Me
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                        I’m a 6th-semester Information Systems student at
                        <span className="font-semibold"> Gunadarma University</span>.
                        Currently focused on mastering Web Development, Data Science,
                        and building strong foundations in DevSecOps.
                    </p>

                    <p className="text-gray-600 leading-relaxed text-base md:text-lg mt-4">
                        I’m passionate about creating secure, scalable,
                        and data-driven applications with clean architecture
                        and modern technology.
                    </p>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={aboutImage}
                        alt="About Lananuranf"
                        className="w-72 md:w-80 rounded-2xl shadow-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
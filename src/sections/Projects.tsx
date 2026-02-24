import React from "react";

interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    demoUrl: string;
    githubUrl: string;
    demoLabel?: string;
}

const projects: Project[] = [
    {
        title: "Task Management App",
        description:
            "Fullstack task management application with authentication, CRUD features, and secure REST API.",
        tech: ["React", "Node.js", "PostgreSQL", "JWT"],
        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        demoUrl: "#",
        githubUrl: "#",
        demoLabel: "Live Demo",
    },
    {
        title: "Sales Data Dashboard",
        description:
            "Data analysis and visualization project using Python and Tableau to extract business insights.",
        tech: ["Python", "Pandas", "Tableau"],
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        demoUrl: "#",
        githubUrl: "#",
        demoLabel: "View Report",
    },
    {
        title: "Dockerized Web App",
        description:
            "Containerized fullstack web application deployed using Docker and Kubernetes.",
        tech: ["Docker", "Kubernetes", "AWS"],
        image:
            "https://images.unsplash.com/photo-1605745341112-85968b19335b",
        demoUrl: "#",
        githubUrl: "#",
        demoLabel: "Live Demo",
    },
];

const ProjectCard: React.FC<Project> = ({
                                            title,
                                            description,
                                            tech,
                                            image,
                                            demoUrl,
                                            githubUrl,
                                            demoLabel = "Live Demo",
                                        }) => {
    return (
        <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
                src={image}
                alt={title}
                className="h-52 w-full object-cover"
            />

            <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-3">{title}</h3>

                <p className="text-gray-600 mb-4">{description}</p>

                <p className="text-sm font-semibold mb-4 text-gray-800">
                    {tech.join(" • ")}
                </p>

                <div className="flex gap-4">
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg border hover:bg-black hover:text-white transition"
                    >
                        {demoLabel}
                    </a>

                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg border hover:bg-gray-800 hover:text-white transition"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </article>
    );
};

const Projects: React.FC = () => {
    return (
        <section
            id="projects"
            className="min-h-screen px-6 py-24 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-16">Projects</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
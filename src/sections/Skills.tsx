import React from "react";

interface Skill {
    name: string;
    iconClass?: string;
    imageUrl?: string;
}

const skills: Skill[] = [
    { name: "React", iconClass: "devicon-react-original colored" },
    { name: "TypeScript", iconClass: "devicon-typescript-original colored" },
    { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original colored" },
    { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
    { name: "Kubernetes", iconClass: "devicon-kubernetes-plain colored" },
    { name: "SQL (MySQL)", iconClass: "devicon-mysql-plain colored" },
    { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
    { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
    { name: "Python", iconClass: "devicon-python-plain colored" },
    { name: "Pandas", iconClass: "devicon-pandas-original colored" },
    {
        name: "Tableau",
        imageUrl: "https://cdn.simpleicons.org/tableau/E97627",
    },
    { name: "Docker", iconClass: "devicon-docker-plain colored" },
    { name: "Git", iconClass: "devicon-git-plain colored" },
    { name: "GitHub", iconClass: "devicon-github-original" },
    {
        name: "AWS",
        iconClass: "devicon-amazonwebservices-original colored",
    },
    {
        name: "WEKA",
        imageUrl: "https://cdn.simpleicons.org/weka/0099CC",
    },
];

const SkillCard: React.FC<Skill> = ({ name, iconClass, imageUrl }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col items-center justify-center gap-4">
            {iconClass && (
                <i className={`${iconClass} text-6xl`} aria-hidden="true" />
            )}

            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-12 h-12 object-contain"
                />
            )}

            <p className="font-medium text-gray-800">{name}</p>
        </div>
    );
};

const Skills: React.FC = () => {
    return (
        <section
            id="skills"
            className="min-h-screen flex items-center justify-center px-6 py-24 bg-gray-50"
        >
            <div className="max-w-7xl w-full text-center">
                <h2 className="text-4xl font-bold mb-16">Skills</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
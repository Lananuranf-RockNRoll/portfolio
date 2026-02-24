import MainLayout from "./layouts/MainLayout";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

export default function App() {
    return (
        <MainLayout>
            <Home />
            <About />
            <Skills />
            <Projects />
        </MainLayout>
    );
}
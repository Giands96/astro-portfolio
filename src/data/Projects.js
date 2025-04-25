// Archivo: src/data/Projects.js
import portfolioImg from "../components/images/portfolio.webp";
import mernchatImg from "../components/images/mernchat.webp";

export const ProjectsData = {
    description: "Estos son algunos de mis proyectos más recientes donde he aplicado mis conocimientos y habilidades.",
    projects: [
      {
        title: "Portfolio Personal",
        description: "Portfolio personal desarrollado con Astro y Tailwind CSS, mostrando mis proyectos y habilidades.",
        image: portfolioImg,
        technologies: ["Astro", "Tailwind CSS", "JavaScript"],
        liveUrl: "https://axel-astro-portfolio.netlify.app/",
        repoUrl: "https://github.com/Giands96/astro-portfolio",
        
      },
      {
        title: "Aplicación de Mensajería",
        description: "Una App de Mensajeria desarrollado con MERN Stack (MongoDB, Express, React y NodeJS)",
        image: mernchatImg,
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
        liveUrl: "https://mern-chat-2p49.onrender.com",
        repoUrl: "https://github.com/Giands96/mern-chat",
        featured: true,
      },

    ],
    showMoreButton: true,
    moreProjectsUrl: "/all-projects"
  };

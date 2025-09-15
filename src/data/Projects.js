// Archivo: src/data/Projects.js

export const ProjectsData = {
    description: "Estos son algunos de mis proyectos más recientes donde he aplicado mis conocimientos y habilidades.",
    projects: [
      {
        title: "Portfolio Personal",
        description: "Portfolio personal desarrollado con Astro y Tailwind CSS, mostrando mis proyectos y habilidades.",
        image: "/images/portfolio.webp",
        technologies: ["Astro", "Tailwind CSS", "JavaScript"],
        liveUrl: "https://axel-astro-portfolio.netlify.app/",
        repoUrl: "https://github.com/Giands96/astro-portfolio",
        
      },
      {
        title: "Aplicación de Mensajería",
        description: "Chat App desarrollado con el stack MERN, permitiendo a los usuarios registrarse, iniciar sesión y enviar mensajes en tiempo real.",
        image: "/images/mernchat.webp",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
        liveUrl: "https://mern-chat-2p49.onrender.com",
        repoUrl: "https://github.com/Giands96/mern-chat",
        featured: true,
      },
      {
        title: "AD Studio Landing Page",
        description: "Landing page para una agencia de marketing digital, creada con WordPress y Elementor.",
        image: "/images/adstudio.webp",
        technologies: ["WordPress", "Elementor", "PHP", "CSS"],
        liveUrl: "https://adstudiope.site/",
        repoUrl: "Hostgator",
        featured: true,
      }

    ],
    showMoreButton: true,
    moreProjectsUrl: "/all-projects"
  };

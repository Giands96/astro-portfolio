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
        description: "Tienda online con carrito de compras, gestión de usuarios y pasarela de pago.",
        image: "/images/mernchat.webp",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
        liveUrl: "https://mern-chat-2p49.onrender.com",
        repoUrl: "https://github.com/Giands96/mern-chat",
        featured: true,
      },

    ],
    showMoreButton: true,
    moreProjectsUrl: "/all-projects"
  };
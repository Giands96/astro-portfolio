// Archivo: src/data/Projects.js

export const ProjectsData = {
    description: "Estos son algunos de mis proyectos más recientes donde he aplicado mis conocimientos y habilidades.",
    projects: [
      {
        title: "Portfolio Personal",
        description: "Portfolio personal desarrollado con Astro y Tailwind CSS, mostrando mis proyectos y habilidades.",
        image: "/images/projects/portfolio.webp",
        technologies: ["Astro", "Tailwind CSS", "JavaScript"],
        liveUrl: "https://mi-portfolio.com",
        repoUrl: "https://github.com/username/portfolio",
        featured: true
      },
      {
        title: "E-commerce App",
        description: "Tienda online con carrito de compras, gestión de usuarios y pasarela de pago.",
        image: "/images/projects/ecommerce.webp",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        liveUrl: "https://mi-tienda.com",
        repoUrl: "https://github.com/username/ecommerce-app"
      },
      {
        title: "Task Manager",
        description: "Aplicación para gestionar tareas diarias con notificaciones y calendario.",
        image: "/images/projects/task-manager.webp",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
        liveUrl: "https://mi-task-manager.com",
        repoUrl: "https://github.com/username/task-manager"
      }
    ],
    showMoreButton: true,
    moreProjectsUrl: "/all-projects"
  };
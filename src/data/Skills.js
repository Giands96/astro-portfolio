// Skills.js
// Importar todos los iconos SVG
import html5Icon from '../assets/html5.svg';
import css3Icon from '../assets/css3.svg';
import javascriptIcon from '../assets/javascript.svg';
import reactIcon from '../assets/react.svg';
import astroIcon from '../assets/astro.svg';
import tailwindIcon from '../assets/tailwind.svg';
import mysqlIcon from '../assets/mysql.svg';
import mongodbIcon from '../assets/mongodb.svg';
import gitIcon from '../assets/git.svg';
import githubIcon from '../assets/github.svg';

export const SkillsData = {
  title: "Mis Habilidades",
  description: "Estas son las tecnologías y herramientas con las que trabajo.",
  categories: [
    {
      name: "Frontend",
      skills: [
        { name: "HTML5", icon: "html5", iconSrc: html5Icon },
        { name: "CSS3", icon: "css3", iconSrc: css3Icon },
        { name: "JavaScript", icon: "javascript", iconSrc: javascriptIcon },
        { name: "React", icon: "react", iconSrc: reactIcon },
        { name: "Astro", icon: "astro", iconSrc: astroIcon },
        { name: "Tailwind CSS", icon: "tailwindcss", iconSrc: tailwindIcon }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "MySQL", icon: "mysql", iconSrc: mysqlIcon },
        { name: "MongoDB", icon: "mongodb", iconSrc: mongodbIcon }
      ]
    },
    {
      name: "Herramientas",
      skills: [
        { name: "Git", icon: "git", iconSrc: gitIcon },
        { name: "GitHub", icon: "github", iconSrc: githubIcon },
      ]
    }
  ],
  softSkills: [
    "Trabajo en equipo",
    "Comunicación",
    "Resolución de problemas",
    "Atención al detalle",
    "Autodidacta",
    "Gestión del tiempo",
    "Pensamiento crítico",
  ]
};
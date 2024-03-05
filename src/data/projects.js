import ahorcado from '../assets/projects_logos/ahorcado.png'
import che_llueve from '../assets/projects_logos/che_llueve.svg'
import encriptador from '../assets/projects_logos/encriptador.png'
import graphic_design from '../assets/projects_logos/graphic_design.png'
import snake from '../assets/projects_logos/snake.ico'

export const projects = [
  {
    "id": 1,
    "name": {
      "es": "Che! Llueve!",
      "en": "Che! Llueve!"
    },
    "description": {
      "es": "Mi primer gran proyecto hecho con HTML, SASS y Bootstrap. La idea es propia, así como el diseño y el desarrollo del sitio.",
      "en": "My first big project made with HTML, SASS and Bootstrap. The idea is my own, as well as the design and development of the site."
    },
    "logo": che_llueve,
    "url": "https://chellueve.netlify.app/",
    "isDeployed": true
  },
  {
    "id": 2,
    "name": {
      "es": "Portfolio Diseñadora Gráfica y UX/UI",
      "en": "Graphic Designer and UX/UI Portfolio"
    },
    "description": {
      "es": "Proyecto desarrollado con React + VITE. Hice uso de librerias como React Router, Tailwind y Framer Motion.",
      "en": "Project developed with React + VITE. I used libraries like React Router, Tailwind and Framer Motion."
    },
    "logo": graphic_design,
    "url": "https://portfoliosicilia.vercel.app/",
    "isDeployed": true
  },
  {
    "id": 3,
    "name": {
      "es": "Encriptador de texto",
      "en": "Text Encrypter"
    },
    "description": {
      "es": "Proyecto hecho con HTML, CSS Y Javascript. Parte del Bootcamp de Oracle + Alura 'Oracle Next Education'",
      "en": "Project made with HTML, CSS and Javascript. Part of the Oracle + Alura Bootcamp 'Oracle Next Education'."
    },
    "logo": encriptador,
    "url": "https://encriptador-texto-js.netlify.app/",
    "isDeployed": true
  },
  {
    "id": 4,
    "name": {
      "es": "Snake Game - Python",
      "en": "Snake Game - Python"
    },
    "description": {
      "es": "Proyecto personal hecho con Python. Replica simple del clásico juego 'Snake'",
      "en": "Personal project made with Python. Simple replica of the classic 'Snake' game."
    },
    "logo": snake,
    "url": "https://github.com/Mateo-Ozino/Snake-game-python",
    "isDeployed": false
  },
  {
    "id": 5,
    "name": {
      "es": "Juego del ahorcado",
      "en": "Hangman"
    },
    "description": {
      "es": "Proyecto hecho con HTML, SASS Y Javascript. Segundo proyecto perteneciente a Oracle Next Education con mayor dificultad que el anterior.",
      "en": "Project made with HTML, SASS and Javascript. Second project that belongs to Oracle Next Education with higher difficulty than the previous one."
    },
    "logo": ahorcado,
    "url": "https://juego-ahorcado-one.netlify.app/",
    "isDeployed": true
  }
]
import ahorcado from '../assets/projects_logos/ahorcado.png'
import che_llueve from '../assets/projects_logos/che_llueve.svg'
import encriptador from '../assets/projects_logos/encriptador.png'
import graphic_design from '../assets/projects_logos/graphic_design.png'
import snake from '../assets/projects_logos/snake.ico'

export const projects = [
  {
    "id": 1,
    "name": "Che! Llueve!",
    "description": "Mi primer gran proyecto hecho con HTML, SASS y Bootstrap. La idea es propia, así como el diseño y el desarrollo del sitio.",
    "logo": che_llueve,
    "url": "https://chellueve.netlify.app/",
    "isDeployed": true
  },
  {
    "id": 2,
    "name": "Portfolio Diseñadora Gráfica y UX/UI",
    "description": "Proyecto desarrollado con React + VITE. Hice uso de librerias como React Router, Tailwind y Framer Motion.",
    "logo": graphic_design,
    "url": "https://portfoliosicilia.vercel.app/",
    "isDeployed": true
  },
  {
    "id": 3,
    "name": "Encriptador de texto",
    "description": "Proyecto hecho con HTML, CSS Y Javascript. Parte del Bootcamp de Oracle + Alura 'Oracle Next Education'",
    "logo": encriptador,
    "url": "https://encriptador-texto-js.netlify.app/",
    "isDeployed": true
  },
  {
    "id": 4,
    "name": "Snake Game - Python",
    "description": "Proyecto personal hecho con Python. Replica simple del clásico juego 'Snake'",
    "logo": snake,
    "url": "https://github.com/Mateo-Ozino/Snake-game-python",
    "isDeployed": false
  },
  {
    "id": 5,
    "name": "Juego del ahorcado",
    "description": "Proyecto hecho con HTML, SASS Y Javascript. Segundo proyecto perteneciente a Oracle Next Education con mayor dificultad que el anterior.",
    "logo": ahorcado,
    "url": "https://juego-ahorcado-one.netlify.app/",
    "isDeployed": true
  }
]
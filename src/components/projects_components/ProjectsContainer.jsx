import { Project } from "./Project"
import { SectionTitle } from '../general_components/SectionTitle'
import { projects } from "../../data/projects"
import { useRef, useState } from 'react';
import ahorcado from '../../assets/projects_logos/ahorcado.png'
import che_llueve from '../../assets/projects_logos/che_llueve.svg'
import encriptador from '../../assets/projects_logos/encriptador.png'
import graphic_design from '../../assets/projects_logos/graphic_design.png'
import snake from '../../assets/projects_logos/snake.ico'

const logos = [ahorcado, che_llueve, encriptador, graphic_design, snake]

console.log(logos)
export function ProjectsContainer() {
  const logo_url_base = "../../src/assets/projects_logos/"

  const projectsContainerRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (event) => {
    setDragging(true);
    setStartX(event.pageX - projectsContainerRef.current.offsetLeft);
    setScrollLeft(projectsContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!dragging) return;
    const x = event.pageX - projectsContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Ajusta la sensibilidad del desplazamiento
    projectsContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <section className="projects-container" id="projects-container">
      <SectionTitle>Proyectos</SectionTitle>
      <section 
      className="projects-container__project-wraper"
      ref={projectsContainerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      >
        {
          projects.map(project => {
            const { id, name, description, logoName, url, isDeployed } = project

            return (
              <Project 
                key={id} 
                name={name} 
                logoName={`${logo_url_base + logoName}`} 
                url={url} 
                isDeployed={isDeployed}
                >
                {description}
              </Project>
            )
          })
        }
      </section>
    </section>
  )
}
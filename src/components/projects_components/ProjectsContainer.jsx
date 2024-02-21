import { Project } from "./Project"
import { SectionTitle } from '../general_components/SectionTitle'
import { projects } from "../../data/projects"
import { useRef, useState } from 'react';

export function ProjectsContainer() {
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
            const { id, name, description, logo, url, isDeployed } = project

            return (
              <Project 
                key={id} 
                name={name} 
                logo={logo} 
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
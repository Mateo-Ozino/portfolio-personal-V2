import { Project } from "./Project"
import { SectionTitle } from '../general_components/SectionTitle'
import { useRef, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

export function ProjectsContainer() {
  const { t, i18n } = useTranslation()
  const projectsContainerRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [projects, setProjects] = useState()

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://mateoozino-portfolio-api.onrender.com/projects/');
      const result = await response.json();
      setProjects(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
      <SectionTitle>{t('projectsTitle')}</SectionTitle>
      <section 
      className="projects-container__project-wraper"
      ref={projectsContainerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      >
        {
          projects && projects.sort((a, b) => a.order - b.order).map(project => {
            const { id, name, description, logo, url, is_deployed } = project

            return (
              <Project 
                key={id} 
                name={name} 
                logo={logo} 
                url={url} 
                isDeployed={is_deployed}
                >
                {description[i18n.resolvedLanguage]}
              </Project>
            )
          })
        }
      </section>
    </section>
  )
}
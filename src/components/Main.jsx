import { About } from "./About"
import { ProjectsContainer } from "./projects_components/ProjectsContainer"
import { SkillsContainer } from "./skills_components/SkillsContainer"
import { ContactForm } from "./ConctactForm"
import { Banner } from "./Banner"
import { useHandleMenu } from '../store/handleMenu'


export function Main() {
  // Estado de responsive navbar
  const isClosed = useHandleMenu((state) => state.isClosed) //Inicializado en true

  return (
    <main
      id="main" 
      className={ isClosed ? "main" : "main--hidden" } 
      >
      <Banner />
      <About />
      <SkillsContainer />
      <ProjectsContainer />
      <ContactForm />
    </main>
  )
}
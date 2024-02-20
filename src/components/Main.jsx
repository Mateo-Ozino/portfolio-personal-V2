import { About } from "./About"
import { ProjectsContainer } from "./projects_components/ProjectsContainer"
import { SkillsContainer } from "./skills_components/SkillsContainer"
import { ContactForm } from "./ConctactForm"
import { Banner } from "./Banner"

export function Main() {
  return (
    <main className="main" id="main">
      <Banner />
      <About />
      <SkillsContainer />
      <ProjectsContainer />
      <ContactForm />
    </main>
  )
}
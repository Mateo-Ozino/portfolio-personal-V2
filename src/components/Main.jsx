import { About } from "./About"
import { TechContainer } from "./TechContainer"
import { ProjectsContainer } from "./ProjectsContainer"
import { SkillsContainer } from "./SkillsContainer"
import { ContactForm } from "./ConctactForm"
import { Banner } from "./Banner"

export function Main() {
  return (
    <main className="main" id="main">
      <Banner />
      <About />
      <SkillsContainer />
      <TechContainer />
      <ProjectsContainer />
      <ContactForm />
    </main>
  )
}
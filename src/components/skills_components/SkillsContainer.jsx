import { Skill } from "./Skill"
import { skills } from '../../data/skills'
import { TechContainer } from './TechContainer'

export function SkillsContainer() {

  const sortedSkills = skills.sort((a, b) => b.level - a.level) 

  return (
    <section className="skills-techs-wraper" id="skills-tech-wraper">
      <h1>Habilidades</h1>
      <section className="skills-techs-wraper__skill-container">
        {
          sortedSkills.map(skills => {
            const { id, skill, level } = skills

            return (
              <Skill key={id} id={id} skill={skill} level={level}/>
            )
          })
        }
      </section>
      <TechContainer />
    </section>
  )
}
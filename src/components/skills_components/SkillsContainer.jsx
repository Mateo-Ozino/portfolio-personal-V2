import { Skill } from "./Skill"
import { skills } from '../../data/skills'
import { TechContainer } from './TechContainer'
import { useTranslation } from "react-i18next"

export function SkillsContainer() {
  const { t } = useTranslation()

  const sortedSkills = skills.sort((a, b) => b.level - a.level) 

  return (
    <section className="skills-techs-wraper" id="skills-tech-wraper">
      <h1>{t('skillsTitle')}</h1>
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
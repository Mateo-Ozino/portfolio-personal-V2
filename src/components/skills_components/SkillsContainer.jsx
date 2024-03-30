import { Skill } from "./Skill"
import { TechContainer } from './TechContainer'
import { useTranslation } from "react-i18next"
import { useState, useEffect } from 'react'

export function SkillsContainer() {
  const [skills, setSkills] = useState(null)

  const { t } = useTranslation()

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://mateoozino-portfolio-api.onrender.com/skills/');
      const result = await response.json();
      setSkills(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section className="skills-techs-wraper" id="skills-tech-wraper">
      <h1>{t('skillsTitle')}</h1>
      <section className="skills-techs-wraper__skill-container">
        {
          skills && skills.sort((a, b) => b.level - a.level).map(skills => {
            const { id, name, level } = skills
            return (
              <Skill key={id} id={id} skill={name} level={level}/>
            )
          })
        }
      </section>
      <TechContainer />
    </section>
  )
}
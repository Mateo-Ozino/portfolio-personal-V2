import { ProgressBar } from '../general_components/ProgressBar'
import PropTypes from "prop-types";

export function Skill({ id, skill, level }) {
  return (
    <div key={id} className='skills-techs-wraper__skill-container--skill'>
      <h2>{skill}</h2>
      <ProgressBar progress={level} />
      <h2>{`${level}%`}</h2>
    </div>
  )
}

Skill.propTypes = {
  id: PropTypes.string,
  skill: PropTypes.string,
  level: PropTypes.number
};
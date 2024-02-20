import PropTypes from "prop-types";

export function Project({ name, logoName, isDeployed, url, children }) {
  return (
    <div className="projects-container__project">
      <div className="projects-container__project-content">
        <figure>
          <img src={logoName} alt="" />
        </figure>
        <h2>{name}</h2>
        <p>{children}</p>
      </div>
      <div className="projects-container__project-button">
        { 
          isDeployed ? 
          <button><a href={url} target="blank">Ir al sitio</a></button> :
          <button><a href={url} target="blank">Ir al repositorio</a></button>
        }
      </div>
    </div>
  )
}

Project.propTypes = {
  name: PropTypes.string,
  logoName: PropTypes.string,
  isDeployed: PropTypes.bool,
  url: PropTypes.string,
  children: PropTypes.string
};
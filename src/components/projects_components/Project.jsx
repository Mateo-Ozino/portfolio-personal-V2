import PropTypes from "prop-types";

export function Project({ name, logo, isDeployed, url, children }) {
  return (
    <div className="projects-container__project">
      <div className="projects-container__project-content">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <h2>{name}</h2>
        <p>{children}</p>
      </div>
      <div className="projects-container__project-button">
        { 
          isDeployed ? 
          <a href={url} target="blank"><button>Ir al sitio</button></a> :
          <a href={url} target="blank"><button>Ir al repositorio</button></a>
        }
      </div>
    </div>
  )
}

Project.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
  isDeployed: PropTypes.bool,
  url: PropTypes.string,
  children: PropTypes.string
};
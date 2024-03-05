import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export function Project({ name, logo, isDeployed, url, children }) {
  const { t, i18n } = useTranslation()

  return (
    <div className="projects-container__project">
      <div className="projects-container__project-content">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <h2>{name[i18n.resolvedLanguage]}</h2>
        <p>{children}</p>
      </div>
      <div className="projects-container__project-button">
        { 
          isDeployed ? 
          <a href={url} target="blank"><button>{t('goToSite')}</button></a> :
          <a href={url} target="blank"><button>{t('goToRepo')}</button></a>
        }
      </div>
    </div>
  )
}

Project.propTypes = {
  name: PropTypes.object,
  logo: PropTypes.string,
  isDeployed: PropTypes.bool,
  url: PropTypes.string,
  children: PropTypes.string
};
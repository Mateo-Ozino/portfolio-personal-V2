import { IoLogoLinkedin } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa6';
import { Divider } from '../components/general_components/Divider';
import { useHandleMenu } from '../store/handleMenu';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation()

  // Estado de responsive navbar
  const isClosed = useHandleMenu((state) => state.isClosed) //Inicializado en true

  // Estado de success modal

  return (
    <footer 
      id="footer"
      className={isClosed ? "footer" : "footer--hidden"} 
      >
      <h2>{t('footerTitle')}</h2>
      <div className='footer__contact-info'>
        <a href="https://www.linkedin.com/in/mateo-ozino-caligaris/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin /></a>
        <a href="https://github.com/Mateo-Ozino" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="mailto:mateo.ozino.webdev@gmail.com"><FaRegEnvelope /></a>
        <h3>mateo.ozino.webdev@gmail.com</h3>
      </div>
      <Divider color={"#1F2D41"} />
      <h4>{t('credits')}</h4>
    </footer>
  )
}
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa6';
import { Divider } from '../components/general_components/Divider';
import { useHandleMenu } from '../store/handleMenu';

export function Footer() {
  // Estado de responsive navbar
  const isClosed = useHandleMenu((state) => state.isClosed) //Inicializado en true

  // Estado de success modal

  return (
    <footer 
      id="footer"
      className={isClosed ? "footer" : "footer--hidden"} 
      >
      <h2>Mis redes</h2>
      <div className='footer__contact-info'>
        <IoLogoLinkedin />
        <FaGithub />
        <FaRegEnvelope />
        <h3>mateo.ozino.webdev@gmail.com</h3>
      </div>
      <Divider color={"#1F2D41"} />
      <h4>Desarrollado por Mateo Ozino | Todos los derechos reservados © 2024</h4>
    </footer>
  )
}
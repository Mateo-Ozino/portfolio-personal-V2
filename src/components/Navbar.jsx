import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useHandleMenu } from "../store/handleMenu";
import { useEffect, useState } from "react";

export function Navbar() {
  // Estados de la navbar
  const isClosed = useHandleMenu((state) => state.isClosed) //Inicializado en true
  const openMenu = useHandleMenu((state) => state.openMenu)

  const [anchoComponente, setAnchoComponente] = useState(0)

  const handleResize = () => {
    const ancho = document.getElementById('root').offsetWidth
    setAnchoComponente(ancho)
  }

  useEffect(() => {
    // Configuración inicial
    handleResize()

    // Agregar el evento de escucha del cambio de tamaño
    window.addEventListener('resize', handleResize)

    // Limpiar el evento de escucha al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {
        anchoComponente >= 1024 ? (
          <nav className="navbar">
            <ul className="navbar__menu">
              <li><a href="#about">Sobre mí</a></li>
              <li><a href="#skills-tech-wraper">Habilidades</a></li>
              <li><a href="#projects-container">Proyectos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
            {/* <h4>Esp | Eng</h4> */}
          </nav>
        ) : (
          <>
            <nav className={isClosed ? "navbar--collapsed" : "navbar--opened"}>
              <ul className={isClosed ? "navbar__menu--collapsed" : "navbar__menu--opened"}>
                <li onClick={openMenu}><a href="#about">Sobre mí</a></li>
                <li onClick={openMenu}><a href="#skills-tech-wraper">Habilidades</a></li>
                <li onClick={openMenu}><a href="#projects-container">Proyectos</a></li>
                <li onClick={openMenu}><a href="#contact">Contacto</a></li>
              </ul>
            </nav>
            {/* <h4 style={isClosed ? {display: "none"} : {display: "block"}}>Esp | Eng</h4> */}
            {isClosed ? <IoMenu onClick={openMenu}/> : <IoClose onClick={openMenu}/>}
          </>
        )
      }
    </>
  )
}
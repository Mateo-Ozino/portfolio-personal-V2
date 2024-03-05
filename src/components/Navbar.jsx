import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useHandleMenu } from "../store/handleMenu";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'

export function Navbar() {
  const { t, i18n } = useTranslation()

  // Estados de la navbar
  const isClosed = useHandleMenu((state) => state.isClosed) //Inicializado en true
  const openMenu = useHandleMenu((state) => state.openMenu)

  const [anchoComponente, setAnchoComponente] = useState(0)

  const handleResize = () => {
    const ancho = document.getElementById('root').offsetWidth
    setAnchoComponente(ancho)
  }

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)

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
              <li><a href="#about">{t('menu1')}</a></li>
              <li><a href="#skills-tech-wraper">{t('menu2')}</a></li>
              <li><a href="#projects-container">{t('menu3')}</a></li>
              <li><a href="#contact">{t('menu4')}</a></li>
            </ul>
            <div className="navbar__translator">
              <button
                type='submit'
                onClick={() => i18n.changeLanguage('es')} 
                disabled={i18n.resolvedLanguage === 'es'}
                style={i18n.resolvedLanguage === 'es' ? {borderBottom: "solid 3px white", transition: "all 0.06s ease"} : {}}
              >
                Esp
              </button>
              <p>|</p>
              <button
                type='submit'
                onClick={() => i18n.changeLanguage('en')} 
                disabled={i18n.resolvedLanguage === 'en'}
                style={i18n.resolvedLanguage === 'en' ? {borderBottom: "solid 3px white", transition: "all 0.06s ease"} : {}}
              >
                Eng
              </button>
            </div>
          </nav>
        ) : (
          <>
            <nav className={isClosed ? "navbar--collapsed" : "navbar--opened"}>
              <ul className={isClosed ? "navbar__menu--collapsed" : "navbar__menu--opened"}>
                <li onClick={openMenu}><a href="#about">{t('menu1')}</a></li>
                <li onClick={openMenu}><a href="#skills-tech-wraper">{t('menu2')}</a></li>
                <li onClick={openMenu}><a href="#projects-container">{t('menu3')}</a></li>
                <li onClick={openMenu}><a href="#contact">{t('menu4')}</a></li>
              </ul>
            </nav>
            <div 
              className="navbar__translator" 
              style={isClosed ? {display: "none"} : {display: "flex"}}
              >
              <button
                type='submit'
                onClick={() => i18n.changeLanguage('es')} 
                disabled={i18n.resolvedLanguage === 'es'}
                style={i18n.resolvedLanguage === 'es' ? {borderBottom: "solid 3px white", transition: "all 0.06s ease"} : {}}
              >
                Esp
              </button>
              <p>|</p>
              <button
                type='submit'
                onClick={() => i18n.changeLanguage('en')} 
                disabled={i18n.resolvedLanguage === 'en'}
                style={i18n.resolvedLanguage === 'en' ? {borderBottom: "solid 3px white", transition: "all 0.06s ease"} : {}}
              >
                Eng
              </button>
            </div>
            {isClosed ? <IoMenu onClick={openMenu}/> : <IoClose onClick={openMenu}/>}
          </>
        )
      }
    </>
  )
}
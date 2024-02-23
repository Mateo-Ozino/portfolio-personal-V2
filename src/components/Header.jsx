import { Navbar } from './Navbar'
import { useHandleMenu } from '../store/handleMenu'

export function Header() {
  // Estado de responsive navbar
  const isClosed = useHandleMenu((state) => state.isClosed) //Inicializado en true
  // Estado de success modal
  
  return (
    <header
      id="header" 
      className={isClosed ? "header" : "header--full"} 
      //style={isModalShown ? {filter: "brightness(0.7)"} : {}}
      >
      <h1>Portfolio Web</h1>
      <Navbar />
    </header>
  )
}
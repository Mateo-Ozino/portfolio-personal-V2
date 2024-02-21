import { Navbar } from './Navbar'
import { useHandleMenu } from '../store/handleMenu'

export function Header() {
  const isClosed = useHandleMenu((state) => state.isClosed) //Inicializado en true
  
  return (
    <header className={isClosed ? "header" : "header--full"} id="header">
      <h1>Portfolio Web</h1>
      <Navbar />
    </header>
  )
}
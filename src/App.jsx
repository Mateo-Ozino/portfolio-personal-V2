import './css/style.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { useHandleModal } from "./store/handleModal";
import { SuccessModal } from './components/general_components/SuccessModal';

function App() {
  const isShown = useHandleModal((state) => state.isShown)
  const showModal = useHandleModal((state) => state.showModal)

  const handleCloseModal = () => {
    showModal()
    document.body.classList.remove('modal-open')
  }

  return (
    <>
      { isShown ? <SuccessModal closeModal={handleCloseModal} isOpen={isShown} /> : "" }
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App

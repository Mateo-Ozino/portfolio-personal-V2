import success from '../../assets/success.svg'
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";
import { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion"

export function SuccessModal({ closeModal, isOpen }) {
  useEffect(() => {
    const container = document.getElementById('modal-overlay')
    let closeModalByTime
    
    if(isOpen) {
      container.addEventListener('click', closeModal)

      closeModalByTime = setTimeout(() => {
        closeModal()
      }, 4000)  
    }

    return () => {
      container.removeEventListener('click', closeModal)
      clearTimeout(closeModalByTime)
    }
  })

  return (
      <div className='modal-overlay' id='modal-overlay'>
        <AnimatePresence mode='wait'>
          <motion.div 
            className="modal"
            key="modal"
            initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{ duration: 0.4 }}
          >
            <div className="modal__content">
              <h2>¡Su respuesta se ha enviado con éxito!</h2>
              <figure>
                <img src={success} alt="Green check icon denoting success" />
              </figure>
            </div>
            <div className="modal__close-button">
              <IoClose onClick={closeModal} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

  )
}

SuccessModal.propTypes = {
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool
};
import success from '../../assets/success.svg'
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";


export function SuccessModal({ closeModal }) {
  return (
    <div className='modal-overlay'>
      <div className="modal">
        <div className="modal__content">
          <h2>¡Su respuesta se ha enviado con éxito!</h2>
          <figure>
            <img src={success} alt="Green check icon denoting success" />
          </figure>
        </div>
        <div className="modal__close-button">
          <IoClose onClick={closeModal} />
        </div>
      </div>
    </div>
  )
}

SuccessModal.propTypes = {
  closeModal: PropTypes.func,
};
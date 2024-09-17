import Modal from './modal';

const ErrorModal = ({ onClose }) =>
  (
    <Modal closeModal={onClose} customStyles = {{wrapper: 'w-full left-0', modal: 'error w-1/2'}}>
        <div className="error header">
            Something went wrong! Please try again later!
        </div>
    </Modal>
  )

export default ErrorModal;

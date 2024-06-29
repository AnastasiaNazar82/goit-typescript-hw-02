import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, imageUrl, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modalImg}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      bodyOpenClassName={css.modalOpen}
    >
      <img src={imageUrl.url} alt={imageUrl.alt} className={css.img} />
    </Modal>
  );
}

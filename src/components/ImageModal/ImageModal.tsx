import Modal from "react-modal";
import css from "./ImageModal.module.css";
import React from "react";

interface Image {
  url: string;
  alt: string;
}

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: Image;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  onClose,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default ImageModal;

import css from "./ImageCard.module.css";

export default function ImageCard({ urlSmall, alt, urlReg, openModal }) {
  return (
    <div className={css.imgContainer}>
      <img
        className={css.listImage}
        src={urlSmall}
        alt={alt}
        onClick={() => openModal(alt, urlReg)}
      />
    </div>
  );
}

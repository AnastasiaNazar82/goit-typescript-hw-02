import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.containerBtn}>
      <button className={css.btn} type="button" onClick={onClick}>
        Load More
      </button>
    </div>
  );
}

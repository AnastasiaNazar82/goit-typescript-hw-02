import React from "react";
import css from "./LoadMoreBtn.module.css";

type Click = {
  onClick: () => void;
};

const LoadMoreBtn: React.FC<Click> = ({ onClick }) => {
  return (
    <div className={css.containerBtn}>
      <button className={css.btn} type="button" onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;

import React from "react";
import css from "./ErrorMessage.module.css";

const ErrorMessag: React.FC = () => {
  return <p className={css.error}>Sorry, try again later! </p>;
};

export default ErrorMessag;

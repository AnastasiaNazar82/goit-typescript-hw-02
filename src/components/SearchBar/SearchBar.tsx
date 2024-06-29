import { IoIosSearch } from "react-icons/io";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FormEvent } from "react";

interface SearchBartProps {
  onSubmit: (value: string) => void;
}

export default function SearchBart({ onSubmit }: SearchBartProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    const value = target.search.value.trim();

    if (!value) {
      return toast.error("This input can't be empty!", {
        duration: 5000,
        position: "top-right",
      });
    }
    onSubmit(value);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          placeholder="Search images and photos"
          name="search"
          autoFocus
        />
        <button className={css.button} type="submit">
          <IoIosSearch />
        </button>
      </form>
    </header>
  );
}

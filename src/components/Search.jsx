import { useSearchParams } from "react-router-dom";

import styles from "./Search.module.scss";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("name");

  const inputChangeHandler = (event) => {
    if (event.target.value.trim() === "") {
      setSearchParams();
    } else {
      setSearchParams(`name=${event.target.value}`);
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Filter by name..."
        onChange={inputChangeHandler}
        value={searchValue || ""}
      />
    </div>
  );
};

export default Search;

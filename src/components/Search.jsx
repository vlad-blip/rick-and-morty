import { useState } from "react";

import styles from "./Search.module.scss";

const Search = () => {
  const [value, setValue] = useState("");

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Filter by name..."
        onChange={inputChangeHandler}
        value={value}
      />
    </div>
  );
};

export default Search;

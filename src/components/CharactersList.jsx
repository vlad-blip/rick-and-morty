import { useState, useEffect } from "react";

import Character from "./Character";

import styles from "./CharactersList.module.scss";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    setCharacters(data.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return characters.length != 0 ? (
    <ul className={styles.character_list}>
      {characters.map((character) => {
        return (
          <li key={character.id}>
            <Character
              name={character.name}
              image={character.image}
              species={character.species}
              id={character.id}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <h1>Loading...</h1>
  );
};

export default CharactersList;

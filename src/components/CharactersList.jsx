import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Character from "./Character";

import styles from "./CharactersList.module.scss";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchParams] = useSearchParams();

  const searchInput = searchParams.get("name") || "";

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    setCharacters(data.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const filteredCharacters =
    characters.length != 0 &&
    characters
      .filter((character) =>
        character.name.toLowerCase().includes(searchInput.toLowerCase())
      )
      .sort((a, b) => (a.name < b.name ? -1 : 1));

  return characters.length != 0 ? (
    <ul className={styles.character_list}>
      {filteredCharacters.map((character) => {
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

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Container from "../layout/Container";
import ButtonBack from "../components/ButtonBack";

import styles from "./DetailsPage.module.scss";

const DetailsPage = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState({});

  const fetchCharacter = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    const data = await response.json();

    setCharacter(data);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return character.name ? (
    <Container>
      <main className={styles.main}>
        <section className={styles.section}>
          <ButtonBack className={styles.button_back} />
          <img
            className={styles.img}
            src={character.image}
            alt="character image"
          />
          <h1 className={styles.heading}>{character.name}</h1>
          <div className={styles.info}>
            <h2 className={styles.info_heading}>Informations</h2>
            <ul className={styles.info_list}>
              <li className={styles.list_item}>
                <h3 className={styles.item_heading}>Gender</h3>
                <p className={styles.item_secondary}>{character.gender}</p>
              </li>
              <li className={styles.list_item}>
                <h3 className={styles.item_heading}>Status</h3>
                <p className={styles.item_secondary}>{character.status}</p>
              </li>
              <li className={styles.list_item}>
                <h3 className={styles.item_heading}>Species</h3>
                <p className={styles.item_secondary}>{character.species}</p>
              </li>
              <li className={styles.list_item}>
                <h3 className={styles.item_heading}>Origin</h3>
                <p className={styles.item_secondary}>{character.origin.name}</p>
              </li>
              <li className={styles.list_item}>
                <h3 className={styles.item_heading}>Type</h3>
                <p className={styles.item_secondary}>
                  {character.type === "" ? "Unknown" : character.type}
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Container>
  ) : (
    <h1>Loading</h1>
  );
};

export default DetailsPage;

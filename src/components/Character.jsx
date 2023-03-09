import { useNavigate } from "react-router-dom";
import styles from "./Character.module.scss";

const Character = ({ image, name, species, id }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/character/${id}`);
  };

  return (
    <div className={styles.container} onClick={clickHandler}>
      <img className={styles.img} src={image} />
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{species}</p>
      </div>
    </div>
  );
};

export default Character;

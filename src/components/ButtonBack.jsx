import { useNavigate } from "react-router-dom";

import { ReactComponent as Arrow } from "../assets/arrow_back.svg";

import styles from "./ButtonBack.module.scss";

const ButtonBack = ({ className }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };

  return (
    <button className={`${styles.button} ${className}`} onClick={clickHandler}>
      <Arrow /> Go back
    </button>
  );
};

export default ButtonBack;

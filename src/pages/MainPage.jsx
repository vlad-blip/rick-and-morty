import CharactersList from "../components/CharactersList";
import Search from "../components/Search";
import Container from "../layout/Container";
import Login from "../components/Login";

import Logo from "../assets/Logo.svg";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <Container>
      <main className={styles.main}>
        <Login />
        <img className={styles.logo} src={Logo} alt="Rick and morty logo" />
        <Search />
        <CharactersList />
      </main>
    </Container>
  );
};

export default MainPage;

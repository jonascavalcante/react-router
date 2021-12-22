import styles from "./styles.module.css";

import { Menu, NavigateHeader } from "..";

const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
      <NavigateHeader />
    </header>
  )
}

export default Header;
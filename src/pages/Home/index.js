import { Header } from "../../components";

import styles from "./styles.module.css";

const Home = () => {
  return (
    <section>
      <Header />
      <div className={styles.container}>
        <h1>Home</h1>
      </div>
    </section>
  )
}

export default Home;
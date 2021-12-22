import { Header } from "../../components";

import styles from "./styles.module.css";

const About = () => {
  return (
    <section>
      <Header />
      <div className={styles.container}>
        <h1>About</h1>
      </div>
    </section>
  )
}

export default About;
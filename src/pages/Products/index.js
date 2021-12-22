import { Header } from "../../components";

import styles from "./styles.module.css";

const Products = () => {
  return (
    <section>
      <Header />
      <div className={styles.container}>
        <h1>Products</h1>
      </div>
    </section>
  )
}

export default Products;
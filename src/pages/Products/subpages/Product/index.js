import { useParams } from "react-router-dom";

import styles from "./styles.module.css";

import { Header } from "../../../../components";

const Product = () => {

  const paramns = useParams();

  return (
    <section>
      <Header />
      <div className={styles.container}>
        <h2>Product{paramns.id}</h2>
      </div>
    </section>
  )
}

export default Product;
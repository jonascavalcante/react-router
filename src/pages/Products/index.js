import { Link } from "react-router-dom";

import { Header } from "../../components";

import styles from "./styles.module.css";

const Products = () => {
  return (
    <section>
      <Header />
      <div className={styles.container}>

        <h1>Products</h1>

        <nav className={styles.nav}>
          <ul>
            <li><Link to='/Products/1'>Product1</Link></li>
            <li><Link to='/Products/2'>Product2</Link></li>
          </ul>
        </nav>

      </div>
    </section>
  )
}

export default Products;
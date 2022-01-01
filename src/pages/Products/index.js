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
            <li><Link to='/Products/1?color=red'>Product 1 red</Link></li>
            <li><Link to='/Products/1?color=green'>Product 1 green</Link></li>
            <li><Link to='/Products/1?color=blue'>Product 1 blue</Link></li>
          </ul>

          <ul>
            <li><Link to='/Products/2?color=red'>Product 2 red</Link></li>
            <li><Link to='/Products/2?color=green'>Product 2 green</Link></li>
            <li><Link to='/Products/2?color=blue'>Product 2 blue</Link></li>
          </ul>

        </nav>

      </div>
    </section>
  )
}

export default Products;
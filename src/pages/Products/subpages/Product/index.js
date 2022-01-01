import { useParams, useSearchParams } from "react-router-dom";

import styles from "./styles.module.css";

import { Header } from "../../../../components";

const Product = () => {

  const paramns = useParams();
  const [searchParamns, setSearchParamns] = useSearchParams();

  let color = searchParamns.get('color');

  const handleSearchParams = (color) => {
    searchParamns.set('color', color);
    setSearchParamns(searchParamns);
  }

  return (
    <section>
      <Header />
      <div className={styles.container}>

        <nav>
          <ul>
            <li><button onClick={() => handleSearchParams('red')}>Red</button></li>
            <li><button onClick={() => handleSearchParams('green')}>Green</button></li>
            <li><button onClick={() => handleSearchParams('blue')}>Blue</button></li>
          </ul>
        </nav>

        <h2 style={{ color: `${color}` }}>
          Product: {paramns.id}
          <br />
          Color: {color}
        </h2>

      </div>
    </section>
  )
}

export default Product;
import { useParams } from "react-router-dom";

import { Menu, NavigateHeader } from "../../../../components";

const Product = () => {

  const paramns = useParams();

  return (
    <section>
      <Menu />
      <NavigateHeader />
      <h2>Product{paramns.id}</h2>
    </section>
  )
}

export default Product;
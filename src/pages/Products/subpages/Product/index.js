import { useNavigate, useParams } from "react-router-dom";

import { Menu } from "../../../../components";

const Product = () => {

  const paramns = useParams();
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    switch (page) {
      case 'back':
        navigate(-1)
        break;

      case 'home':
        navigate('/')
        break;

      default:
        break;
    }
  }

  return (
    <section>
      <Menu />
      <h2>Product{paramns.id}</h2>
      <button onClick={() => handleNavigate('back')}>Back</button>
      <button onClick={() => handleNavigate('home')}>Home</button>
    </section>
  )
}

export default Product;
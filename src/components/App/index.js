import { Route, Routes } from "react-router-dom";

import { About, Home, NotFound, Products } from "../../pages";
import { Product } from "../../pages/Products/subpages";
import RequireAuth from "../RequireAuth";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<Product />} />

      <Route path='/profile' element={<RequireAuth>Profile</RequireAuth>} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

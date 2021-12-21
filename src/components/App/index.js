import { Route, Routes } from "react-router-dom";
import { About, Home, Products } from "../../pages";
import { Products1, Products2 } from "../../pages/Products/subpages";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/1' element={<Products1 />} />
      <Route path='/products/2' element={<Products2 />} />
    </Routes>
  );
}

export default App;

import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Products'>Products</Link></li>
        <li><Link to='/Products/1'>Product1</Link></li>
        <li><Link to='/Products/2'>Product2</Link></li>
      </ul>
    </nav>
  )
}

export default Menu;
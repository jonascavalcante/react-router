import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

const NavigateHeader = () => {

  const navigate = useNavigate();

  const handleNavigate = (page) => {
    switch (page) {
      case 'back':
        navigate(-1)
        break;

      case 'home':
        navigate('/')
        break;

      case 'next':
        navigate(+1)
        break;

      default:
        break;
    }
  }

  return (
    <div className={styles.navigate}>
      <button onClick={() => handleNavigate('back')}>Back</button>
      <button onClick={() => handleNavigate('home')}>Home</button>
      <button onClick={() => handleNavigate('next')}>Next</button>
    </div>
  )
}

export default NavigateHeader;
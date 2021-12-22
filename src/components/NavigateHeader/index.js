import { useNavigate } from "react-router-dom";

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
    <>
      <button onClick={() => handleNavigate('back')}>Back</button>
      <button onClick={() => handleNavigate('home')}>Home</button>
      <button onClick={() => handleNavigate('next')}>Next</button>
    </>
  )
}

export default NavigateHeader;
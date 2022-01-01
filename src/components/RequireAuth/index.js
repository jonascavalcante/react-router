import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {

  const isAuth = false;

  if (!isAuth) {
    return <Navigate to='/' />;
  }

  return children;
}

export default RequireAuth;
import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Pages/Loading';

const PrivateRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const {pathname}=useLocation()
  if (loading) {
   return <Loading></Loading>
 }
  if (user && user?.email) {
    return children
  }
  return <Navigate state={pathname} to={"/auth/login"}></Navigate>
};

export default PrivateRout;
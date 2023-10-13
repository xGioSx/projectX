import { useLocation, Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const RequireAuth = () => {
  const {isLoggedIn} = useSelector((state) => state.signin)
    const location = useLocation()
  return (
    isLoggedIn
        ? <Outlet/>
        : <Navigate to={"/signup"} state={{from: location}} replace/>
        );
      }
export default RequireAuth
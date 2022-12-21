import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../App'
import { Navigate, Outlet} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const [user] = useContext(UserContext);
    const location = useLocation();
    const isAuthenticated = user && user.isSignedIn;
    console.log(location);
    return  isAuthenticated? <Outlet />: <Navigate to='login' replace={true} state={{from: location}}/>
}

export default PrivateRoute
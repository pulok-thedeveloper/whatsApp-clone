/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import Landing from "../pages/Landing/Landing";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    console.log(user)

    if(loading){
        return (
          <div className="h-screen w-screen grid place-items-center">
            <p className="text-center">loading...</p>
          </div>
        );
    }

    if(user){
        return children
    }
    

    return (
        <Landing></Landing>
    );
};

export default PrivateRoute;
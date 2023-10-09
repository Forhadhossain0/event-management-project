/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";

const Privetroute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    // console.log(location)
    if(loading){
        return <div>  <h2>wait!! a second. . . . </h2>  <span className="loading loading-spinner text-info loading-xl "></span> </div>
    }
    if(user){ return children;  }
  
    return  <Navigate state={location?.pathname} to={'/login'}></Navigate>

      
};



export default Privetroute;


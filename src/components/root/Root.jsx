import { Outlet } from "react-router-dom";
import Navbar from "../elements/Navbar";
import Footer from "../elements/Footer";

import { useContext } from "react";
import { AuthContext } from '../authprovider/AuthProvider';


const Root = () => {
const {loading} = useContext(AuthContext);

if(loading){
    return <div>  <span className="loading loading-spinner text-info loading-xl mt-40 "></span>  <h2 className='text-xl  text-teal-700'>!!Wait a sec data is Loading . . . . </h2>  </div>
}

    return (
        <div>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
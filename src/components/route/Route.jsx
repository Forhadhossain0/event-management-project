import {  createBrowserRouter } from "react-router-dom";
import Home from "../elements/Home";
import Login from "../elements/Login";
import Details from "../elements/Details";
import Register from "../elements/Register";
import Root from "../root/Root";
import Services from "../elements/Services";
import Gallary from "../elements/Gallary";
import About from "../elements/About";
import Privetroute from "../privetroute/Privetroute";
import Errorpage from "../elements/Errorpage";
import Premium from "../elements/Premium";



const Route = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          errorElement: <Errorpage></Errorpage>,
          children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
              path:'/about',
              element: <About></About>
            },
            {
              path:'/services',
              element: <Privetroute><Services></Services></Privetroute>
            },
            {
              path:'/premium',
              element: <Premium></Premium>
            },
            {
              path:'/gallary',
              element: <Gallary></Gallary>
            },
            {
              path:'/login',
              element: <Login></Login>
            },
            {
              path:'/register',
              element: <Register></Register>
            },
            {
              path:'/details/:id',
              element: <Privetroute><Details> </Details> </Privetroute> 
            }
            
          ]
        },
      ]);
    

export default Route;
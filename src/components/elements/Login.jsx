import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GoogleAuthProvider,GithubAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";



const Login = () => {

  const {logIn} = useContext(AuthContext);
  const [message,setMessage] = useState('')
  const location = useLocation();
  const returnHome = useNavigate()

  const handleToSubmit = (e) =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password')
    console.log(email,password)
    setMessage('')

    logIn(email,password)
    .then(() => {
      e.target.reset();
      toast(<><p>You login succesfull!</p> <p> please wait a sec... </p></>);
      setTimeout(() => { returnHome(location?.state ? location.state : '/');
      }, 5000); 
    })
    .catch((error)=>{
      console.log(error.message,'login uncomplete');
      setMessage(<>{error.message} !invalid data</>)

    })

  }


const googleProvider = new GoogleAuthProvider();
const handleGoogleSingIn = () =>{
      signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result.user)
        toast(<><p>You login succesfull!</p> <p> please wait a sec... </p></>);
        setTimeout(() => { returnHome(location?.state ? location.state : '/');
        }, 5000); 
      })
      .catch(error => console.log(error.message))

}
const githubProvider = new GithubAuthProvider();
const handleGithubSingIn = () =>{
  signInWithPopup(auth, githubProvider)
  .then(result => {
    console.log(result.user)
    toast(<><p>You login succesfull!</p> <p> please wait a sec... </p></>);
    setTimeout(() => { returnHome(location?.state ? location.state : '/');
    }, 5000); 
  })
  .catch(error => console.log(error.message))

}

  

  return (
    <div className="my-10 mx-auto flex">
      <ToastContainer className=' md:mr-[31rem] ' />

      <div className="card bg-slate-50 shadow-slate-600 shadow-lg w-full px-2 md:w-[530px]  rounded-none mx-auto  ">
        <h2 className="text-3xl font-bold mt-8 mb-3">Login your account</h2>
        <form onSubmit={handleToSubmit} className="card-body items-center  ">
        <p className="text-red-600">{message}</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#403F3F] font-semibold">
                Email
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="enter your email address"
              className="input bg-[#0a0a0a10]  rounded-none w-80"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#403F3F] font-semibold">
                Password
              </span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="enter your password"
              className="input  bg-[#0a0a0a10] rounded-none w-80"
              required
            />
      
          </div>
          <div className="form-control mt-3">
            <button className="btn btn-primary border-none text-white bg-[#403F3F] rounded-none w-80">
              Login
            </button>
          </div>
          <p href="" className="text-sm pt-4"> {" "}  don`t have any account ?
          <Link to="/register" className="text-red-500">  please register</Link>
          </p>
        </form>

        <div className=" pb-4 ">
         <button onClick={handleGoogleSingIn} className="border-2 mb-3 justify-center w-80  mx-auto   font-bold border-black md:p-4 p-2 flex items-center">               <FcGoogle className="text-2xl mr-3"> </FcGoogle> Continue with Google</button>
         <button onClick={handleGithubSingIn} className="border-2  justify-center  w-80  mx-auto  font-bold border-black md:p-4 p-2 flex items-center"> <FaGithub className="text-2xl mr-3"> </FaGithub> Continue with Github</button>
        </div>


      </div>
    </div>
  );
};

export default Login;



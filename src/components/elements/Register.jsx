import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {


  const {createUser} = useContext(AuthContext);
  const [message,setMessage] = useState('')
  const [errorMessage,setErrorMessage] = useState()
  const navigate = useNavigate()

  const handleToSubmit = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name,email,password)
    setMessage('');
    setErrorMessage('');
    
    if(password.length < 6){
      setErrorMessage('your password have to 6 charecters or longer!!')
      return;
    }

    else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password)){
      setErrorMessage('paswword must have at least one uppercase,lowercase,specialchar and number')
      return;
    }

    createUser(email,password)
    .then((result) => {
      setMessage('Your registration succesfully complete')
      console.log(result.user)
      e.target.reset()

      toast(<><p>You login succesfull!</p> <p> please wait a sec... </p></>);
      setTimeout(() => { navigate('/');
      }, 5000); 
      
    })

    .catch(error => {
      setMessage(<>{ error.message} !Please provide valid data...</>)
      console.log(error.message ,' !Please provide valid data')
    })


  }


    return (
        <div className="my-20 ">
      <ToastContainer className=' md:mr-[31rem]' />

          {/* <ToastContainer></ToastContainer> */}
             <div className="card   rounded-none mx-auto w-full px-2 md:w-[530px]  shadow-slate-600 shadow-lg ">
        <h2 className="text-3xl font-bold mt-8 mb-3">Register your account</h2>
    <form onSubmit={handleToSubmit} className="card-body items-center  ">
      <p className="text-green-600">{message}</p>
    <div className="form-control">
        <label className="label">
          <span className="label-text text-[#403F3F] font-semibold">Name</span>
        </label>
        <input name="name" type="text" placeholder="enter your name"  className="input bg-[#25252518] rounded-none w-80" required />
      </div>

   
      <div className="form-control">
        <label className="label">
          <span className="label-text text-[#403F3F] font-semibold">Email</span>
        </label>
        <input name="email" type="email" placeholder="enter your email address"  className="input bg-[#25252518]  rounded-none w-80" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-[#403F3F] font-semibold">Password</span>
        </label>
        <input name="password" type="password" placeholder="enter your password" className="input  bg-[#25252518] rounded-none w-80" required />
    
      </div>
        <p className="text-red-600 py-1 ">{errorMessage}</p>
      <div className="form-control mt-3">
        <button className="btn btn-primary hover:bg-sky-400 text-white border-none  rounded-none w-80">Register</button>
      </div>
      <p href="" className="text-sm pb-10"> Already have an account ? <Link to='/login' className="text-red-500">please  Login</Link> </p>
    </form>
  </div>
        </div>
    );
};

export default Register;
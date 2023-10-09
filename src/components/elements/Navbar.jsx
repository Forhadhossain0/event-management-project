import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../authprovider/AuthProvider';
import auth from '../firebase/firebase.config';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);
  const handleToSingOut = () =>{
    logOut(auth)
    .then(()=>console.log('user loged out'))
    .catch(() => console.log('some trubole here'))
  }


    const links = <>
      <NavLink    className=' font-medium  ' to={'/'}>          <li className='mx-8 text-lg'> Home     </li></NavLink>
      <NavLink    className=' font-medium  ' to={'/gallary'}>   <li className='mx-8 text-lg'> Blog  </li></NavLink>
      <NavLink    className=' font-medium  ' to={'/services'}> <li className='mx-8 text-lg'> Services </li></NavLink>
     { user && <>
      <NavLink    className=' font-medium  ' to={'/premium'}>  <li className='mx-8 text-lg'> Premium </li></NavLink>
      </>
     }
      <NavLink    className=' font-medium  ' to={'/about'}>     <li className='mx-8 text-lg'> FAQ   </li></NavLink>
    </>


  return (
    
    <main className=' w-full  '>
    <div className='relative '>
     <div  className="navbar  h-0  " >
       <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden">
            <svg  xmlns="http://www.w3.org/2000/svg"  className="h-7 w-7 text-black"  fill="none"    viewBox="0 0 24 24"  stroke="currentColor"   > <path  strokeLinecap="round"   strokeLinejoin="round"  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content absolute z-20 text-white  text-left space-y-10   bg-[rgba(0,0,0,0.74)]  w-72 mt-4 py-10"   >
          {links}
          </ul>
        </div>
         <h1 className='text-[36px] hidden md:flex text-black font-bold items-center '> <AiOutlinePlusCircle className='text-[#30b3ff] items-center'></AiOutlinePlusCircle> <span className='text-[#e41d3ef6]'>Li</span><span className='text-[#60ff75]'>fe</span>lab</h1>
      </div>
      <div className="navbar-start hidden lg:flex w-full  ">
        <ul className="menu menu-horizontal items-center  w-full mx-auto ">
        {links}
        </ul>
      </div>
      <div className="navbar-end">
      
      {
        user && user ? <> 
                          <p className='text-green-800 w-32 overflow-hidden md:flex hidden font-semibold'>{user.email ? user.email :  user.displayName}..</p>
                          <img className='w-[50px] rounded-full border-2 mx-2 h-[50px] transition-all.3s' src="https://as1.ftcdn.net/v2/jpg/02/44/48/92/1000_F_244489260_9ykFMvZVP14nN232r1iP7rxhxkcP7we6.jpg" alt="" />
                          <Link to={'/'} onClick={handleToSingOut}> <button className=' btn-primary w-20 h-[40px] text-white font-semibold hover:shadow hover:bg-gray-200 hover:text-black' >Sing Out </button></Link>
                       </>

                      : <Link to={'/login'}> <button className=' py-2 px-6  font-semibold shadow-2xl hover:bg-white hover:text-black  bg-black text-white border-black transition-all border-2 ' > Login</button></Link>  
      }

      </div>

   </div>
   </div>
    </main>

  );
};

export default Navbar;

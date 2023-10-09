import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaUserDoctor} from 'react-icons/fa6';

const Premium = () => {

        const handleMoreBtnClick = () => {
            toast("!sorry we our others dertment data is not ready." );
        }

        const handleCardClick = () => {
          toast("!! You need to get our premium membership 💳 . . . " );
      }

    return (
        <div>
      <ToastContainer className=' md:mr-[36rem]' />

<div className="maincard relative my-10  h-[300px] w-full bg-center  bg-cover bg-no-repeat bg-[url(https://img.freepik.com/free-photo/happy-senior-man-handshaking-with-female-doctor-while-talking-lobby-clinic_637285-460.jpg?w=826&t=st=1696769724~exp=1696770324~hmac=83c426fd1dd7777618baf82055e3b84cdab0243b62fa3a492596041617498e5c)]">
  <div className="overl w-full h-full bottom-0  pt-32 left-0 z-10 bg-[rgba(75,121,240,0.85)] absolute">
    <h1 className="text-4xl text-left text-white ml-10 font-bold">Our Best Departments and Total Specialist</h1>
  </div>
</div>          
            
        <div className='text-left mt-16 px-2 md:ml-[5rem]'>
          <h1 className=' font-bold text-3xl mb-2 text-blue-600'>Departments</h1>
            <p className=" text-left text-teal-300 pt-3 w-96">Now You can get a personal apponment in our premium services to any Specialist. . .</p>
            <p className='border border-blue-700 mt-2   w-[40px]'></p>
        </div>

<div className="row mx-auto text-center justify-center flex">
<div className="grid  md:grid-cols-4   my-10 gap-8  text-center">

    
<>        

<div onClick={handleCardClick} className="cardd bg-[#F8F8F8] text-black  hover:shadow-teal-200  transition-all mx-2 shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye1.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Eye Care</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 4 Specialist Docotrs</p>
</div>
</div> 

<div     onClick={handleCardClick}       className="cardd bg-[#F8F8F8] text-black hover:shadow-teal-200  transition-all  mx-2  shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye2.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Dental Care</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 5 Specialist Docotrs</p>
</div>
</div>

<div     onClick={handleCardClick}      className="cardd bg-[#F8F8F8] text-black  hover:shadow-teal-200  transition-all  mx-2  shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye3.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Primary Care</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 3 Specialist Docotrs</p>
</div>
</div>

<div onClick={handleCardClick}  className="cardd bg-[#F8F8F8] text-black hover:shadow-teal-200  transition-all mx-2  shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye4.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Medicine</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 7 Specialist Docotrs</p>
</div>
</div>

<div  onClick={handleCardClick}    className="cardd bg-[#F8F8F8] text-black hover:shadow-teal-200  transition-all  mx-2  shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye5.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Orthopedic</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 1 Specialist Docotrs</p>
</div>
</div>

<div onClick={handleCardClick} className="cardd bg-[#F8F8F8] text-black hover:shadow-teal-200  transition-all mx-2 shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye6.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Cardiology</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 9 Specialist Docotrs</p>
</div>
</div>

<div onClick={handleCardClick}  className="cardd bg-[#F8F8F8] text-black  hover:shadow-teal-200  transition-all mx-2 shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye7.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Medicine</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 3 Specialist Docotrs</p>
</div>
</div>

<div onClick={handleCardClick} className="cardd bg-[#F8F8F8] text-black hover:shadow-teal-200  transition-all mx-2 shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye8.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Eye Care</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 2 Specialist Docotrs</p>
</div>
</div>  


<div onClick={handleCardClick} className="cardd bg-[#F8F8F8] text-black hover:shadow-teal-200  transition-all  mx-2 shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye5.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Dental Care</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 6 Specialist Docotrs</p>
</div>
</div>


<div onClick={handleCardClick} className="cardd bg-[#F8F8F8] text-black hover:shadow-teal-200  transition-all mx-2 shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye10.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Gynecology</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 7 Specialist Docotrs</p>
</div>
</div>

<div onClick={handleCardClick} className="cardd bg-[#F8F8F8] text-black hover:shadow-teal-200  transition-all mx-2 shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye11.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Hepatology</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 5 Specialist Docotrs</p>
</div>
</div>

<div onClick={handleCardClick} className="cardd bg-[#F8F8F8] text-black mx-2 hover:shadow-teal-200  transition-all shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye12.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Neurology</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 4 Specialist Docotrs</p>
</div>
</div>



<div onClick={handleCardClick} className="cardd bg-[#F8F8F8] text-black hover:shadow-teal-200  transition-all mx-2  shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye13.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Orthopedic</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 8 Specialist Docotrs</p>
</div>
</div>

<div onClick={handleCardClick} className="cardd bg-[#F8F8F8] hover:shadow-teal-200  transition-all text-black  mx-2 shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye14.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Cardiology</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 2 Specialist Docotrs</p>
</div>
</div>

<div onClick={handleCardClick} className="cardd bg-[#F8F8F8] text-black hover:shadow-teal-200  transition-all  mx-2 shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye15.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Medicine</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 4 Specialist Docotrs</p>
</div>
</div>

<div onClick={handleCardClick} className="cardd bg-[#F8F8F8] text-black  hover:shadow-teal-200  transition-all mx-2 shadow-2xl w-[300px] h-[300px]">
<div className="">
<img className="w-[100%] h-[200px]  mx-auto" src="/images/eye16.jpg" alt="" />
<h1 className="font-bold text-xl pt-1 ">Eye Care</h1>
<p className=" flex mx-auto items-center justify-center  "> <FaUserDoctor className='text-primary mx-2'></FaUserDoctor> 7 Specialist Docotrs</p>
</div>
</div>  


</>


</div>
</div>
 <button className='p-5 font-bold border-2 border-black hover:bg-black hover:text-white transition-all  mx-auto mb-10' onClick={handleMoreBtnClick}>More depertments</button>
    
</div>
    );
};

export default Premium;


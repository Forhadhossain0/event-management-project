// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import   '../../index.css'
import {  useEffect, useState } from 'react';

const Home = () => {



    const [user,setUser] = useState();

    useEffect(()=>{
        fetch('/alldata.json')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

// console.log(user)




    return (
      
     <div  >

        <div className="hero heromain flex-grow min-h-screen ">
        <div className="items-center my-auto flex hero-contentmain text-center ">
          <div className="  ">
            <h1 className="text-3xl md:text-7xl text-white font-bold">Hello there</h1>
            <p className="py-6 md:w-[70%] text-slate-100 md:leading-9  mx-auto md:text-xl font-semibold">Wellness and health are vital for a fulfilling life. It involves physical fitness, mental well-being, social connections, intellectual stimulation, spiritual alignment, and environmental consciousness. Balancing these aspects leads to a healthier and happier you. prioritizing wellness is an investment in your future happiness and longevity.</p>
            <button className="btn bg-rose-500 hover:text-black hover:shadow-2xl text-white border-none shadow-">Get Started</button>
          </div>
        </div>
      </div>


      {/* services part start */}

      <div id='service' className="my-10 mx-auto ">
        <div>
            <h1 className="text-4xl font-bold py-5">Lifelab <span className="text-teal-300">Services</span></h1>
            <p className="mx-auto px-5 md:px-0   md:w-[50%]">Environmental wellness entails taking care of the world around you. This includes efforts to reduce your ecological footprint, such as conserving resources, recycling, and supporting sustainable practices that benefit both your health and the planet.</p>
            <p className="border-b-2 w-[50px] my-5 mx-auto font-bold border-rose-500"></p>
        </div>   
        <div className="row mx-auto  text-center justify-center flex">
        <div className="grid md:grid-cols-3 flex-wrap  my-10 gap-14 md:gap-x-20 md:gap-y-28 text-center">

    {user && user.map((user)=> (
     <div key={user.id} className=" shadow-[rgba(13,_38,_76,_0.19)_0px_7px_12px]  hover:shadow-teal-500 shadow-gray-400 w-[300px] h-[350px] ">
        <div className="px-10 py-5 spiner">
        <img className="w-[80px] h-[80px] my-7 mx-auto" src={user.logoimg} alt="" /> 
        <p className='font-semibold text-green-600'>$ {user.price}/month</p>
        <h1 className="font-bold py-3 text-slate-600">{user.name}</h1>
        <p className=" leading-8 text-slate-600 font-semibold text-sm">{user.shortdescription}</p>
        <Link to={`/details/${user.id}`}><button className='btn text-white bg-slate-900 grow hover:text-black border-none w-full  hover:bg-teal-300 '>Get Now &rarr; </button></Link>
        </div>
     </div>

  ))}

</div> 
</div>
</div>

      {/* services part end */}



       {/* our doctors part start */}

       <div className="my-10 bg-black text-white mx-auto">
        <div>
            <h1 className="text-4xl font-bold py-5"><span className='text-[#33ff3d]' >L</span>ifelab <span className="text-teal-300">Doctors</span></h1>
            <p className="mx-auto px-5 md:w-[55%]">Environmental wellness entails taking care of the world around you. This includes efforts to reduce your ecological footprint, such as conserving resources, recycling, and supporting sustainable practices that benefit both your health and the planet..</p>
                <p className="border-b-2 w-[50px] my-5 mx-auto font-bold border-rose-500"></p>
            
        </div>        
        
     <div className="row mx-auto text-center justify-center flex">
     <div className="grid md:grid-cols-4 flex-wrap   my-10 gap-8  text-center">


    <div className=" bg-[#F8F8F8] w-[280px] h-[350px]">
        <div className="">
        <img className="w-[100%] h-[100%]  mx-auto" src="https://www.shmai.com/preview/imeddoc-html/image/custom/teams4.jpg" alt="" />
        <h1 className="font-bold text-xl text-slate-600">Dr. Michael Liam</h1>
        <p className="   text-rose-500">Chief Doctor</p>
        </div>
    </div>

    <div className=" bg-[#F8F8F8] w-[280px] h-[350px]">
        <div className="">
        <img className="w-[100%] h-[100%]  mx-auto" src="https://www.shmai.com/preview/imeddoc-html/image/custom/teams.jpg" alt="" />
        <h1 className="font-bold text-xl text-slate-600">Dr. Jamika Jem</h1>
        <p className="   text-rose-500">Physician</p>
        </div>
    </div>

    <div className=" bg-[#F8F8F8] w-[280px] h-[350px]">
        <div className="">
        <img className="w-[100%] h-[100%]  mx-auto" src="https://www.shmai.com/preview/imeddoc-html/image/custom/teams2.jpg" alt="" />
        <h1 className="font-bold text-xl text-slate-600">Dr. Anthony James</h1>
        <p className="   text-rose-500">Assistance Doctor</p>
        </div>
    </div>

    <div className=" bg-[#F8F8F8] w-[280px] h-[350px] relative ">
        <div className="">
        <img className="w-[100%] h-[100%]  mx-auto" src="https://www.shmai.com/preview/imeddoc-html/image/custom/teams3.jpg" alt="" />
        <h1 className="font-bold text-xl text-slate-600">Dr. Mira Lee</h1>
        <p className="   text-rose-500">Dietiscian</p>
        </div>
    </div>


    

</div>
</div>

</div>

      {/* our doctors part end */}




      {/* Chiropractic start */}
      <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row  px-10 text-slate-500" >
    <img src="https://www.shmai.com/preview/imeddoc-html/image/features_img.png" className=" " />
    <div className='text-left'>
      <h1 className="text-4xl font-extrabold leading-relaxed ">Chiropractic & <span className='text-teal-300'>Rehabilitation Center</span></h1>
      <p className="py-6">quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
      <p className="border-b-2 w-[50px] my-2 font-bold border-rose-500"></p>

      <p className='py-7'>Eiusmod tempor incididunt ulabore seda ipsum dolorey magna aliqua enim veniam adipisicing elit sed eiusmod tempor incididunt</p>

      <p className='my-3'><span className='text-orange-600 mr-2 font-bold'>&rarr;</span>Consectetur adipisicing elit sed eiusmod</p>
      <p className='my-3'><span className='text-orange-600 mr-2 font-bold'>&rarr;</span>Tempor incididunt labore dolore magna aliqua.</p>
      <p className='my-3'><span className='text-orange-600 mr-2 font-bold'>&rarr;</span>Enim ad minim veniam quis nostrud exercitation</p>
      <p className='my-3'><span className='text-orange-600 mr-2 font-bold'>&rarr;</span>Ullamco laboris nisi ut aliquip ex ea commodo</p>
      <p className='my-3'><span className='text-orange-600 mr-2 font-bold'>&rarr;</span>Aute irure dolor in reprehenderit in voluptate velit esse</p>

      <button className='uppercase text-sm border-2 p-4 mt-5 text-black'>learn More</button>
    </div>

  </div>
</div>
      
      {/* Chiropractic end */}

      </div>


    );
};

export default Home;
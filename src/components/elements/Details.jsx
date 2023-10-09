import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../../../src/index.css'

const Details = () => {


    const [user,setUser] = useState([]);
    const {id} = useParams()

    console.log(id)

    useEffect(()=>{
        fetch('/alldata.json')
        .then(res => res.json())
        .then(data => {
            const x = data.find(user => user.id == id )
            setUser(x)
        })
    },[id])

 

    return (
        <div className="p-10">
            {user && (
                <div className="mt-10">
                    <img className="w-[60%] mx-auto" src={user.bannerimg} alt="" />
                    <h2 className="text-3xl font-bold py-5 text-slate-700 text-left">{user.name}</h2>
                    <p className="text-justify text-slate-900  py-3 leading-8">{user.longdescription}</p>

                    <Link to={'/'}><button className='uppercase float-left text-sm border-2 p-3 mt-5 text-black'> &larr; back Home</button></Link>
                </div>
            )}

<div>

      <div className="mr-20 ">
        <img  alt="gallery"   className="block h-[200px] w-1/2 mx-auto "  src="data:image/png;base64,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" />
      </div>

<div className=" mx-auto mt-10">
  <div className="grid md:grid-cols-4 gap-8 flex-wrap ">

  <div className="">
      <div className="w-full gallery relative overflow-hidden">
        <img  alt="gallery" className="block h-[200px] w-full "  src="https://english-blog.s3.amazonaws.com/uploads/2018/02/Suffering-From-Piles_twitter-copy.png" />
       <p className=" overly ">Conect with us and safe your future healthy life</p>
      </div>
    </div>

    <div className="">
      <div className="w-full gallery relative overflow-hidden">
        <img alt="gallery" className="block h-[200px] w-full "   src="https://sipwell.be/storage/blog/articles/why-drink-more-water-1612514710.png" />
        <p className=" overly ">Conect with us and safe your future healthy life</p>
      </div>
    </div>

    <div className="">
      <div className="w-full gallery relative overflow-hidden">
        <img   alt="gallery"   className="block h-[200px] w-full "   src="https://i.ytimg.com/vi/NQcYZplTXnQ/maxresdefault.jpg" />
        <p className=" overly ">Conect with us and safe your future healthy life</p>
      </div>
    </div>

    <div className="">
      <div className="w-full gallery relative overflow-hidden">
        <img  alt="gallery"   className="block h-[200px] w-full "  src="https://images.ctfassets.net/pdf29us7flmy/5FtARc0WbXC8cebi6tvoqj/6c0c84fbfe9af4ffa4d8b66239f40cc9/jobs-in-medicine_US.png" />
        <p className=" overly ">Conect with us and safe your future healthy life</p>
      </div>
    </div>



    <div className="">
      <div className="w-full gallery relative overflow-hidden ">
        <img  alt="gallery"  className="block h-[200px] w-full "     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExp8Z4PyBU1fyMYe6lRNohi002FkK_K7PgZ5KeEcbLS79eZYX0nuSRClct-ZaezQn_U8&usqp=CAU" />
        <p className=" overly ">Conect with us and safe your future healthy life</p>
      </div>
    </div>

    <div className="">
      <div className="w-full gallery relative overflow-hidden">
        <img  alt="gallery"   className="block h-[200px] w-full "    src="https://ayu.health/blog/wp-content/uploads/2023/06/Untitled-1200-%C3%97-800px-5.webp" />
        <p className=" overly ">Conect with us and safe your future healthy life</p>
      </div>
    </div>

    <div className="">
      <div className="w-full gallery relative overflow-hidden">
        <img  alt="gallery" className="block h-[200px] w-full "    src="https://apricushealth.com/wp-content/uploads/2021/07/40.-1024-x-768_Banner-_-Are-Annual-Physical-Exams-Necessary-1.jpg" />
        <p className=" overly ">Conect with us and safe your future healthy life</p>
      </div>
    </div>

    <div className="">
      <div className="w-full gallery relative overflow-hidden">
        <img  alt="gallery"  className="block h-[200px] w-full "  src="https://wellnessmedicine.com.au/wp-content/uploads/2020/05/Wellness_medicine-GP.jpg" />
        <p className=" overly ">Conect with us and safe your future healthy life</p>
      </div>
    </div>

  </div>
</div>
        </div>
        </div>
    );
};

export default Details;
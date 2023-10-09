
import { FaRegComment} from 'react-icons/fa';
import { BiSolidUser} from 'react-icons/bi';
import { VscFiles} from 'react-icons/vsc';
import { CiCalendarDate} from 'react-icons/ci';


const Gallary = () => {
    return (
        <div>

<div className="maincard relative my-10  h-[300px] w-full bg-center  bg-cover bg-no-repeat bg-[url(https://img.freepik.com/free-photo/happy-senior-man-handshaking-with-female-doctor-while-talking-lobby-clinic_637285-460.jpg?w=826&t=st=1696769724~exp=1696770324~hmac=83c426fd1dd7777618baf82055e3b84cdab0243b62fa3a492596041617498e5c)]">
  <div className="overl w-full h-full bottom-0  pt-32 left-0 z-10 bg-[rgba(75,121,240,0.85)] absolute">
    <h1 className="text-4xl text-left text-white ml-10 font-bold">Your Medical Records Are Safe Now A Days.</h1>
</div>
</div>      

  <div className="mainlog w-full md:flex px-5 my-20">
    <div className=" w-full md:w-[70%] block">
    <img className="w-full " src="/images/eye-700x438.jpg" alt="" />
    <div className="flex bg-blue-500 gap-4 p-5 text-white ">
      <span className="text-extrabold items-center mx-2 flex text-lg"> <CiCalendarDate className='mx-2'></CiCalendarDate> November 15, 2018</span>  
      <span className="text-extrabold items-center mx-2 flex text-lg"><BiSolidUser className='mx-1'></BiSolidUser> admin     </span>
      <span className="text-extrabold items-center mx-2 flex text-lg"> <FaRegComment className='mx-1'></FaRegComment> Comment: 1</span> 
      <span className="text-extrabold items-center mx-2 flex text-lg"> <VscFiles className='mx-1'></VscFiles> blog </span>
    </div>

<p className="text-justify block leading-7 py-5">
Comprehensive Eye Treatment for Your Vision Health
Your vision is invaluable, and taking care of your eyes is essential for a high quality of life. Our state-of-the-art eye treatment center is committed to preserving and enhancing your vision.
Our team of experienced ophthalmologists and optometrists offers a wide range of services to address various eye conditions and concerns. Whether youre dealing with common issues like nearsightedness, farsightedness, or astigmatism, or facing more complex conditions such as cataracts, glaucoma, or macular degeneration, we have the expertise to provide you with the best possible care.
<p className='mt-8'>
1.Vision Correction: We offer the latest in refractive surgery options like LASIK, PRK, and lens implants to reduce or eliminate the need for glasses or contacts.
</p>
<p>
2.Cataract Surgery: Our skilled surgeons specialize in cataract removal and lens replacement procedures, restoring clear vision and improving your overall quality of life.
</p>
<p>
  3.Glaucoma Management: Early detection and effective management of glaucoma are crucial for preventing vision loss. Our team will work with you to develop a personalized treatment plan.
</p>
4. Retina Care**: We provide advanced treatments for retinal conditions, including diabetic retinopathy and macular degeneration, to help maintain or restore your vision.
5. Pediatric Eye Care: We understand the unique needs of young patients and offer pediatric eye exams, vision therapy, and treatments for childhood eye conditions.
6. Routine Eye Exams: Regular eye exams are essential for maintaining eye health. Our optometrists perform thorough check-ups to detect issues early and ensure optimal vision.
At our eye treatment center, we prioritize patient comfort, safety, and the latest technology to deliver exceptional care. 
</p>

<div className='bg-slate-100 text-left mt-10 p-10 rounded'>
  <h2 className='text-xl font-bold text-black mb-2'>Leave feedback about this</h2>
  <p className='text-lg text-slate-600 '>You must be logged in to post a comment.</p>
</div>

</div>







<div className='md:w-[30%] md:m-0 mt-10 md:px-10 '>
<h1 className='text-left font-bold text-xl mb-4 text-blue-600'>Recent Blogs</h1>
  <p className='border border-blue-700 mb-10 w-[40px]'></p>

<div className='space-y-10'>
  
  <div className='flex text-left'>
    <img className='w-[130px]  h-full' src="/images/bolg1.webp" alt="" />
    <h1 className='px-5 text-slate-600 font-bold'>
      <p className='text-blue-500'> November 15, 2018</p>
      <p>We are amongst the most qualified dental implant providers</p>
    </h1>
  </div>
  <div className='flex text-left'>
    <img className='w-[130px]  h-full' src="/images/blog2.webp" alt="" />
    <h1 className='px-5 text-slate-600 font-bold'>
      <p className='text-blue-500'> November 15, 2018</p>
      <p>We are amongst the most qualified dental implant providers</p>
    </h1>
  </div>
  <div className='flex text-left'>
    <img className='w-[130px]  h-full' src="/images/blog3.webp" alt="" />
    <h1 className='px-5 text-slate-600 font-bold'>
      <p className='text-blue-500'> November 15, 2018</p>
      <p>We are amongst the most qualified dental implant providers</p>
    </h1>
  </div>

  <h1 className='text-left font-bold text-xl mb-4 text-blue-600'>Popular Blogs</h1>

  <div className='flex text-left'>
    <img className='w-[130px]  h-full ' src="/images//blog4.webp" alt="" />
    <h1 className='px-5 text-slate-600 font-bold'>
      <p className='text-blue-500'> November 15, 2018</p>
      <p>We are amongst the most qualified dental implant providers</p>
    </h1>
  </div>
  <div className='flex text-left'>
    <img className='w-[130px]  h-full' src="/images/blog5.webp" alt="" />
    <h1 className='px-5 text-slate-600 font-bold'>
      <p className='text-blue-500'> November 15, 2018</p>
      <p>We are amongst the most qualified dental implant providers</p>
    </h1>
  </div>
  <div className='flex text-left'>
    <img className='w-[130px]  h-full' src="/images/blog6.webp" alt="" />
    <h1 className='px-5 text-slate-600 font-bold'>
      <p className='text-blue-500'> November 15, 2018</p>
      <p>We are amongst the most qualified dental implant providers</p>
    </h1>
  </div>

</div>
</div>

  </div>


</div>
    );
};

export default Gallary;
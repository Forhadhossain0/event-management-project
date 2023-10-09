import { AiOutlinePlusCircle } from 'react-icons/ai';

const Footer = () => {
    return (




<footer className="footer p-10 bg-black text-white ">
  <aside>
     <h1 className='text-[36px] text-white font-bold items-center flex'> <AiOutlinePlusCircle className='text-[#30b3ff] items-center'></AiOutlinePlusCircle> <span className='text-[#e41d3ef6]'>Li</span><span className='text-[#60ff75]'>fe</span>lab</h1>
     <p className='text-left'>Lifelab Care & Health Center <br/>Providing reliable medical helth help since 2006.</p>
  </aside> 

<nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>

</footer>


    );
};

export default Footer;
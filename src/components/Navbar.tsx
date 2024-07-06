import { Link } from "react-scroll";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.png"
import { useState } from "react";

//@ts-ignore
import ProgressBar from "react-scroll-progress-bar";



export function Navbar() {
  const [open, setOpen] = useState(false)

 

  return (
    <div className=" flex justify-between  p-3 md:m-5">
       <ProgressBar height="6" bgcolor="#373A40" duration="0.2" />
    
      <div className="text-3xl   justify-center w-24 h-8  ml-7 cursor-pointer md:pt-2">
        <img src={logo} alt="" />
       
      </div>

      <div onClick={()=>{setOpen(!open)}} >
      
     
      {open?<IoMdClose className="absolute h-14 w-9 right-1 md:hidden top-6 cursor-pointer"/>:<IoMdMenu className="absolute h-14 w-9 right-1 md:hidden top-6 cursor-pointer" />}
      </div>

      <div className=
      {`md:flex md:gap-8 md:pt-7 
      
      absolute bg-white  md:static md:items-center lg:justify-center top-28 p-4 space-y-6 md:space-y-0 w-full md:w-auto lg:pr-60 pl-5 transition-all duration-500 ease-in md:pl-0  gap-7 md 
      ${open?"top-20 opacity-100":"top-[-490px]"}  `}>
        <div className="text-xl">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={900}
            className="cursor-pointer hover:text-deep-purple-700 duration-150 "
          >
            HOME
          </Link>
        </div>
        <div className="text-xl">
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={50}
            duration={900}
            className="cursor-pointer hover:text-deep-purple-700 duration-150"
          >
            SERVICES
          </Link>
        </div>

        <div className="text-xl">
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={50}
            duration={900}
            className="cursor-pointer hover:text-deep-purple-700 duration-150 mt-10"
          >
            CLIENTS
          </Link>
        </div>
        
       
        <div className="text-xl">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={900}
            className="cursor-pointer hover:text-deep-purple-700 duration-150"
          >
            ABOUT US
          </Link>
        </div>
      </div>

      <div className="pt-7 pr-10 md:pr-0">
      <Link
            activeClass="active"
            to="contactus"
            spy={true}
            smooth={true}
            offset={50}
            duration={900}
            className="text-white cursor-pointer bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
           CONTACT US
          </Link>
      </div>
    </div>
  );
}


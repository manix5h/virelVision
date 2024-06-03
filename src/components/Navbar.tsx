import { Link } from "react-scroll";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.png"
import { useState } from "react";


export function Navbar() {
  const [open, setOpen] = useState(false)

 

  return (
    <div className=" flex justify-between   m-4">
      <div className="text-3xl   justify-center w-24 h-8  ml-9 cursor-pointer md:pt-4">
        <img src={logo} alt="" />
       
      </div>

      <div onClick={()=>{setOpen(!open)}} >
      
     
      {open?<IoMdClose className="absolute h-14 w-9 right-1 md:hidden top-9 cursor-pointer"/>:<IoMdMenu className="absolute h-14 w-9 right-1 md:hidden top-9 cursor-pointer" />}
      </div>

      <div className=
      {`md:flex md:gap-8 md:pt-7 
      
      absolute bg-white md:static md:items-center top-28 space-y-6 md:space-y-0 w-full md:w-auto lg:pr-60 pl-5 transition-all duration-300 ease-in md:pl-0  gap-7 md 
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
            Home
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
            Clients
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
            Services
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
            About Us
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
            Contact Us
          </Link>
      </div>
    </div>
  );
}


import cl1 from "../assets/cl1.png";
import cl2 from "../assets/cl2.png";
import cl3 from "../assets/cl3.png";
import cl4 from "../assets/cl4.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



export function Clients(){
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 700,
      easing: 'ease',
      delay: 20,
      once:false
    });
  },[])
    return(
       <div className="h-fit flex flex-col justify-center " id="clients">
        <div className="text-4xl text-center mt-10" data-aos="fade-right">
        Our Clients
        </div>

        <div className="flex  w-full  p-4 justify-around mt-5" >
          <img data-aos="fade-right" src={cl1} alt="" className="w-1/6 p-3 shadow-lg rounded-md " />
          <img data-aos="fade-right" src={cl3} alt="" className="w-1/6 p-3 shadow-lg rounded-md" />
          <img data-aos="fade-right" src={cl4} alt="" className="w-1/6 p-3 shadow-lg rounded-md" />
          <img data-aos="fade-right" src={cl2} alt="" className="w-1/6 p-3 shadow-lg rounded-md" />

        </div>
            
       </div>
    )
}

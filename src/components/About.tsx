import p1 from "../assets/01.jpg"
import p2 from "../assets/02.jpg"
import p3 from "../assets/03.jpg"
import p4 from "../assets/04.jpg"
import p5 from "../assets/05.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function About(){
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 700,
      easing: 'ease',
      delay: 20,
      once:false
    });
  },[])
    return (
      <div  id="about w-fit">
        <div data-aos="fade-right" className="flex p-4 justify-center m-3 ">
          <h1 className="text-3xl  pl-4">CONNECT WITH US</h1>
        </div>

        <div className="flex  w-full  p-4 justify-around mt-8">
          <img data-aos="fade-right" src={p1} alt="" className="w-1/6 p-3 shadow-lg rounded-md " />
          <img data-aos="fade-right" src={p2} alt="" className="w-1/6 p-3 shadow-lg rounded-md" />
          <img data-aos="fade-right" src={p3} alt="" className="w-1/6 p-3 shadow-lg rounded-md" />
          <img data-aos="fade-right" src={p4} alt="" className="w-1/6 p-3 shadow-lg rounded-md" />
          <img data-aos="fade-right" src={p5} alt="" className="w-1/6 p-3 shadow-lg rounded-md" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div data-aos="fade-right" className="mt-3 md:m-5 text-3xl text-gray-700 text-center md:text-start">
            <h2 className="m-3">VIREL VISION</h2>
          </div>

          <div data-aos="fade-left" className="flex justify-center text-center md:text-start md:justify-end md:m-10 p-5">
            <div className=" ">
              <div className="">
                <div className="">
                  <p className="text-gray-700 ">8209521956</p>

                  <p className="text-gray-700 font-serif">
                    virelvision.in@gmail.com
                  </p>
                  <p className="pt-5 text-gray-700">
                    BORKHERA KOTA , RAJASTHAN (INDIA)
                  </p>
                </div>
              </div>
              <div>
                <p className="text-3xl pt-5 md:pt-6 text-gray-700">
                  Stay Updated, Subscribe
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
}
import { data } from "./Data";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export function Services() {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 700,
      easing: 'ease',
      delay: 20,
      once:false,
      
    });
  },[])
  return (
    <div  id="services" className="h-fit">
      <div data-aos="fade-right"  className="flex justify-center pt-10">
        <h1 className="text-4xl p-5">OUR SERVICES</h1>
      </div>

      <div className="flex justify-center ">
        <div className=" grid grid-cols-1 md:space-x-5 space-y-3 md:grid-cols-3 ">
          <ServiceCard
            heading={data.s1.heading}
            paragraph={data.s1.paragraph}
            image={data.s1.image}
          />
          <ServiceCard
            heading={data.s2.heading}
            paragraph={data.s2.paragraph}
            image={data.s2.image}
          />
          <ServiceCard
            heading={data.s3.heading}
            paragraph={data.s3.paragraph}
            image={data.s3.image}
          />
        </div>
      </div>
    </div>
  );
}

interface ServiceCard {
  heading: string;
  paragraph: string;
  image: string;
}

function ServiceCard({ heading, paragraph, image }: ServiceCard) {
  return (
    <div data-aos="fade-right">
      <div className="flex justify-center">
        <div className="p-4  ">
          <img
            src={image}
            alt=""
            className="rounded-md shadow-xl m-3 mx-auto "
          />
          <div className="flex justify-center">
            <div className="m-4 w-3/4 ">
              <h1 className="text-2xl text-center mx-auto "> {heading} </h1>
              <p className="mx-auto text text-gray-500 text-center  text-wrap leading-relaxed text-xl">
                {paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
